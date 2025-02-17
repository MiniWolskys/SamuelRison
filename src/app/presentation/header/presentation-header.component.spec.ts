import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationHeaderComponent } from './presentation-header.component';

describe('HeaderComponent', () => {
  let component: PresentationHeaderComponent;
  let fixture: ComponentFixture<PresentationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
