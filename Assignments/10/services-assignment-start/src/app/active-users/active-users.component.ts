import { Component, OnInit} from '@angular/core';
import { UsersService } from '.././users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  // @Input()
  users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  counter: number;

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    // this.userSetToInactive.emit(id);
  }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
    this.counter = this.usersService.activeUsers.length;
  }

  constructor(private usersService: UsersService) {
    this.usersService.userDeactivated.subscribe((total: number) => this.counter = total );
  }

}
