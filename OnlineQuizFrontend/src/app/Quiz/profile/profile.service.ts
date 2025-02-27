import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = `https://localhost:7281/api/User/getUsers`;
  constructor(private http: HttpClient) {}
  getProfile() {
    return this.http.get<any>(this.apiUrl);
  }
}
