/**
The login component uses the auth.service.ts to login to the application. 
If the user is already logged in they are automatically redirected to the home page.

The loginForm: FormGroup object defines the form controls and validators, and is used to access data entered into the form. 
The FormGroup is part of the Angular Reactive Forms module and is bound to the login template above with the [formGroup]="loginForm" directive. 
*/
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm  } from '@angular/forms';
import { AuthService } from '@app/core/service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: string;
  password: string;
  matcher = new MyErrorStateMatcher();
  loading = false;
  loginError: string;
  
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authService: AuthService) { 
        // redirect to home if already logged in
        if (this.authService.currentUserValue) { 
            this.router.navigate(['/']);
        }
  }

  ngOnInit() {
        localStorage.clear();
        this.loginForm = this.formBuilder.group({
          email : [null, Validators.required],
          password : [null, Validators.required]
        });
		// get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onFormSubmit() {
	
	this.submitted = true;
	
    // stop here if form is invalid
    if (this.loginForm.invalid) {
		return;
    }

	this.loading = true;

    this.authService.login(this.f.email.value, this.f.password.value)
	  .pipe(first())
      .subscribe(res => {
        console.log(res);
        this.router.navigate([this.returnUrl]); 
		if (res.token) {
	        localStorage.setItem('token', res.token);
	        this.router.navigate(['products']);
	      }
		},
        err => {
        console.log(err);
		this.error = err;
		this.loading = false;
      });
  }

  register() {
    this.router.navigate(['register']);
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
