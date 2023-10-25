import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseOtherComponent } from './promise-other.component';

describe('PromiseOtherComponent', () => {
  let component: PromiseOtherComponent;
  let fixture: ComponentFixture<PromiseOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromiseOtherComponent]
    });
    fixture = TestBed.createComponent(PromiseOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
