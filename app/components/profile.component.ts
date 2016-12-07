import { Component } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'my-profile',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <form class="well">
          <input type="text" 
                 class="form-control" 
                 placeholder="Enter Github username"
                 name="username"
                 [(ngModel)]="username"
                 (keyup)="searchUser()">
        </form>
      </div><!-- col 12 -->
    </div><!-- row -->
    
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
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>User Repos</h3>
         </div><!-- heading -->
          <div class="panel-body">
            <div *ngFor="let repo of repos">
              <div class="row">
                <div class="col-sm-9">
                    <h4><a href="{{repo.html_url}}" target="_blank">{{repo.name}}</a></h4>
                    <p>{{repo.description}}</p>
                </div><!-- sm-col-9 -->
                <div class="col-sm-3">
                   <span class="label label-default">{{repo.watchers}} Watchers</span>
                   <span class="label label-primary">{{repo.forks}} Forks</span>
                </div><!-- sm-col-3 -->
              </div> <!-- row -->
              <hr>
            </div>
          </div><!-- panel body -->  
       </div><!-- panel -->
    </div><!-- ngIF -->


`,
})
export class ProfileComponent  {
  user:any;
  repos:any[];
  username:string;

  constructor( private _githubService: GithubService){
    this.user = false;
  }

  searchUser(){
    this._githubService.updateUser(this.username);

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
