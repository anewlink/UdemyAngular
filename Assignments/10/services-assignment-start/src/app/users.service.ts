import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {

  }

  userActivated =  new EventEmitter <number>();
  userDeactivated = new EventEmitter <number> ();

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActivaterCounter();
    this.userActivated.emit(this.counterService.userActivaterCounter);
    // console.log(this.counterService.userActivaterCounter);
  }

  setToActive (id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementDeactivaterCounter();
    this.userDeactivated.emit(this.counterService.userDeactivaterCounter);
    // console.log(this.counterService.userDeactivaterCounter);
  }



}
