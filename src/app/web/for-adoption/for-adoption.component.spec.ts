import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAdoptionComponent } from './for-adoption.component';

describe('ForAdoptionComponent', () => {
  let component: ForAdoptionComponent;
  let fixture: ComponentFixture<ForAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForAdoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
