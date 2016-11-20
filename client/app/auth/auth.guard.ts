import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    token: string;

    constructor(private router: Router) {}

    canActivate() {

        console.log('qaqaqaq');

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;

        // Check to see if there is a token in local storage
        if (this.token) {
            // If they do, return true and allow the user to load the home component
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigate(['/signin']);
        return false;
    }
}