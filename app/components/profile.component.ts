import { Component } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'my-profile',
  template: `
    <h1>Github Profile</h1>
    <div *ngIf="user">
      <div class="panel panel-default">
        <div class="panel-heading">{{user.name}}</div>
        <div class="panel-body">
        <div class="row">
          <div class="col-sm-4">
            <img src="{{user.avatar_url}}" class="img-thumbnail">
            <a href="{{user.html_url}}" target="_blank" class="btn btn-default btn-block">View Profile</a>
          </div><!-- col-sm-4-->
          <div class="col-sm-8">
            <div class="stats">
              <span class="label label-default">{{user.public_repos}} Public Repos</span>
              <span class="label label-primary">{{user.public_gist}} Public Gist</span>
              <span class="label label-success">{{user.followers}} Followers</span>
              <span class="label label-info">{{user.following}} Following</span>
            </div><!-- stats -->
            <br>
            <ul class="list-group">
              <li class="list-group-item"><strong>Username: </strong>{{user.login}}</li>
              <li class="list-group-item"><strong>Location: </strong>{{user.location}}</li>
              <li class="list-group-item"><strong>Email: </strong>{{user.email}}</li>
              <li *ngIf="user.blog" class="list-group-item"><strong>Blog: </strong>{{user.blog}}</li>
              <li class="list-group-item"><strong>Member Since: </strong>{{user.created_at}}</li>
            </ul>
          </div><!-- col-sm-8 -->
        </div><!-- row -->
        </div>
      </div><!-- panel -->
    </div>


`,
})
export class ProfileComponent  {
  user:any[];
  repos:any[];

  constructor( private _githubService: GithubService){

    this._githubService.getUser()
      .subscribe(
        user => {
          this.user = user;
        }
      )
    this._githubService.getRepos()
      .subscribe(
        repos => {
          this.repos = repos;
        }
      )

  }



}
