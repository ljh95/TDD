import { BadParameterException } from '../exception';

const badParameterException = new BadParameterException();

it.skip('trycatch error', async () => {
  try {
    await acceptOrder({ amount: -1000 });
  } catch (e) {
    expect(e).toBeInstanceOf(badParameterException);
    expect(e.message).toBe('BadParameterException error message');
  }
});
