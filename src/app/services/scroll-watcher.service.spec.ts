import { TestBed } from '@angular/core/testing';

import { ScrollWatcherService } from './scroll-watcher.service';

describe('ScrollWatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollWatcherService = TestBed.get(ScrollWatcherService);
    expect(service).toBeTruthy();
  });
});
