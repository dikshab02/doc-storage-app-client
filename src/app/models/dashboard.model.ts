export interface IDashboard {
  name: string;
  format: string;
  size: string;
  date: Date;
}

export interface IDocument {
  _id: string;
  createdAt: Date;
  createdBy: string;
  name: string;
  filename: string;
  ext: string;
  size: string;
  destination: string;
  mimetype: string;
  path: string;
}
