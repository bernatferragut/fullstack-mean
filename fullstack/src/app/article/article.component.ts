import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './../articles.service';
import { Article } from '../article';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: Article[];
  articleForm: FormGroup;

  constructor( private _articleService: ArticlesService, fb: FormBuilder, private router: Router) {

    this.articleForm = fb.group({
      'title' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
      'url' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(5000)])]
    });

  }

  ngOnInit() {
    this._articleService.getArticles()
      .subscribe( res => this.articles = res );
  }

  addArticle(article: Article) {
    this._articleService.insertArticle(article)
      .subscribe( newArticle => {
        this.articles.push(newArticle);
        this.router.navigateByUrl('/');
      });
  }
}

