import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './../articles.service';
import { Article } from '../article';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from './../animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class DetailsComponent implements OnInit {

  article: Article[];

  constructor( private _articleService: ArticlesService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {

      let id = params['id'];

      this._articleService.getArticle(id)
        .subscribe( res => this.article = res);

        console.log(this.article);
    })
   }

}
