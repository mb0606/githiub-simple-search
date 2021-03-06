import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '../config.keys'


@Injectable()

export class GithubService{
  private username:string;
  private client_id = 'GITHUB_CLIENT_ID';
  private client_secret = 'GITHUB_CLIENT_SECRET';

  constructor(private _http: Http) {
    console.log('Github Service is ready');
    this.username = 'mb0606'
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id='
            + this.client_id + '&client_secret=' + this.client_secret )
      .map(res => res.json());
  }
  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id='
      + this.client_id + '&client_secret=' + this.client_secret )
      .map(res => res.json());
  }
  updateUser(username:string) :void {
    this.username = username;
  }
}
