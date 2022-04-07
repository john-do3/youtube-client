import { Component, Input, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { ISortModel } from 'src/app/youtube/models/sort.model';
import { HeaderService } from '../../services/header.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSearchSettingsVisible: boolean = false;

  isSearchClicked: boolean = false;

  userName!: string | null;

  @ViewChild('searchInput')
    searchInput!: MatInput;

  @Input() isLoggedIn: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private headerService: HeaderService,
  ) {
    router.events.subscribe(() => {
      this.userName = this.userService.getUserName();
      this.isLoggedIn = this.userService.checkIsLoggedIn();
    });
  }

  searchClick(): void {
    if (this.searchInput.value) {
      this.router.navigateByUrl('youtube/main');
      this.headerService.searchClick();
      this.isSearchClicked = true;
    }
  }

  searchSettingsClick(): void {
    this.isSearchSettingsVisible = !this.isSearchSettingsVisible;
  }

  onSortClicked(sortType: ISortModel): void {
    this.headerService.sortClick(sortType);
  }

  logoutClick(): void {
    this.userService.logoutUser();
    this.router.navigateByUrl('auth');
  }
}
