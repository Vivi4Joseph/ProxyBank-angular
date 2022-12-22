import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Client } from '../model/client';
import { Account } from '../model/account';

@Injectable({
    providedIn: 'root'
})

export class AccountService {

     //endpoint = 'http://localhost:3000';
    endpoint = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

     httpOptions = {
        headers: new HttpHeaders({
             'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        })
    }

    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(this.endpoint + '/accounts/current', this.httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    getAccount(id:any): Observable<Account[]> {
        return this.http.get<Account[]>(this.endpoint + '/accounts/current/client/' + id)
            .pipe(
                catchError(this.handleError)
            )
            }
            
    getAccountc(id:any): Observable<Account[]> {
                return this.http.get<Account[]>(this.endpoint + '/accounts/saving/client/' + id)
                    .pipe(
                        catchError(this.handleError)
                    )
                    }

   
    
    handleError(error:any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => new Error(errorMessage));
    }

}
