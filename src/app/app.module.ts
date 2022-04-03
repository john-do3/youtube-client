import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CardStyleDirective } from './search/search-item/card-style.directive';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    SearchResultsComponent,
    FilterPipe,
    CardStyleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    CoreModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
