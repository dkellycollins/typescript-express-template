import * as _ from 'lodash';
export {IConfig} from './IConfig';

const env = process.env.NODE_ENV;
if(!env) {
  throw new Error(`Environment not found. NODE_ENV must be specified when running services.`);
}

console.info(`Loading config for env: "${env}"`);

const defaultConfig = require('./config').Config;
const envConfig = require(`./config.${env}`).Config;

export const Config = _.merge({}, defaultConfig, envConfig);
