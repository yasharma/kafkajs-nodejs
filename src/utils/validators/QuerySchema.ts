import Validator from 'fastest-validator';
import { ValidationError } from '../../exceptions/ValidationError';
import { IQueryRequest } from '../../models/requests/IQueryRequest';
import { JobType } from '../../models/entities/JobType';

const QuerySchema = {
  $$strict: true,
  name: {
    type: 'enum',
    values: Object.keys(JobType),
  },
  query: 'string',
};

const validator = new Validator();
const validateCreate = validator.compile(QuerySchema);

export const validateAddQuery = (request: IQueryRequest) => {
  const isValidationPassed = validateCreate(request);
  if (typeof isValidationPassed === 'boolean') {
    return isValidationPassed;
  } else {
    throw new ValidationError(isValidationPassed);
  }
};
