import RequestHelper from '../utils/requestHelper';
import { BaseService } from './BaseService';
import { NewsAPISRepository } from '../repositories/NewsAPISRepository';

export class FilterService extends BaseService {
  constructor(protected requestHelper: RequestHelper) {
    super();
  }

  protected get newsAPIRepo() {
    return new NewsAPISRepository();
  }

  async findDefaultFilters() {
    return await this.newsAPIRepo.findDefaultFilters();
  }

}
