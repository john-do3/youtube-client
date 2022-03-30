import {
  Component, Input, OnInit, Output, EventEmitter, ViewChild,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { ISortModel } from 'src/app/models/sort.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSearchSettingsVisible: boolean = false;
  isSearchClicked: boolean = false;
  
  @ViewChild('searchInput')
  searchInput!: MatInput;

  @Input() title: string = '';

  @Output()
  searchClicked: EventEmitter<Object> = new EventEmitter<Object>();

  @Output()
  sortClicked: EventEmitter<ISortModel> = new EventEmitter<ISortModel>();

  constructor() { }

  ngOnInit(): void {
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

  onSortClicked(sortType:ISortModel){
    this.sortClicked.emit(sortType);
  }

  loginClick() {
    console.log('login clicked');
  }
}
