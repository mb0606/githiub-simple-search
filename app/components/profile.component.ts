import { Component } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'my-profile',
  template: `
    PROFILE


`,
})
export class ProfileComponent  {


  constructor( private _githubService: GithubService){
    this._githubService.getUser()
      .subscribe(
        user => {
          console.log(user);
        }
      )

  }



}
