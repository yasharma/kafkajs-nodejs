import { Permission } from '../models/entities/Permission';
import { IUserToken } from '../models/IUserToken';
import { ForbiddenError } from '../exceptions/ForbiddenError';
import { UnauthorizedError } from '../exceptions/UnauthorizedError';
import config from '../config';
import { AppError } from '../exceptions/AppError';

export class BaseService {
  constructor() {}
  protected authorize(action: Permission, byUser?: IUserToken) {
    if (!byUser) throw new ForbiddenError('access token is required!');
    switch (action) {
      case Permission.view:
        return Promise.resolve();
      case Permission.create:
      case Permission.edit:
      case Permission.delete:
        if (config.authorizedRole.includes(byUser.role)) return Promise.resolve();
        break;
    }
    throw new UnauthorizedError(`you are not allowed to '${action}'`);
  }
}
