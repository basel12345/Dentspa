import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setToken(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    return localStorage.getItem('user');
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
