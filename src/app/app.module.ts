import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormtareaComponent } from './tareas/formtarea/formtarea.component';
import { ListatareasComponent } from './tareas/listatareas/listatareas.component';
import { ListausuariosComponent } from './usuarios/listausuarios/listausuarios.component';
import { FormusuarioComponent } from './usuarios/formusuario/formusuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    HeaderComponent,
    FooterComponent,
    FormtareaComponent,
    ListatareasComponent,
    ListausuariosComponent,
    FormusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
