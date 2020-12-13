import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctors } from '../interfaces/doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getAllDoctor(): Observable<Doctors>{
    return this.http.get<Doctors>(`${environment.url}doctor/getAllDoctors`);
  }

  getOneDoctor(id): Observable<Doctors>{
    return this.http.get<Doctors>(`${environment.url}doctor/getOneDoctor/${id}`);
  }

  addDoctor(Doctor): Observable<Doctors>{
    return this.http.post<Doctors>(`${environment.url}doctor/addDoctor`, Doctor);
  }

  editDoctor(Doctor, id): Observable<Doctors>{
    return this.http.post<Doctors>(`${environment.url}doctor/editeDoctor/${id}`, Doctor);
  }

  deleteDoctor(id): Observable<Doctors>{
    return this.http.delete<Doctors>(`${environment.url}doctor/deleteDoctor/${id}`);
  }
}
