export class User {
    id: string;
    fullName: string;
    email: string;
    password: string;
    role: Role;
    token?: string;

    constructor() {
        this.fullName = '';
        this.email = '';
        this.password = '';
    }

    setUser(fullName: string, email: string, password: string) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }

}
