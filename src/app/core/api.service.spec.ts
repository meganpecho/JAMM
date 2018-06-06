import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AuthService } from '../auth/auth.service';
import { ApiService } from './api.service';
import { Task } from './models/task';
import { ENV } from './env.config';

class MockAuthService extends AuthService {
  constructor() {
    super(null);
  }
}
fdescribe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
          { provide: AuthService, useClass: MockAuthService }, ApiService]
    });

    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should retrieve tasks from the API via GET', () => {
    const sampleResponse: Task[] = [
      { "_id": "some_id",
        "userId": "some_userId",
        "name": "some_name",
        "createdAtDate": new Date(),
        "actualTime": 10, // some number
        "estimatedTime": 15, // some number
        "inProgress": false, // some boolean
        "completed": false,  // some boolean
      },
      { "_id": "some_id2",
        "userId": "some_userId2",
        "name": "some_name2",
        "createdAtDate": new Date(),
        "actualTime": 15, // some number
        "estimatedTime": 120, // some number
        "inProgress": true, // some boolean
        "completed": false,  // some boolean
      }
    ];
    service.getTasks().subscribe(tasks => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(sampleResponse);
    });

    const sampleRequest = httpMock.expectOne(`${ENV.BASE_API}tasks`);

    expect(sampleRequest.request.method).toBe('GET');

    sampleRequest.flush(sampleResponse);

  });

  it('should retrieve tasks from the API via GET', () => {
    const sampleResponse: Task[] = [
      { "_id": "some_id",
        "userId": "some_userId",
        "name": "some_name",
        "createdAtDate": new Date(),
        "actualTime": 10, // some number
        "estimatedTime": 15, // some number
        "inProgress": false, // some boolean
        "completed": false,  // some boolean
      },
      { "_id": "some_id2",
        "userId": "some_userId2",
        "name": "some_name2",
        "createdAtDate": new Date(),
        "actualTime": 15, // some number
        "estimatedTime": 120, // some number
        "inProgress": true, // some boolean
        "completed": false,  // some boolean
      }
    ];
    service.getTasks().subscribe(tasks => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(sampleResponse);
    });

    const sampleRequest = httpMock.expectOne(`${ENV.BASE_API}tasks`);

    expect(sampleRequest.request.method).toBe('GET');

    sampleRequest.flush(sampleResponse);

  });

  it('should retrieve tasks from the API via GET', () => {
    const sampleResponse: Task[] = [
      { "_id": "some_id",
        "userId": "some_userId",
        "name": "some_name",
        "createdAtDate": new Date(),
        "actualTime": 10, // some number
        "estimatedTime": 15, // some number
        "inProgress": false, // some boolean
        "completed": false,  // some boolean
      },
      { "_id": "some_id2",
        "userId": "some_userId2",
        "name": "some_name2",
        "createdAtDate": new Date(),
        "actualTime": 15, // some number
        "estimatedTime": 120, // some number
        "inProgress": true, // some boolean
        "completed": false,  // some boolean
      }
    ];
    service.getTasks().subscribe(tasks => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(sampleResponse);
    });

    const sampleRequest = httpMock.expectOne(`${ENV.BASE_API}tasks`);

    expect(sampleRequest.request.method).toBe('GET');

    sampleRequest.flush(sampleResponse);

  });

  it('should retrieve tasks from the API via GET', () => {
    const sampleResponse: Task[] = [
      { "_id": "some_id",
        "userId": "some_userId",
        "name": "some_name",
        "createdAtDate": new Date(),
        "actualTime": 10, // some number
        "estimatedTime": 15, // some number
        "inProgress": false, // some boolean
        "completed": false,  // some boolean
      },
      { "_id": "some_id2",
        "userId": "some_userId2",
        "name": "some_name2",
        "createdAtDate": new Date(),
        "actualTime": 15, // some number
        "estimatedTime": 120, // some number
        "inProgress": true, // some boolean
        "completed": false,  // some boolean
      }
    ];
    service.getTasks().subscribe(tasks => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(sampleResponse);
    });

    const sampleRequest = httpMock.expectOne(`${ENV.BASE_API}tasks`);

    expect(sampleRequest.request.method).toBe('GET');

    sampleRequest.flush(sampleResponse);

  });


});
