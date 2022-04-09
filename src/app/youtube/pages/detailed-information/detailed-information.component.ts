import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { searchData } from '../../models/search-data';
import { ISearchItem } from '../../../shared/models/search-item.model';
import { youtubeRoute } from 'src/app/project.constants';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent {
  id!: string;

  data!: ISearchItem;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];

    if (!this.id) router.navigateByUrl('main');

    this.data = searchData.items.find((x) => x.id === this.id) as ISearchItem;
  }

  onBack(): void {
    this.router.navigateByUrl(`${youtubeRoute}/main`);
  }
}
