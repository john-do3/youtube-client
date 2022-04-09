import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { loginRoute, youtubeRoute } from 'src/app/project.constants';
import { ISortModel } from 'src/app/youtube/models/sort.model';
import { HeaderService } from '../../services/header.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
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
    console.log('header constructed');
    router.events.subscribe(() => {
      this.userName = this.userService.getUserName();
    });
  }

  ngOnInit(): void {
    this.userService.IsLoggedIn.subscribe((val) => {
      this.isLoggedIn = val;
    });
  }

  ngOnDestroy(): void {
    this.userService.IsLoggedIn.unsubscribe();
  }

  searchClick(): void {
    if (this.searchInput.value) {
      this.router.navigateByUrl(`${youtubeRoute}/main`);
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

  loginClick(): void {
    this.router.navigateByUrl(loginRoute);
  }

  logoutClick(): void {
    this.userService.logoutUser();
    this.router.navigateByUrl(loginRoute);
  }
}
