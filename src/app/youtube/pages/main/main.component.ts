import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFilter } from 'src/app/core/models/filter.model';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  filterCriteria!: IFilter;

  isSearchResultsVisible!: boolean;

  private subscriptions = new Subscription();

  constructor(private headerService: HeaderService) {

  }

  ngOnInit(): void {
    this.isSearchResultsVisible = this.headerService.isSearchResultsVisible;
    this.filterCriteria = this.headerService.filterCriteria;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
