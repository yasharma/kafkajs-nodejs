import RequestHelper from '../utils/requestHelper';
import { BaseService } from './BaseService';

export class SetupService extends BaseService {
  constructor(protected requestHelper: RequestHelper) {
    super();
  }

  async setup() {
    return { message: 'setup is done' }
  }

}
