import { TestBed } from '@angular/core/testing';

import { ProjectServive } from './project.servive';

describe('ProjectServive', () => {
  let service: ProjectServive;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectServive);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
