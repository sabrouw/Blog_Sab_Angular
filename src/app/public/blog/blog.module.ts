import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';




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
