import { Component, Input } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  @Input() data!: ISearchItem;
}
