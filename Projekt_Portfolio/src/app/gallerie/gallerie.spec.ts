import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallerie } from './gallerie';

describe('Gallerie', () => {
  let component: Gallerie;
  let fixture: ComponentFixture<Gallerie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallerie],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallerie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
