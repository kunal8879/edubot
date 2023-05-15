import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://127.0.0.1:8000/login'

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, login);
  }
}
