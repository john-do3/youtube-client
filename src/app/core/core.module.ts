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
import { HeaderComponent } from './pages/header/header.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { UserService } from './services/user.service';
import { SearchSettingsComponent } from './pages/search-settings/search-settings.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    SearchSettingsComponent,
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
  exports: [
    HeaderComponent,
    PageNotFoundComponent,
    SearchSettingsComponent,
  ],
  providers: [LoggedInGuard, UserService],
  bootstrap: [],
})
export class CoreModule { }
