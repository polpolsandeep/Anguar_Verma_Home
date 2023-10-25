import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideothumbComponent } from './videothumb.component';

describe('VideothumbComponent', () => {
  let component: VideothumbComponent;
  let fixture: ComponentFixture<VideothumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideothumbComponent]
    });
    fixture = TestBed.createComponent(VideothumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
