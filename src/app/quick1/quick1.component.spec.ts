import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quick1Component } from './quick1.component';

describe('Quick1Component', () => {
  let component: Quick1Component;
  let fixture: ComponentFixture<Quick1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Quick1Component]
    });
    fixture = TestBed.createComponent(Quick1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
