import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  datos!: any;

  constructor(private fb: FormBuilder) {}
  regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  formContact = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]],
  });

  get form(): { [key: string]: AbstractControl } {
    return this.formContact.controls;
  }
  campoNoValido(campo: string) {
    return (
      this.formContact.get(campo)?.invalid &&
      this.formContact.get(campo)?.touched
    );
  }
}
