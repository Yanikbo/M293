import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fusszeile } from './fusszeile';

describe('Fusszeile', () => {
  let component: Fusszeile;
  let fixture: ComponentFixture<Fusszeile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fusszeile],
    }).compileComponents();

    fixture = TestBed.createComponent(Fusszeile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
