import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('data') user: User;
  @Input() display: boolean;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAction = new EventEmitter<boolean>();

  constructor(
    private userService: UserService,
    private notifService: NotificationsService
  ) { }

  ngOnInit() { }

  cancel() {
    this.onAction.emit(false);
  }

  delete() {
    this.userService.deleteUser(this.user.id)
      .subscribe(
        resp => {
          this.notifService.success(null, 'Success', { timeOut: 3000 });
          setTimeout(() => this.onAction.emit(true), 3000);
        },
        error => this.notifService.error('Erreur', error));
  }
}
