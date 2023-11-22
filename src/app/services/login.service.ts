import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { RegisterRequest } from '../model/register-request';
import { Observable } from 'rxjs';
import { AuthentificationRequest } from '../model/authentification-request';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private apiUrl = 'http://localhost:9090/Cinema_Gestion';
  
  constructor(private http: HttpClient) { }

  registerUser(request: RegisterRequest): Observable<User> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<User>(url, request);
  }

  loginUser(request: AuthentificationRequest): Observable<User> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<User>(url, request);
  }
}
