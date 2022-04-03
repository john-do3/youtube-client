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
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
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
        LoginComponent,
        RegisterComponent
    ],
    providers: [],
    bootstrap: [],
})
export class AuthModule { }
