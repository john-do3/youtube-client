import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { youtubeRoute } from 'src/app/project.constants';
import { ISearchItem } from '../../../shared/models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent {
  id!: string;

  data!: ISearchItem;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private youtubeService: YoutubeService) {
    this.id = activateRoute.snapshot.params['id'];

    if (!this.id) router.navigateByUrl('main');

    this.data = this.youtubeService.selectedData;
  }

  onBack(): void {
    this.router.navigateByUrl(`${youtubeRoute}/main`);
  }

  getImageSrc(): string {
    if (this.data.snippet.thumbnails.maxres?.url) { return this.data.snippet.thumbnails.maxres.url; }
    return this.data.snippet.thumbnails.default.url;
  }
}
