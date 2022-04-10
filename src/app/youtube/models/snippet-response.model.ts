import { ISnippetItem } from './snippet-item.model';

export interface ISnippetResponse {
  kind: string;
  etag: string;
  pageInfo:{
    totalResults: number;
    resultsPerPage: number;
  };
  items: ISnippetItem[];
}
