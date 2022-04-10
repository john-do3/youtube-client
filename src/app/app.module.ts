import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { LoggedInGuard } from './core/guards/logged-in.guard';
import { SharedModule } from './shared/shared.module';
import { HeaderService } from './core/services/header.service';
import { UserService } from './core/services/user.service';
import { loginRoute, youtubeRoute } from './project.constants';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './youtube/interceptors/api.interceptor';

const routes: Routes = [
  { path: loginRoute, loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: youtubeRoute, canActivate: [LoggedInGuard], loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule) },
  { path: '', redirectTo: loginRoute, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, CoreModule],
  providers: [HeaderService, UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
