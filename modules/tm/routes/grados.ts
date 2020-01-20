import * as express from 'express';
import { grados } from './../schemas/grados';

var router = express.Router();

router.get('/grados', function(req, res, next) {    
	let query = grados.find({});

	query.exec(function(err, data) {
		if (err) {
			return next(err);
		}

		res.json(data);
	});
});

export = router;
