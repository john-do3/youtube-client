import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { searchData } from '../../models/search-data';
import { ISearchItem } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent {
  id!: string;
  data!: ISearchItem;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];

    if (!this.id)
      router.navigateByUrl('main');

    this.data = searchData.items.find(x => x.id == this.id) as ISearchItem;
  }

  onBack(): void{
    history.back();
  }

}