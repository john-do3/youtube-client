import { Component, OnInit } from '@angular/core';
import { IFilter } from 'src/app/core/models/filter.model';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  filterCriteria!: IFilter;

  isSearchResultsVisible!: boolean;

  constructor(private headerService: HeaderService) {
    headerService.SearchClicked.subscribe(
      (value) => {
        this.isSearchResultsVisible = value;
      },
    );
  }

  ngOnInit(): void {
    this.isSearchResultsVisible = this.headerService.isSearchResultsVisible;
    this.filterCriteria = this.headerService.filterCriteria;
  }
}
