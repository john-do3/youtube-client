import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeComponent } from './youtube.component';
import { SearchItemComponent } from './pages/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchSettingsComponent } from './pages/search-settings/search-settings.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CardStyleDirective } from './directives/card-style.directive';

const routes: Routes = [
  { path: '', component: YoutubeComponent }
];

@NgModule({
  declarations: [
    YoutubeComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchSettingsComponent,
    FilterPipe,
    CardStyleDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    SearchSettingsComponent,
  ]
})
export class YoutubeModule { }
