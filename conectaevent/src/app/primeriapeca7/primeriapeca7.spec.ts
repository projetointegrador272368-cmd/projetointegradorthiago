import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Primeriapeca7 } from './primeriapeca7';

describe('Primeriapeca7', () => {
  let component: Primeriapeca7;
  let fixture: ComponentFixture<Primeriapeca7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Primeriapeca7],
    }).compileComponents();

    fixture = TestBed.createComponent(Primeriapeca7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
