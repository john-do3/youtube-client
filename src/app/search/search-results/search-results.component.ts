import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from '../search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  data!: ISearchResponse;

  constructor() { }

  ngOnInit(): void {
  }
}
