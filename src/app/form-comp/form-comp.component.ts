import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-comp.component.html',
  styleUrl: './form-comp.component.css'
})
export class FormCompComponent {
  formdata:any;
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formdata = form.value;
    }
  }
}
