import 'reflect-metadata';
import * as promiseFinally from 'promise.prototype.finally';
import {Container} from 'inversify';
import {interfaces as expressUtilInterfaces, TYPE} from 'inversify-express-utils';
import TYPES from './types';
import {IConfig, Config} from './config';
import {ControllerNames, StatusController} from './controllers';

promiseFinally.shim();

const container = new Container({ defaultScope: 'Singleton' });

//Config
container.bind<IConfig>(TYPES.Config).toConstantValue(Config);

//Controller
container.bind<expressUtilInterfaces.Controller>(TYPE.Controller)
  .to(StatusController)
  .whenTargetNamed(ControllerNames.StatusController);

export default container;