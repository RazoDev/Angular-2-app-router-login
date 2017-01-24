import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './components/app/app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';

import { routing } from './routes/app.routing';

import { AuthService } from './services/auth.services';

import { AuthGuard } from './authentication/auth.guard';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [
    AppComponent,
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
    ],
  bootstrap:    [ AppComponent ],
  providers:[ AuthService, AuthGuard ]
})
export class AppModule { }
