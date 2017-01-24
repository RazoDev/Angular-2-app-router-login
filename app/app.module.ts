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

import { AdminComponent } from './components/administration/admin/admin.component';
import { HomeAdminComponent } from './components/administration/home/home-admin.component';
import { MessagesAdminComponent } from './components/administration/messages/messages.component';
import { NotesAdminComponent } from './components/administration/notes/notes.component';
import { NotesAdminDetailComponent } from './components/administration/notes/notes-admin-detail.component';

import { ApiService } from './services/api.service';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [
    AppComponent,
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    AdminComponent,
    HomeAdminComponent,
    MessagesAdminComponent,
    NotesAdminComponent,
    NotesAdminDetailComponent
    ],
  bootstrap:    [ AppComponent ],
  providers:[ AuthService, AuthGuard, ApiService ]
})
export class AppModule { }
