/* eslint-disable @typescript-eslint/no-unsafe-return */
import { getNamespace } from 'continuation-local-storage';

class CorrelationIDHelper {
  getCorrelationId(): string {
    const correlationIdNamespace = getNamespace('correlation_id');
    return (correlationIdNamespace && correlationIdNamespace.get('correlationId')) || 'unknown';
  }
}
export default new CorrelationIDHelper();
