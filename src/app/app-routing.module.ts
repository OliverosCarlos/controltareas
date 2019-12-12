import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { FormusuarioComponent } from './usuarios/formusuario/formusuario.component';
import { ListausuariosComponent } from './usuarios/listausuarios/listausuarios.component'
import { FormtareaComponent } from './tareas/formtarea/formtarea.component'
import { ListatareasComponent } from './tareas/listatareas/listatareas.component'
import { LoginComponent } from './login/login.component'
import { RegistroComponent } from './usuarios/registro/registro.component'
import { HomeComponent } from './page/home/home.component';
import { FormularioHorarioComponent} from './horario/formulario-horario/formulario-horario.component';
import { MostrarHorarioComponent } from './horario/mostrar-horario/mostrar-horario.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'usuarios/formulario-usuario',
    component: FormusuarioComponent
  },
  {
    path: 'usuarios/formulario-usuario/:id',
    component: FormusuarioComponent
  },
  {
    path: 'usuarios/lista-usuarios',
    component:ListausuariosComponent
  },
  {
    path: 'usuarios/lista-usuarios/:id',
    component:ListausuariosComponent
  },
  {
    path: 'tareas/formulario-tarea',
    component: FormtareaComponent
  },
  {
    path: 'tareas/actualizar-tarea/:id',
    component: FormtareaComponent
  },
  {
    path: 'tareas/lista-tareas',
    component:ListatareasComponent
  },
  {
    path: 'login/login-usuarios',
    component:LoginComponent
  },
  {
    path: 'usuarios/registro-usuarios',
    component:RegistroComponent
  },
  {
    path: 'horario/formulario-horario',
    component: FormularioHorarioComponent
  },
  {
    path: 'horario/mostrar-horario',
    component: MostrarHorarioComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
