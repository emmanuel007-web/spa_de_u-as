import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ServicioComponent } from './views/servicio/servicio.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { ContactComponent } from './views/contact/contact.component';
import { ReservaComponent } from './views/reserva/reserva.component';
import { InicioSesionComponent } from './views/forms/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './views/forms/registro/registro.component';

export const routes: Routes = [
    {path: "" , component: HomeComponent },
    {path: "servicio" , component: ServicioComponent },
    {path: "galeria" , component: GaleriaComponent },
    {path: "contact" , component: ContactComponent},
    {path: "reserva", component: ReservaComponent},
    {path: "inicio-sesion", component: InicioSesionComponent},
    {path: "iniciar-sesion", component: InicioSesionComponent},
    {path: "registro", component: RegistroComponent},
    {path: "**", redirectTo: ""}
];
