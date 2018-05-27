import { TestBed, inject } from '@angular/core/testing';

import { DbConnectService } from './db-connect.service';

describe('DbConnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbConnectService]
    });
  });

  it('should be created', inject([DbConnectService], (service: DbConnectService) => {
    expect(service).toBeTruthy();
  }));
});
