import * as express from 'express';
import * as debug from 'debug';
import { initAPI } from './initialize';

// Inicializa express
const app = express();
initAPI(app);

// Inicia el servidor HTTP
const port = 3002;
const server = app.listen(3002, () => debug('andes')('listening on port %s', port));

