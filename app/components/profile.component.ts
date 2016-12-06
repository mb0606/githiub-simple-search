import { Component } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'my-profile',
  template: `
    <h1>Github Profile</h1>
    <div *ngIf="user" >{{user.name}}</div>


`,
})
export class ProfileComponent  {
  user:any[];

  constructor( private _githubService: GithubService){

    this._githubService.getUser()
      .subscribe(
        user => {
          this.user = user;
        }
      )

  }



}
