import { Observable } from 'rxjs';
import { Url } from 'url';
//Contiene las horas LIBRES por día
export class Horario
{
    lunes?  : number;
    martes?  : number;
    miercoles?  : number;
    jueves?  : number;
    viernes?  : number;
    sabado?  : number;
    domingo?  : number;
}