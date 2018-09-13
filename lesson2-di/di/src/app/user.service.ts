export class UserService {

  private number;

  constructor() {
    this.number = Math.random();
  }

  getRandomNumber() {
    return this.number;
  }
}
