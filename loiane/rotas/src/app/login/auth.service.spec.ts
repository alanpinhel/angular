import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { RouterStub } from '../testing/router-stub';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useClass: RouterStub }
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
