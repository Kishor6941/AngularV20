import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedForm } from './typed-form';

describe('TypedForm', () => {
  let component: TypedForm;
  let fixture: ComponentFixture<TypedForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypedForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
