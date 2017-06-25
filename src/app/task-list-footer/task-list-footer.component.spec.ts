import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListFooterComponent } from './task-list-footer.component';

describe('TaskListFooterComponent', () => {
  let component: TaskListFooterComponent;
  let fixture: ComponentFixture<TaskListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
