import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyToDoComponent } from './daily-to-do.component';

describe('DailyToDoComponent', () => {
  let component: DailyToDoComponent;
  let fixture: ComponentFixture<DailyToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
