import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLangagesComponent } from './card-langages.component';

describe('CardLangagesComponent', () => {
  let component: CardLangagesComponent;
  let fixture: ComponentFixture<CardLangagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLangagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLangagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
