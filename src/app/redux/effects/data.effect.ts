import { Injectable } from '@angular/core';
import { Effect, Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { loadData, loadDataFail, retrievedSearchData } from '../actions/data.action';


@Injectable()
export class DataEffects {
    constructor(
        private actions$: Actions,
        private youtubeService: YoutubeService
    ) { }

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(loadData),
        switchMap((loadDataPayload) => {

            return this.youtubeService
                .getData(loadDataPayload.searchStr)
                .pipe(
                    map(searchResponse => retrievedSearchData({ searchData: searchResponse.items })),
                    catchError(async (error) => loadDataFail(error))

                );
        })
    ));

}