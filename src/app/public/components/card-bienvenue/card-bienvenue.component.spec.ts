import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBienvenueComponent } from './card-bienvenue.component';

describe('CardBienvenueComponent', () => {
  let component: CardBienvenueComponent;
  let fixture: ComponentFixture<CardBienvenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBienvenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBienvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
