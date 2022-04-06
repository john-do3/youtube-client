import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchItem } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() data!: ISearchItem;

  constructor(private router: Router) { }

  onMore(): void {
    this.router.navigateByUrl(`youtube/detailed/${this.data.id}`);
  }
}
