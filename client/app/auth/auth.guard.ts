import {Injectable} from "@angular/core";
import {Router, CanActivate} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    token: string;

    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {

        // If the user is logged in, allow to access the page
        if (this.authService.isLoggedIn()) {
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigate(["/signin"]);
        return false;
    }
}