import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
  // providers: [CounterService] ,
})
export class AppComponent {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];
/*   activeUsers = this.usersService.activeUsers;
  inactiveUsers = this.usersService.inactiveUsers; */

  /*onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.usersService.setToActive(id);
  }*/

/*   constructor(private usersService: UsersService) {

  } */
}