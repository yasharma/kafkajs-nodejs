import { expect } from 'chai';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tryAndExpect = async (testFunction: () => Promise<any>, errorType: any) => {
  try {
    await testFunction();
  } catch (error) {
    return expect(error).instanceOf(errorType);
  }
  return expect(() => undefined).to.throw(errorType);
};
