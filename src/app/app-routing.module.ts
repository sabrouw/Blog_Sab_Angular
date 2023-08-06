import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './public/pages/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './public/pages/article-details/article-details.component';
import { ProjectsComponent } from './public/components/projects/projects.component';
import { CardHomeComponent } from './public/components/card-home/card-home.component';
import { ContactComponent } from './public/pages/contact/contact.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'home', component: CardHomeComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
