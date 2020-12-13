import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Appointment } from '../interfaces/appointment';

import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAllAppointment(): Observable<Appointment> {
    return this.http.get<Appointment>(`${environment.url}appointment/getAppointment`);
  }

  getOneAppointment(id): Observable<Appointment> {
    return this.http.get<Appointment>(`${environment.url}appointment/getAppointment/${id}`);
  }

  addAppointment(Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${environment.url}appointment/addAppointment`, Appointment);
  }

  editAppointment(Appointment, id): Observable<Appointment> {
    return this.http.put<Appointment>(`${environment.url}appointment/editAppointment/${id}`, Appointment);
  }
}
