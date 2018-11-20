import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '.././users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  // @Input()
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  counter: number;

  constructor(private usersService: UsersService) {
    this.usersService.userActivated.subscribe((total: number) => this.counter = total );
  }

  onSetToActive (id: number) {
    // this.userSetToActive.emit(id);
    this.usersService.setToActive(id);
  }

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
    this.counter = this.usersService.inactiveUsers.length;
  }


}
