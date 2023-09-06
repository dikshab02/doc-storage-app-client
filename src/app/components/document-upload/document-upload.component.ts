import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  description: string = '';

  constructor(private documentService: DocumentService, private router: Router) {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.uploaded = false;
    this.error = undefined;
    this.file = event.target.files[0];
  }

  onUpload() {
    if (!this.file) {
      this.error = 'Please upload a file first';
      return;
    }
    this.loading = !this.loading;
    this.error = undefined;
    this.documentService.upload(this.file, this.description).subscribe({
      next: (event: any) => {
        if (typeof event === 'object') {
          this.loading = false;
          this.uploaded = true;
          this.router.navigateByUrl('/')
        }
      },
      error: (err) => {
        this.error = 'File upload failed or file format not allowed';
        this.loading = false;
      },
    });
  }
}
