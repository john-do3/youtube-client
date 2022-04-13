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
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'detailed/:id', component: DetailedInformationComponent },
  { path: 'create-card', component: CreateCardComponent }
];

@NgModule({
  declarations: [
    MainComponent,
    SearchItemComponent,
    SearchResultsComponent,
    FilterPipe,
    DetailedInformationComponent,
    CreateCardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,   
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
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
