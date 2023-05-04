import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { 
  }

ngOnInit(): void {
  const articleId: string | null = this.route.snapshot.paramMap.get('id');
}
  
}
