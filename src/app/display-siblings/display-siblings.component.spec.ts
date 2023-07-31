import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySiblingsComponent } from './display-siblings.component';

describe('DisplaySiblingsComponent', () => {
  let component: DisplaySiblingsComponent;
  let fixture: ComponentFixture<DisplaySiblingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySiblingsComponent]
    });
    fixture = TestBed.createComponent(DisplaySiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
