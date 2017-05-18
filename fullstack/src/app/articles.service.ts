import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {

  result: any;

  constructor( private http: Http ) { }

  getArticles() {
    return this.http.get("/api/articles")
      .map( res => this.result = res.json());
  }

    getArticle(id) {
    return this.http.get("/api/details/" + id)
      .map( res => this.result = res.json());
  }
}
