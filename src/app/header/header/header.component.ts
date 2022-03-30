import {
  Component, Input, OnInit, Output, EventEmitter, ViewChild,
} from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSearchSettingsVisible: boolean = false;

  @ViewChild('searchInput')
    searchInput!: MatInput;

  @Input() title: string = '';

  @Output()
    searchClicked: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  ngOnInit(): void {
  }

  searchClick() {
    if (this.searchInput.value) this.searchClicked.emit();
  }

  searchSettingsClick() {
    this.isSearchSettingsVisible = !this.isSearchSettingsVisible;
  }

  loginClick() {
    console.log('login clicked');
  }
}
