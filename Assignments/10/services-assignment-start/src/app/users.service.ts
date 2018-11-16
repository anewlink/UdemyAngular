import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';


@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  userActivated =  new EventEmitter <number>();
  userDeactivated = new EventEmitter <number> ();

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.userActivated.emit(this.counterService.userActivaterCounter += 1);
    console.log(this.counterService.userActivaterCounter);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.userDeactivated.emit(this.counterService.userDeactivaterCounter += 1);
    console.log(this.counterService.userDeactivaterCounter);
  }

  constructor(private counterService: CounterService) {

  }

}
