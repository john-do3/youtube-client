import { Component, OnInit } from '@angular/core';
import { IFilter } from './models/filter.model';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  filterCriteria!: IFilter;
  isSearchResultsVisible: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
