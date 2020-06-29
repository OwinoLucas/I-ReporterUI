import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionRecordDetailsComponent } from './intervention-record-details.component';

describe('InterventionRecordDetailsComponent', () => {
  let component: InterventionRecordDetailsComponent;
  let fixture: ComponentFixture<InterventionRecordDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionRecordDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionRecordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
