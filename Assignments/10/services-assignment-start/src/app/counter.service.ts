export class CounterService {
  userActivaterCounter = 0;
  userDeactivaterCounter = 0;

  incrementActivaterCounter() {
    this.userActivaterCounter++;
    console.log(this.userActivaterCounter);
  }

  incrementDeactivaterCounter() {
    this.userDeactivaterCounter++;
    console.log(this.userDeactivaterCounter);
  }
}
