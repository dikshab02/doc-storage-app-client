import { Component, OnInit } from '@angular/core';
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
    private documentService: DocumentService
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

  docConverter(doc: IDocument): IDashboard {
    return {
      name: doc.name,
      date: doc.createdAt,
      size: doc.size,
      format: doc.ext,
      path: doc.path
    } as IDashboard;
  }
}
