import { Component, OnInit } from '@angular/core';
import { IFilter } from '../../models/filter.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  filterCriteria!: IFilter;
  isSearchResultsVisible: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
