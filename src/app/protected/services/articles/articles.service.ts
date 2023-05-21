import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { ArticlesListComponent } from 'src/app/public/blog/articles-list/articles-list.component';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  

  constructor(private http: HttpClient) { }

  getArticlesList() {
    
  }
}
