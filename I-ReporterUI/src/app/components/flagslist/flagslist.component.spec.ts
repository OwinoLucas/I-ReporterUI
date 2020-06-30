import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagslistComponent } from './flagslist.component';

describe('FlagslistComponent', () => {
  let component: FlagslistComponent;
  let fixture: ComponentFixture<FlagslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
