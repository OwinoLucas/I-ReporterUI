import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionRecordListComponent } from './intervention-record-list.component';

describe('InterventionRecordListComponent', () => {
  let component: InterventionRecordListComponent;
  let fixture: ComponentFixture<InterventionRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
