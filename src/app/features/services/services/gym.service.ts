import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getGyms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/gyms`);
}

   register(username: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/register`, { username, password });
  }

  login(username: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }
}
