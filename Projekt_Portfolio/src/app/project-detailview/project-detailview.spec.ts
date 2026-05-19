import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailview } from './project-detailview';

describe('ProjectDetailview', () => {
  let component: ProjectDetailview;
  let fixture: ComponentFixture<ProjectDetailview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailview],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetailview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
