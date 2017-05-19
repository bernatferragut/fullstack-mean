import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Article } from './article';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {

  result: any;

  constructor( private http: Http ) { }
// get a list of Articles
  getArticles() {
    return this.http.get('/api/articles')
      .map( res => this.result = res.json());
  }
// get One Article
    getArticle(id) {
    return this.http.get('/api/details/'+id)
      .map( res => this.result = res.json());
  }
// save One Article
  insertArticle(article: Article) {
    let headers = new Headers( {'Content-Type' : 'application/json'} );
    let options = new RequestOptions( {headers: headers}  );

    return this.http.post('/api/postArticles', JSON.stringify(article), options)
      .map( res => this.result = res.json());
  }
}
