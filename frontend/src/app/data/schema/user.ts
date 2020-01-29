/**
Defines the properties of a user, including their role 
and jwt auth token? (the trailing question mark ? makes the property optional in TypeScript).
*/

import { Role } from "./role";

export class User {
    id: string;
	email: string;
	password: string;    
	fullName: string;
	enabled: boolean;
    roles: [Role];
    token?: string;
}
