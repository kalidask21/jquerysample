import { TestBed, inject } from '@angular/core/testing';

import { JsonserviceService } from './services/jsonservice.service';

describe('JsonserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonserviceService]
    });
  });

  it('should be created', inject([JsonserviceService], (service: JsonserviceService) => {
    expect(service).toBeTruthy();
  }));
});
