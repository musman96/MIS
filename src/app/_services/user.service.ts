import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@app/_models";
import { Employer } from "@app/_models/employer";
import { environment } from "@environments/environment";
import { Observable, throwError,of } from "rxjs";
import { catchError, first } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class UserService{
    private HttpOptions = {
        headers: new HttpHeaders({
          'Accept-Language': 'en-us',
          'Access-Control-Allow-Origin': 'https://localhost:44394',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
          'Content-Type': 'application/json',
          'accept': 'text/plain'
        }),
    };
    
    constructor(private http: HttpClient) { }

    private handleErrors<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
      
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    GetEmployer(sdlCode:string): Observable<Employer[]>
    {
        const url = environment.api + `api/User/GetEmployer?sdlCode=${sdlCode}`;
        //console.log(url)
        return this.http.get<Employer[]>(url)
        .pipe(
            catchError(this.handleErrors<Employer[]>('GetReferrals',[]))
        );
    }

    AddUser(username: string,password: string,firstName: string,lastName: string,idnumber: string,email: string,mobileNumber: string): boolean
    {
        debugger;
        const url = environment.api +`/api/User/AddUser?email=${email}&name=${firstName}&surname=${lastName}&idno=${idnumber}&mobileNo=${mobileNumber}&password=${password}`
        //const mappedObj = this.MapUserOject(username,password,firstName,lastName,idnumber,email,mobileNumber);
        this.http.get<User>(url)
        .subscribe(response => console.log(response),(error) => console.log(error) );
        return true;
    }

  LinkUser(sdlCode:string,email:string): boolean
  {
    this.http.post(environment.api + `api/User/LinkEmployer?sdlCode=${sdlCode}&email=${email}`, this.HttpOptions)
    .subscribe(response => console.log(response));
    return true;
  }

  GetUser(email:string): Observable<any>
  {
    return this.http.get<any>(environment.api + `api/User/GetUserInfor?email=${email}`)
    .pipe(
        catchError(this.handleError)
    );
  }

  private handleError(err:any): any{
    let errorMessage: string;
    if (err.error instanceof ErrorEvent)
    {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    else
    {
      errorMessage = `Backend returned code ${err.status}: ${err.body}`;
    }
    return throwError(errorMessage);
  }
  private MapUserOject(username: string,password: string,firstName: string,lastName: string,idnumber: string,email: string,mobileNumber: string): User
  {
    return {
        id: '',
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        idNumber: idnumber,
        email: email,
        mobileNumber: mobileNumber,
        token: ''
    };
  }
}