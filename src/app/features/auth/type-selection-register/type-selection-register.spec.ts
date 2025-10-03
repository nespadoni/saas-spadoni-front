import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSelectionRegister } from './type-selection-register';

describe('TypeSelectionRegister', () => {
  let component: TypeSelectionRegister;
  let fixture: ComponentFixture<TypeSelectionRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeSelectionRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeSelectionRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
