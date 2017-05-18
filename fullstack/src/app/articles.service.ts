import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {

  result: any;

  constructor( private http: Http ) { }

  getArticles() {
    return this.http.get('/api/articles')
      .map( result => this.result = result.json());
  }
}
