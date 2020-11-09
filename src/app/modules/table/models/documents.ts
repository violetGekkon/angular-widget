import {EGAISDocument} from './incoming-document';

export interface DocumentsQuery {
  filter: string;
}

export class Documents {
  rows: EGAISDocument[];
  total: number;
}
