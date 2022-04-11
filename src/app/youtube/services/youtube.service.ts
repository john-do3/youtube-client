import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError, map, mergeMap, Observable, throwError,
} from 'rxjs';
import { youtubeAPISearchUrl, youtubeAPIVideosUrl } from 'src/app/project.constants';
import { ISearchItem } from 'src/app/shared/models/search-item.model';
import { ISearchResponse } from '../models/search-response.model';
import { ISnippetResponse } from '../models/snippet-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  data!: ISearchResponse;

  selectedData!: ISearchItem;

  constructor(private http: HttpClient) { }

  getData(query: string, maxResults = 5): Observable<ISearchResponse> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxresults', maxResults)
      .set('q', query);

    return this.http.get<ISnippetResponse>(youtubeAPISearchUrl, { params })
      .pipe(
        map((searchResponse: ISnippetResponse) => {
          const iDs = searchResponse.items.map((item) => item.id.videoId).join(',');
          return iDs;
        }),
        mergeMap((iDs) => this.http.get<ISearchResponse>(`${youtubeAPIVideosUrl}?&id=${iDs}&part=snippet,statistics`)),
        catchError((error) => this.handleError(error)),
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Youtube API returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error(
      'Something bad happened; please try again later.',
    ));
  }
}
