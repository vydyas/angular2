import {Injectable} from "@angular/core";
import {Router, CanActivate} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class GuardService implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(): boolean {
        // If the user is logged in, allow to access the page

        if (this.authService.isLoggedIn()) {
            return true;
        }

        this.router.navigate(['/signin']);
        return false;
    }

}