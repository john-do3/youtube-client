import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { Subscription } from 'rxjs';
import { IFilter } from '../../../core/models/filter.model';
import { ISearchItem } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  @Input()
    filterCriteria!: IFilter;

  @Input()
    data!: ISearchItem[];

  constructor(
    private headerService: HeaderService,
  ) {
  }

  ngOnInit(): void {
    // subscriptions may be grouped together through the add() method,
    // which will attach a child Subscription to the current Subscription.
    // When a Subscription is unsubscribed, all its children(and its grandchildren) will be unsubscribed as well.
    this.subscriptions.add(
      this.headerService.FilterClicked.subscribe((criteria) => {
        this.filterCriteria = criteria;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
