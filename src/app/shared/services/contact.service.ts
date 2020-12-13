import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAllContact(): Observable<Contact> {
    return this.http.get<Contact>(`${environment.url}contact/getContact`);
  }

  getOneContact(id): Observable<Contact> {
    return this.http.get<Contact>(`${environment.url}contact/getContact/${id}`);
  }

  addContact(Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.url}contact/addContact`, Contact);
  }
}
