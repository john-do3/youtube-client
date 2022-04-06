import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  @Input() data!: ISearchItem;

  constructor() { }

  ngOnInit(): void {
  }
}
