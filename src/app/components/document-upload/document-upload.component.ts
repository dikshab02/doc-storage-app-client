import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss'],
})
export class DocumentUploadComponent implements OnInit {
  shortLink: string = '';
  loading: boolean = false;
  uploaded = false;
  error: any;
  file: File | undefined;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.uploaded = false;
    this.file = event.target.files[0];
  }

  onUpload() {
    if (!this.file) {
      this.error = 'Please upload a file first';
      return;
    }
    this.loading = !this.loading;
    this.error = undefined;
    this.documentService.upload(this.file).subscribe({
      next: (event: any) => {
        if (typeof event === 'object') {
          this.loading = false;
          this.uploaded = true;
        }
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
      },
    });
  }
}
