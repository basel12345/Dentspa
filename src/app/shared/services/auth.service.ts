import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HandelErrorService } from './handel-error.service';
import { catchError } from "rxjs/operators";
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private handelError: HandelErrorService) { }

  getAllRegister(): Observable<Users> {
    return this.http.get<Users>(`${environment.url}register/getAllRegister`);
  }

  getAllAdmins(): Observable<Users> {
    return this.http.get<Users>(`${environment.url}register/getAllAdmin`);
  }

  getAllUsers(): Observable<Users> {
    return this.http.get<Users>(`${environment.url}register/getAllUsers`);
  }

  register(User): Observable<Users> {
    return this.http.post<Users>(`${environment.url}register/registerUser`, User)
    .pipe(catchError(this.handelError.logError));
  }

  login(User): Observable<Users> {
    return this.http.post<Users>(`${environment.url}auth/authUser`, User)
    .pipe(catchError(this.handelError.logError));
  }
}
