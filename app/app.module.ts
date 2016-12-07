import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

import { AppComponent }  from './app.component';
import {ProfileComponent} from "./components/profile.component";
import {GithubService} from "./services/github.service";
import {NavbarComponent} from "./components/navbar.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule
                ],
  declarations: [ AppComponent,
                  ProfileComponent,
                  NavbarComponent],
  providers:    [ GithubService ]
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
