import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-home',
  template: `
    <p>
      card-home works!
    </p>
  `,
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit {


  constructor(private router: ActivatedRoute) { 
  }
  ngOnInit(): void {}
}
