import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualQuizComponent } from './individual-quiz.component';

describe('IndividualQuizComponent', () => {
  let component: IndividualQuizComponent;
  let fixture: ComponentFixture<IndividualQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
