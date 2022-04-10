import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SearchItemComponent } from './pages/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { SharedModule } from '../shared/shared.module';
import { YoutubeService } from './services/youtube.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'detailed/:id', component: DetailedInformationComponent },
];

@NgModule({
  declarations: [
    MainComponent,
    SearchItemComponent,
    SearchResultsComponent,
    FilterPipe,
    DetailedInformationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    YoutubeService,
  ],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
  ],
})
export class YoutubeModule { }
