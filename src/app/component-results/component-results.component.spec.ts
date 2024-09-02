import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentResultsComponent } from './component-results.component';

describe('ComponentResultsComponent', () => {
  let component: ComponentResultsComponent;
  let fixture: ComponentFixture<ComponentResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
