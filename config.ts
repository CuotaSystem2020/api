export const modules = {
  // tm: {
  //     active: true,
  //     path: './modules/tm/routes',
  //     route: '/modules/tm'
  // },
  cuotasystem: {
    active: true,
    path: "./modules/cuotasystem/routes",
    route: "/modules/cuotasystem"    
  }
  // reportes: {
  //     active: true,
  //     path: './modules/cuotasystem/routes/reportes',
  //     route: '/modules/alumnos/reportes'
  // },
  // auth: {
  //     active: true,
  //     path: './modules/auth/routes',
  //     route: '/modules/auth'
  // }
};

export const hosts = {
  mongoDB_main: {
    host: "mongodb://localhost/cuotasystem",
    options: {
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 500
    }
  }
};
