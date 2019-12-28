import * as express from 'express';
import * as mongoose from 'mongoose';

var router = express.Router();

router.get('/alumnos', function (req, res, next) {
   console.log("Entra a alumnos");
});

export = router;