import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    /*     return this.http.post(
      'https://udemy-ng-http-e47b0.firebaseio.com/' + 'data.json',
      servers,
      { headers: headers }
    ); */
    return this.http.put(
      'https://udemy-ng-http-e47b0.firebaseio.com/' + 'data.json',
      servers,
      { headers: headers }
    );
  }
  getServers() {
    return this.http
    // .get('https://udemy-ng-http-e47b0.firebaseio.com/' + 'data.json')
    .get('https://udemy-ng-http-e47b0.firebaseio.com/' + 'data')
      .pipe(
        map((response: Response) => {
          const data = response.json();
          for(const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }),
        catchError((error: Response)=>{
          //console.log(error);
          return throwError("Something went wrong");
        })
      );
  }
  getAppName() {
    return this.http.get('https://udemy-ng-http-e47b0.firebaseio.com/appName'+'.json')
      .pipe(
        map(
          (response: Response) => response.json()
        )
      );
  }
}
