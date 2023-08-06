import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBannersComponent } from './card-banners.component';

describe('CardBannersComponent', () => {
  let component: CardBannersComponent;
  let fixture: ComponentFixture<CardBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBannersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
