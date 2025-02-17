import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationProjectComponent } from './presentation-project.component';

describe('PresentationProjectComponent', () => {
  let component: PresentationProjectComponent;
  let fixture: ComponentFixture<PresentationProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
