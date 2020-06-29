import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
    localStorage.setItem("id",JSON.stringify('id'))
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
