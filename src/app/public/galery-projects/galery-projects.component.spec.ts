import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryProjectsComponent } from './galery-projects.component';

describe('GaleryProjectsComponent', () => {
  let component: GaleryProjectsComponent;
  let fixture: ComponentFixture<GaleryProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleryProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
