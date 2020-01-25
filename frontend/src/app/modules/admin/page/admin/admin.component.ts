/**
Calls the user service to get all users from a secure api endpoint and store them in a local users property 
which is accessible to the admin component template above.
*/
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/data/schema/user';
import { UserService } from '@app/data/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
	loading = false;
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}
