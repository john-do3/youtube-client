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
import { SearchSettingsComponent } from './search/search-settings/search-settings.component';
import { HeaderComponent } from './header/header/header.component';
import { CardOneComponent } from './cards/card-one/card-one.component';
import { CardTwoComponent } from './cards/card-two/card-two.component';
import { VideoCardComponent } from './cards/video-card/video-card.component';
import { CreateCardComponent } from './cards/create-card/create-card.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CardStyleDirective } from './search/search-item/card-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchSettingsComponent,
    HeaderComponent,
    CardOneComponent,
    CardTwoComponent,
    VideoCardComponent,
    CreateCardComponent,
    LoginComponent,
    RegisterComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
