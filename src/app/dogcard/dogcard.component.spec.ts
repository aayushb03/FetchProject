import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogcardComponent } from './dogcard.component';

describe('DogcardComponent', () => {
  let component: DogcardComponent;
  let fixture: ComponentFixture<DogcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogcardComponent]
    });
    fixture = TestBed.createComponent(DogcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
