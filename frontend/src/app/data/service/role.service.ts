/**
Contains just a couple of methods for retrieving user data from the api, 
it acts as the interface between the Angular application and the backend api.

This role.service.ts demonstrate the secure api endpoints acesses 
with the http authorization header set after logging in to the application, 
the auth header is set with a JWT token in the JWT Interceptor. 
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Role } from '@app/data/schema/role';

@Injectable({ providedIn: 'root' })
export class RoleService {
    constructor(private http: HttpClient) { }

    getAllRoles() {
        return this.http.get<Role[]>(`${environment.apiUrl}/api/auth/roles`);
    }

    getById(id: number) {
        return this.http.get<Role>(`${environment.apiUrl}/api/auth/roles/${id}`);
    }
}