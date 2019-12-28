import * as bodyParser from "body-parser";
import { Connections } from "./connections";
import * as config from "./config";
import { Express, Router } from "express";
import * as HttpStatus from "http-status-codes";

const requireDir = require("require-dir");

export function initAPI(app: Express) {
  // Inicializa Mongoose
  Connections.initialize();

  // Configura Express
  app.use(bodyParser.json({ limit: "150mb" }));
  // app.use(boolParser());
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,PATCH,OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Requested-With"
    );

    // Permitir que el método OPTIONS funcione sin autenticación
    if ("OPTIONS" === req.method) {
      res.header("Access-Control-Max-Age", "1728000");
      res.sendStatus(200);
    } else {
      next();
    }
  });

  // Carga los módulos y rutas
  for (const m in config.modules) {
    if (config.modules[m].active) {
      const routes = requireDir(config.modules[m].path);
      for (const route in routes) {
        app.use("/api" + config.modules[m].route, routes[route]);
        if (config.modules[m].middleware) {
          app.use(
            "/api" + config.modules[m].route,
            config.modules[m].middleware,
            routes[route]
          );
        } else {
          app.use("/api" + config.modules[m].route, routes[route]);
        }
      }
    }
  }

  // Error handler
  app.use((err: any, req, res, next) => {
    if (err) {
      // Parse err
      let e: Error;
      if (!isNaN(err)) {
        e = new Error(HttpStatus.getStatusText(err));
        (e as any).status = err;
        err = e;
      } else {
        if (typeof err === "string") {
          e = new Error(err);
          (e as any).status = 400;
          err = e;
        } else if (!err.status) {
          err.status = 500;
        }
      }

      // IMPORTANTE: Express app.get('env') returns 'development' if NODE_ENV is not defined.
      // O sea, la API está corriendo siempre en modo development

      // Send response
      res.status(err.status);
      res.send({
        message: err.message,
        error: app.get("env") === "development" ? err : null
      });
    }
  });
}
