import {interfaces, controller, httpGet as Get} from 'inversify-express-utils';
import {injectable, inject} from 'inversify';

@injectable()
@controller('/status')
export class StatusController implements interfaces.Controller {

  constructor() {}

  @Get('/')
  private statusCheck(): boolean {
    return true;
  }

}