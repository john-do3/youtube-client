import {
  Component, Input, OnInit, Output, EventEmitter, ViewChild, OnChanges,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { IFilter } from 'src/app/youtube/models/filter.model';
import { ISortModel } from 'src/app/youtube/models/sort.model';
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

  @Input() title: string = '';

  @Output()
  searchClicked: EventEmitter<Object> = new EventEmitter<Object>();

  @Output()
  sortClicked: EventEmitter<ISortModel> = new EventEmitter<ISortModel>();

  @Output()
  filterClicked: EventEmitter<IFilter> = new EventEmitter<IFilter>();

  constructor(private userService: UserService, private router: Router) {
    router.events.subscribe((val) =>{
      this.userName = this.userService.getUserName();
      this.isLoggedIn = this.userService.checkIsLoggedIn();
    })
   }

  searchClick() {
    if (this.searchInput.value) {
      this.searchClicked.emit();
      this.isSearchClicked = true;
    }
  }

  searchSettingsClick() {
    this.isSearchSettingsVisible = !this.isSearchSettingsVisible;
  }

  onSortClicked(sortType: ISortModel) {
    this.sortClicked.emit(sortType);
  }

  onFilterClicked(filterCriteria: IFilter) {
    this.filterClicked.emit(filterCriteria);
  }

  logoutClick(): void {
    this.userService.logoutUser();
    this.router.navigateByUrl('auth');
  }
}
