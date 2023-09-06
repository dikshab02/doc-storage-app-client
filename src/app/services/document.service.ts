import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerResponse } from '../models/server-response.model';
import { IDocument } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  API_URL = 'http://localhost:3300';

  constructor(private http: HttpClient) {}

  upload(file: any | undefined): Observable<ServerResponse<any>> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<ServerResponse<any>>(
      `${this.API_URL}/doc/uploadFile`,
      formData
    );
  }

  getUploadedFile(): Observable<ServerResponse<IDocument[]>> {
      return this.http.get<ServerResponse<IDocument[]>>(`${this.API_URL}/doc/getFile`)
  }

}
