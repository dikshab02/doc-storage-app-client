import { TestBed } from '@angular/core/testing';

import { DocResolverService } from './doc-resolver.service';

describe('DocResolverService', () => {
  let service: DocResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
