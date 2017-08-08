import {InversifyExpressServer} from 'inversify-express-utils';
import container from './container';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const server = new InversifyExpressServer(container);

server.setConfig((app: express.Application) => {

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

});

export default server.build();