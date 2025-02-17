import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationIntroductionComponent } from './presentation-introduction.component';

describe('PresentationIntroductionComponent', () => {
  let component: PresentationIntroductionComponent;
  let fixture: ComponentFixture<PresentationIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationIntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
