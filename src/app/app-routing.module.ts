import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { FormusuarioComponent } from './usuarios/formusuario/formusuario.component';
import { ListausuariosComponent } from './usuarios/listausuarios/listausuarios.component'
import { FormtareaComponent } from './tareas/formtarea/formtarea.component'
import { ListatareasComponent } from './tareas/listatareas/listatareas.component'
const routes: Routes = [
  
  {
    path: 'usuarios/formulario-usuario',
    component: FormusuarioComponent
  },
  {
    path: 'usuarios/lista-usuarios',
    component:ListausuariosComponent
  },
  {
    path: 'tareas/formulario-tarea',
    component: FormtareaComponent
  },
  {
    path: 'tareas/lista-tareas',
    component:ListatareasComponent
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
