import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registered = false;

  registerForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    aceptaTerminos: new FormControl(false, [Validators.requiredTrue])
  });

  onSubmit() {
    if (this.registerForm.valid) {
      this.registered = true;
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  nuevoRegistro() {
    this.registered = false;
    this.registerForm.reset();
  }
}
