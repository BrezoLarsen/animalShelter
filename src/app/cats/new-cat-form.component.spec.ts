import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCatFormComponent } from './new-cat-form.component';

describe('NewCatFormComponent', () => {
  let component: NewCatFormComponent;
  let fixture: ComponentFixture<NewCatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
