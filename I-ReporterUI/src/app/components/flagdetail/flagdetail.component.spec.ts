import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagdetailComponent } from './flagdetail.component';

describe('FlagdetailComponent', () => {
  let component: FlagdetailComponent;
  let fixture: ComponentFixture<FlagdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
