import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[];

  constructor( private _articleService: ArticlesService ) { }

  ngOnInit() {
    this._articleService.getArticles()
      .subscribe( res => this.articles = res);
  }
}
