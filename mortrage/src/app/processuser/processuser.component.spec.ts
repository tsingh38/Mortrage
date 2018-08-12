import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessuserComponent } from './processuser.component';

describe('ProcessuserComponent', () => {
  let component: ProcessuserComponent;
  let fixture: ComponentFixture<ProcessuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
