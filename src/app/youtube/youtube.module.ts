import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SearchItemComponent } from './pages/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderService } from '../core/services/header.service';

const routes: Routes = [
  { path: '', redirectTo:'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'detailed/:id', component: DetailedInformationComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    SearchItemComponent,
    SearchResultsComponent,
    FilterPipe,
    DetailedInformationComponent
  ],
  imports: [
    CommonModule,    
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers:[],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
  ]
})
export class YoutubeModule { }
