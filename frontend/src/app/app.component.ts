/** 
Is the root component of the application, it defines the root tag of the app as <app></app> 
with the selector property of the @Component() decorator.

It subscribes to the currentUser observable in the authentication service 
so it can reactively show/hide the main navigation bar when the user logs in/out of the application. 
I didn't worry about unsubscribing from the observable here because it's the root component of the application, 
the only time the app component will be destroyed is when the application is closed which will destroy any subscriptions as well, 
so there isn't a risk of orphaned subscriptions causing memory leaks.

The app component contains a logout() method which is called from the logout link in the main nav bar above to log the user out 
and redirect them to the login page. The isAdmin() getter returns true if the logged in user is in the Admin role, or false for non-admin users.
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/service/auth.service';
import { User, Role } from '@app/data/schema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'frontend';
  	currentUser: User;
	constructor(private router: Router,	private authService: AuthService) {
		this.authService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authService.logout();
		this.router.navigate(['/login']);
    }

	isLogged() {
		return true;
	}
	
	login () {
		this.router.navigate(['/login']);
	}
}
