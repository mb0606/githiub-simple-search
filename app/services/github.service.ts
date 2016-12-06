import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class GithubService{
  private username:string;
  private client_id = 'd904b9206da7b642d0ff';
  private client_secret = 'b0e28e130c21a86ead9592308fa2261dfd43449d';
}
