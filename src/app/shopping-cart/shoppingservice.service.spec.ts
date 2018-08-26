import { TestBed, inject } from '@angular/core/testing';

import { ShoppingserviceService } from './shoppingservice.service';

describe('ShoppingserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingserviceService]
    });
  });

  it('should be created', inject([ShoppingserviceService], (service: ShoppingserviceService) => {
    expect(service).toBeTruthy();
  }));
});
