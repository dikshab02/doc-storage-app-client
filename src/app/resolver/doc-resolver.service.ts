import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { DocumentService } from '../services/document.service';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocResolverService implements Resolve<any> {
  constructor(
    private documentService: DocumentService
  ) {}

  resolve(routeSnapShot: ActivatedRouteSnapshot): Observable<any> {
    const id = routeSnapShot.paramMap.get('docId');
    return this.documentService.getDocumentById(id).pipe(
      catchError(() => {
        return of('data not available at this time');
      })
    );
  }
}
