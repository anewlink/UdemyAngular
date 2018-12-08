import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private AuthService: AuthService){

  }

  //only incercepting request, but not responses
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    //const copiedReq = req.clone({headers: req.headers.append('','')}); //clone is non editable
    const copiedReq = req.clone({params: req.params.append('auth','')});
    return next.handle(copiedReq);
  }
}
