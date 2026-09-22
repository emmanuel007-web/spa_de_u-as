import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reserva-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './reserva-form.component.html',
  styleUrl: './reserva-form.component.css'
})
export class ReservaFormComponent {
  enviado = false;

  reservaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    celular: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    servicio: new FormControl('Manicura Clásica', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    hora: new FormControl('', [Validators.required]),
    notas: new FormControl('')
  });

  get nombreValue(): string {
    return this.reservaForm.get('nombre')?.value || '';
  }

  get servicioValue(): string {
    return this.reservaForm.get('servicio')?.value || 'Servicio';
  }

  get fechaValue(): string {
    return this.reservaForm.get('fecha')?.value || '';
  }

  get horaValue(): string {
    return this.reservaForm.get('hora')?.value || '';
  }

  get emailValue(): string {
    return this.reservaForm.get('email')?.value || '';
  }

  get celularValue(): string {
    return this.reservaForm.get('celular')?.value || '';
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      this.enviado = true;
    } else {
      this.reservaForm.markAllAsTouched();
    }
  }

  nuevaReserva() {
    this.enviado = false;
    this.reservaForm.reset({
      servicio: 'Manicura Clásica'
    });
  }
}
