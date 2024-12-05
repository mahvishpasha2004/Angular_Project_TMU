import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultShowComponent } from './result-show.component';

describe('ResultShowComponent', () => {
  let component: ResultShowComponent;
  let fixture: ComponentFixture<ResultShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
