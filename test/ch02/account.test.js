import { Account } from './account';

describe('all', () => {
  let account;

  beforeEach(() => {
    account = new Account(10000);
  });

  afterEach(() => {});

  test('should Account', () => {
    expect(account).toBeTruthy();
  });
  test('should getBalance', () => {
    expect(10000).toBe(account.getBalance());
  });
  test('should withdraw', () => {
    account.withdraw(1000);
    expect(9000).toBe(account.getBalance());
  });
  test('should Deposit', () => {
    account.deposit(1000);
    expect(11000).toBe(account.getBalance());
  });
});
