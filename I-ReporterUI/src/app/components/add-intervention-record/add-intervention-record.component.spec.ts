import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInterventionRecordComponent } from './add-intervention-record.component';

describe('AddInterventionRecordComponent', () => {
  let component: AddInterventionRecordComponent;
  let fixture: ComponentFixture<AddInterventionRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInterventionRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInterventionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
