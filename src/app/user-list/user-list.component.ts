import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { SortableDirective, SortEvent, compare } from '../sortable.directive';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  user: User;
  users: User[];

  constructor(
    private _userService: UserService,
    ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this._userService.getUsers().subscribe( users => this.users = users);
  }
  addUser(): void {
    this._userService.addUser(this.user);   
  }

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  onSort({column, direction}: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this._userService.sortColumn = column;
    this._userService.sortDirection = direction;
    
  }
  page = 1;
  pageSize = 4;

}
