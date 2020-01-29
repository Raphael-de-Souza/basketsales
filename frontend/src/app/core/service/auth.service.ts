/**
Used to login & logout of the Angular app, it notifies other components when the user logs in & out, 
allows access to the currently logged in user.

RxJS Subjects and Observables are used to store the current user object 
and notify other components when the user logs in and out of the app. 
Angular components can subscribe() to the public currentUser: Observable property to be notified of changes, 
and notifications are sent when the this.currentUserSubject.next() method is called in the login() and logout() methods, 
passing the argument to each subscriber. The RxJS BehaviorSubject is a special type of Subject 
that keeps hold of the current value and emits it to any new subscribers as soon as they subscribe, 
while regular Subjects don't store the current value and only emit values that are published after a subscription is created. 
For more info on communicating between components with RxJS Observables see this post: https://jasonwatmore.com/post/2019/06/21/angular-8-communicating-between-components-with-observable-subject.

The login() method sends the user credentials to the API via an HTTP POST request for authentication. 
If successful the user object including a JWT auth token are stored in localStorage 
to keep the user logged in between page refreshes. The user object is then published to all subscribers 
with the call to this.currentUserSubject.next(user);.

The constructor() of the service initialises the currentUserSubject with the currentUser object from localStorage 
which enables the user to stay logged in between page refreshes or after the browser is closed. 
The public currentUser property is then set to this.currentUserSubject.asObservable(); 
which allows other components to subscribe to the currentUser Observable but doesn't allow them to publish to the currentUserSubject, 
this is so logging in and out of the app can only be done via the authentication service.

The currentUserValue getter allows other components an easy way to get the value of the currently logged in user 
without having to subscribe to the currentUser Observable.

The logout() method removes the current user object from local storage and publishes null to the currentUserSubject 
to notify all subscribers that the user has logged out.

NOTE: If you don't like the idea of storing the current user details in local storage, 
all you need to do is change the 3 references to localStorage in this file. 
Other options are session storage, cookies, or you could simply not store the user details in the browser, 
although be aware that with this last option that the user will be automatically logged out if they refresh the page.
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '@environments/environment'
import { User } from '@app/data/schema/user';

@Injectable({ providedIn: 'root' })

export class AuthService {
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
		
      return this.http.post<any>(environment.apiUrl + '/api/auth/login', { email, password })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) { 
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
              }
              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

  register(data: any): Observable<any> {
  return this.http.post<any>(environment.apiUrl + '/api/auth/register', data)
    .pipe(
      tap(_ => this.log('login')),
      catchError(this.handleError('login', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
