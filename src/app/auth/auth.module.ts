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
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../core/services/user.service';

const routes: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        
        RouterModule.forChild(routes)
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [UserService],
    bootstrap: [],
})
export class AuthModule { }
