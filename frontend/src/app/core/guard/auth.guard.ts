/**
auth.guard.ts uses the authService.ts to check if the user is logged in, 
if logged in, it checks if their role is authorized to access the requested route. 
If logged in and authorized the canActivate() method returns true, 
otherwise it returns false and redirects the user to the login page.

Angular route guards are attached to routes in the router config, 
this auth.guard.ts is used in app.routing.ts to protect the home page and admin page routes.
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '@app/core/service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
	
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const currentUser = this.authService.currentUserValue;
		if (currentUser) {
			// check if route is restricted by role
	        if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
				// role not authorised so redirect to home page
	            this.router.navigate(['/']);
	            return false;
	        }

	        // authorised so return true
	        return true;
		}
		// not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
	}
}

