import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

import { Injectable } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("interceptor çalıştı...")
    return next.handle(request).pipe(
      finalize(()=>{
        setTimeout(()=>{
          this.loadingService.stopLoading();
        },3000);
      })
      );
  }
}
