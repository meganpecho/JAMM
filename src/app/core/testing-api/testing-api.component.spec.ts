import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingApiComponent } from './testing-api.component';

describe('TestingApiComponent', () => {
  let component: TestingApiComponent;
  let fixture: ComponentFixture<TestingApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
