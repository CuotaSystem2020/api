import * as express from "express";
import { climaAPI } from "./../../../config.private";
var OAuth = require("oauth");

var router = express.Router();

router.get("/clima", function(req, res, next) {
  let header = {
    "X-Yahoo-App-Id": climaAPI.apiId
  };
  let request = new OAuth.OAuth(
    null,
    null,
    climaAPI.consumer_key,
    climaAPI.consumer_secret,
    "1.0",
    null,
    "HMAC-SHA1",
    null,
    header
  );
  request.get(
    "https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=-37.388835&lon=-68.927457&u=c&format=json",
    null,
    null,
    function(err, data, result) {
      if (err) {
        return err;
      } else {
        res.status(200).json(data);
      }
    }
  );
});

export = router;
