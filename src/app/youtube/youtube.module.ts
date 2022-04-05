import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SearchItemComponent } from './pages/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchSettingsComponent } from './pages/search-settings/search-settings.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CardStyleDirective } from './directives/card-style.directive';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';

const routes: Routes = [
  { path: '', redirectTo:'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'detailed', component: DetailedInformationComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchSettingsComponent,
    FilterPipe,
    CardStyleDirective,
    DetailedInformationComponent
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
