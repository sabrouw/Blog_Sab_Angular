import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  constructor(private http: HttpClient) { }

  getArticlesList() {

  }
}
