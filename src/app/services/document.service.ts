import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  upload(
    file: any | undefined,
    description: string
  ): Observable<ServerResponse<IDocument>> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('description', description);
    return this.http.post<ServerResponse<IDocument>>(
      `${this.API_URL}/doc/uploadFile`,
      formData
    );
  }

  getUploadedFile(): Observable<ServerResponse<IDocument[]>> {
    return this.http.get<ServerResponse<IDocument[]>>(
      `${this.API_URL}/doc/getFile`
    );
  }

  downloadFile(doc: IDocument): Observable<Blob> {
    return this.http.get<Blob>(`${this.API_URL}/doc/downloadFile/${doc._id}`, {
      headers: new HttpHeaders({
        'Accept':'application/pdf'
     }),
     'responseType': 'blob' as 'json'
    });
  }

  deleteFile(doc: IDocument): Observable<ServerResponse<IDocument>> {
    return this.http.delete<ServerResponse<IDocument>>(
      `${this.API_URL}/doc/deleteFile/${doc._id}`
    );
  }

  getDocumentById(
    docID: string | undefined | null
  ): Observable<ServerResponse<IDocument>> {
    return this.http.get<ServerResponse<IDocument>>(
      `${this.API_URL}/document-detail/${docID}`
    );
  }
}
