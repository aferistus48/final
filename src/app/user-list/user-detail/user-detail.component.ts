import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
    private location: Location,
  ) { }

  ngOnInit():void {

    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._userService.getUser(id).subscribe(user => this.user = user);
  }
  goBack():void {
    this.location.back();
  }
  save(): void {
    this._userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }
  delete(user: User): void {
    this.user = user;
    this._userService.deleteUser(user).subscribe(() => this.goBack());
  }
}
