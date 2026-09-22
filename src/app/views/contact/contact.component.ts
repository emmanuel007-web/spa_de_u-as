import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  enviado = false;
  
  contactForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    celular: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    servicio: new FormControl('Manicura Clásica', [Validators.required]),
    mensaje: new FormControl('', [Validators.maxLength(500)])
  });

  get mensajeLength(): number {
    return this.contactForm.get('mensaje')?.value?.length || 0;
  }

  get nombreValue(): string {
    return this.contactForm.get('nombre')?.value || '';
  }

  get servicioValue(): string {
    return this.contactForm.get('servicio')?.value || 'nuestros servicios';
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.enviado = true;
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  nuevoMensaje() {
    this.enviado = false;
    this.contactForm.reset({
      servicio: 'Manicura Clásica'
    });
  }
}
