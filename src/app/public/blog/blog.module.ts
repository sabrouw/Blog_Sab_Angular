import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from '../pages/article-details/article-details.component';
import { ArticlesListComponent } from '../pages/articles-list/articles-list.component';




@NgModule({
  declarations: [
    ArticleDetailsComponent,
    ArticlesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
