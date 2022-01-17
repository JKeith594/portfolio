import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngledSectionComponent } from './angled-section.component';

describe('AngledSectionComponent', () => {
  let component: AngledSectionComponent;
  let fixture: ComponentFixture<AngledSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngledSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngledSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
