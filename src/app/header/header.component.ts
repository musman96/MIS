import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AccountService } from '../_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  user: User;

    constructor(private accountService: AccountService) {
      //this.accountService.user.subscribe(x => this.user = x);
    }
  ngOnDestroy(): void {
   // this.accountService.user.subscribe().unsubscribe();
  }

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout() {
    this.accountService.logout();
}

}
