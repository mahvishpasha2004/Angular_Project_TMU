import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultmanagementComponent } from './resultmanagement.component';

describe('ResultmanagementComponent', () => {
  let component: ResultmanagementComponent;
  let fixture: ComponentFixture<ResultmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
