/**
Intercepts http requests from the application to add a JWT auth token to the Authorization header 
if the user is logged in and the request is to the application api url (environment.apiUrl).

It's implemented using the HttpInterceptor class included in the HttpClientModule, 
by extending the HttpInterceptor class you can create a custom interceptor to modify http requests before they get sent to the server.

Http interceptors are added to the request pipeline in the providers section of the app.module.ts file.
*/

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { AuthService } from '@app/core/service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}
	
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.authService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}

