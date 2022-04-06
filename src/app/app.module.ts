import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { LoggedInGuard } from './core/guards/logged-in.guard';
import { SharedModule } from './shared/shared.module';
import { HeaderService } from './core/services/header.service';

const routes: Routes = [
  { path: 'auth',  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'youtube', canActivate: [LoggedInGuard], loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
  { path: '', redirectTo: 'auth', pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,    
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, CoreModule],
  providers: [HeaderService],
  bootstrap: [AppComponent],
})
export class AppModule { }
