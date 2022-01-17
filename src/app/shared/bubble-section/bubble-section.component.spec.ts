import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSectionComponent } from './bubble-section.component';

describe('BubbleSectionComponent', () => {
  let component: BubbleSectionComponent;
  let fixture: ComponentFixture<BubbleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
