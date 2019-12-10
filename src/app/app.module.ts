import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule,FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormtareaComponent } from './tareas/formtarea/formtarea.component';
import { ListatareasComponent } from './tareas/listatareas/listatareas.component';
import { ListausuariosComponent } from './usuarios/listausuarios/listausuarios.component';
import { FormusuarioComponent } from './usuarios/formusuario/formusuario.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './usuarios/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    HeaderComponent,
    FooterComponent,
    FormtareaComponent,
    ListatareasComponent,
    ListausuariosComponent,
    FormusuarioComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:FirestoreSettingsToken,useValue:{}},
    {provide: StorageBucket, useValue: 'gs://tareas-ceb80.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
