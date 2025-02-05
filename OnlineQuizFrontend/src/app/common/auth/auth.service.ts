import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { log } from 'util';

export type position = 'User' | 'Admin' | 'Read' | 'Write';

export interface ISignIn {
  username: string;
  password: string;
  roles: position[];
}

export interface ILogIn {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_KEY = 'auth';
  private apiUrl = `https://localhost:7281/api/Auth`;
  constructor(private http: HttpClient) {}
  register(credentials: ISignIn) {
    return this.http.post<string>(`${this.apiUrl}/Register`, credentials, {
      responseType: 'text' as 'json',
    });
  }

  login(credentials: ILogIn) {
    return this.http
      .post<ILogIn>(`${this.apiUrl}/Login`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        tap((loginResponse) => {
          localStorage.setItem(this.AUTH_KEY, JSON.stringify(loginResponse));
        })
      );
  }

  logout() {
    localStorage.removeItem(this.AUTH_KEY);
  }

  getUser() {
    const authStr = localStorage.getItem(this.AUTH_KEY);
    if (!authStr) {
      return '';
    }
    return JSON.parse(authStr);
  }

  getRole() {
    const authStr = localStorage.getItem(this.AUTH_KEY);
    if (!authStr) return '';
    let value = JSON.parse(authStr);
    return value['role'];
  }

  getToken() {
    const authStr = localStorage.getItem(this.AUTH_KEY);
    if (!authStr) return '';
    let value = JSON.parse(authStr);
    return value['authToken'];
  }
  isloggedin() {
    const authStr = localStorage.getItem(this.AUTH_KEY);

    if (!authStr) return false;
    return true;
  }
}
