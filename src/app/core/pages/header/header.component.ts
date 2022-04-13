import {
  ChangeDetectorRef,
  Component, Input, OnDestroy, OnInit, ViewChild,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import {
  debounceTime, Subject, Subscription,
} from 'rxjs';
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

  private searchSubject = new Subject<string>();

  private subscriptions = new Subscription();

  @ViewChild('searchInput')
    searchInput!: MatInput;

  @Input() isLoggedIn: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private headerService: HeaderService,
    private ref: ChangeDetectorRef
  ) {   
    
  }

  ngOnInit(): void {
    this.userName = this.userService.getUserName();
    this.isLoggedIn = this.userService.checkIsLoggedIn();
    this.subscriptions.add(
      this.userService.IsLoggedIn.subscribe((val) => {
        this.isLoggedIn = val;
        this.userName = this.userService.getUserName();
        this.ref.detectChanges();
      }),
    );

    this.subscriptions.add(
      this.searchSubject.pipe(
        debounceTime(1000),
      ).subscribe(() => {
        if (this.searchInput.value.length >= 3) { this.headerService.searchClick(this.searchInput.value); }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  searchClick(): void {
    if (this.searchInput.value) {
      this.router.navigateByUrl(`${youtubeRoute}/main`);
      this.headerService.searchClick(this.searchInput.value);
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

  applySearch(filterValue: any) {
    this.isSearchClicked = true;
    this.searchSubject.next(filterValue.data);
  }
}
