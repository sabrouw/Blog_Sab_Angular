import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './public/blog/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './public/blog/article-details/article-details.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'articles', component: ArticlesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
