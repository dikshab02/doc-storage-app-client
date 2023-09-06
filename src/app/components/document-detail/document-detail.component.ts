import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IDocument } from 'src/app/models/dashboard.model';
import { ServerResponse } from 'src/app/models/server-response.model';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss'],
})
export class DocumentDetailComponent implements OnInit {
  docId: string | undefined | null;
  docDetailObj: IDocument | undefined;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {
    this.docId = this.route.snapshot.paramMap.get('docId');
    const resolvedData: ServerResponse<IDocument> = this.route.snapshot.data['documentDetail'];
    if (resolvedData) this.docDetailObj = resolvedData.data
  }

  downloadFile() {
    if (!this.docDetailObj) return;

    this.documentService.downloadFile(this.docDetailObj).subscribe(
      (downloadedDoc: any) => {
        let dataType = downloadedDoc.type;
        let binaryData = [];
        binaryData.push(downloadedDoc);
        let downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
        if (this.docDetailObj?.name) {
          downloadLink.setAttribute('download', this.docDetailObj.name);
        }
        document.body.appendChild(downloadLink);
        downloadLink.click();
      });
  }

  removeDoc() {
    const confirmation = confirm('Do you want to delete?');
    if (confirmation) {
      if (this.docDetailObj)
        this.documentService.deleteFile(this.docDetailObj).subscribe((res) => {
          this.router.navigate(['home']);
        });
    }
  }
}
