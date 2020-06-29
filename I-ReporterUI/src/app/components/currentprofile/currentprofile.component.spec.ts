import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentprofileComponent } from './currentprofile.component';

describe('CurrentprofileComponent', () => {
  let component: CurrentprofileComponent;
  let fixture: ComponentFixture<CurrentprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
