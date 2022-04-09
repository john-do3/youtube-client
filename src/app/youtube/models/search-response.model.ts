import { ISearchItem } from '../../shared/models/search-item.model';

export interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo:{
    totalResults: number;
    resultsPerPage: number;
  };
  items: ISearchItem[];
}
