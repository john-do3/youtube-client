import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { youtubeAPIKey } from 'src/app/project.constants';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addApiKey(request));
  }

  addApiKey(request: HttpRequest<any>){
    return request.clone({
      params: (request.params ? request.params : new HttpParams())
        .set('key', youtubeAPIKey)       
    });
  }
}
