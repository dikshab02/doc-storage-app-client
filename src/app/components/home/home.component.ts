import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDashboard, IDocument } from 'src/app/models/dashboard.model';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  columnsToDisplay = ['name', 'format', 'size', 'date', 'action'];
  ELEMENT_DATA: IDashboard[] = [];

  constructor(
    private documentService: DocumentService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getUploadedFile();
  }

  getUploadedFile() {
    this.documentService.getUploadedFile().subscribe((doc) => {
      this.ELEMENT_DATA = doc.data.map((element) => {
        return this.docConverter(element);
      });
    });
  }

  downloadFile(doc: IDocument) {
    this.documentService.downloadFile(doc).subscribe(
      (downloadedDoc: any) => {
        let dataType = downloadedDoc.type;
        let binaryData = [];
        binaryData.push(downloadedDoc);
        let downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
        if (doc.name) {
          downloadLink.setAttribute('download', doc.name);
        }
        document.body.appendChild(downloadLink);
        downloadLink.click();
      });
  }

  docConverter(doc: IDocument): IDashboard {
    return {
      _id: doc._id,
      name: doc.name,
      date: doc.createdAt,
      size: doc.size,
      format: doc.ext,
    } as IDashboard;
  }

  removeDoc(docObj: IDocument) {
    const confirmation = confirm('Do you want to delete?');
    if (confirmation) {
      this.documentService.deleteFile(docObj).subscribe((res) => {
        this.router.navigate(['home']);
        this.getUploadedFile();
      });
    }
  }

  docDetail(docObj: IDocument) {
    this.router.navigate(['document-detail/' + docObj._id]);
  }
}
