import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  submitted = false;
  isLoggedIn = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(false)
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.submitted = true;
      this.isLoggedIn = true;
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.submitted = false;
    this.loginForm.reset();
  }
}
