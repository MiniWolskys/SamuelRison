import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationExperienceComponent } from './presentation-experience.component';

describe('PresentationExperienceComponent', () => {
  let component: PresentationExperienceComponent;
  let fixture: ComponentFixture<PresentationExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
