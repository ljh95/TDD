export class Account {
  constructor(payment) {
    this.payment = payment;
  }

  getBalance() {
    return this.payment;
  }
  withdraw(money) {
    this.payment -= money;
  }
  deposit(money) {
    this.payment += money;
  }
}
