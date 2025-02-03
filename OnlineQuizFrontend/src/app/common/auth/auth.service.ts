import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type position = 'User' | 'Admin' | 'Read' | 'Write';

export interface ISignIn {
  username: string;
  password: string;
  roles: position[];
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
}
