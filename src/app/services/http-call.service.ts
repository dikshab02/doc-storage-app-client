import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../models/login.model';
import { ServerResponse } from '../models/server-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {
  private API_URL = 'http://localhost:3300';

  constructor(private http: HttpClient) {}

  login(credentials: {
    username: string;
    password: string;
  }): Observable<ServerResponse<ILogin>> {
    return this.http.post<ServerResponse<ILogin>>(
      `${this.API_URL}/login`,
      credentials
    );
  }

  signup(credentials: {username: string, password: string}): Observable<ServerResponse<string>> {
    return this.http.post<ServerResponse<string>>(`${this.API_URL}/sign-up`, credentials);
  }

  logout(): Observable<ServerResponse<string>> {
    return this.http.get<ServerResponse<string>>(`${this.API_URL}/logout`);
  }
}
