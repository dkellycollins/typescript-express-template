import server from './server';
import {Config} from './config';

server.listen(Config.server.port);
console.info(`Server started on port ${Config.server.port}`);