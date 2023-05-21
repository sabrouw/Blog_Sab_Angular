import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit{
  articlesList: any;
  
  constructor(private http: HttpClient) { }
  
  ngOnInit():void {
    this.http.get(`https://jsonplaceholder.typicode.com/todos`)
    .subscribe(response => {
      console.table(response);
      this.articlesList = response;
    }
  );
  
   }
  selectArticle(articleName: string) {
    console.log(`vous avez cliqué sur ${articleName}`);
  }
}
