import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-typed-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './typed-form.html',
  styleUrl: './typed-form.scss',
})
export class TypedForm {
  userForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    age: new FormControl<number | null>(null),
  });

  submitForm() {
    console.log(this.userForm);
    if(this.userForm.valid) {
      const value = this.userForm.getRawValue();
      console.log('Form submitted with value:', value);
    }
  }
}
