import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
