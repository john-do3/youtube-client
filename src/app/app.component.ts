import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  isSearchResultsVisible: boolean = false;

  onSearchClicked(ev: any) {
    this.isSearchResultsVisible = true;
  }
}
