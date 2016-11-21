import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: "index",
    templateUrl: "./app/signin/signin.tpl.html",
    providers: [
        AuthService
    ]
})
export class SigninComponent {

    signInForm = {
        username: '',
        password: ''
    };

    constructor(private router: Router, private authService: AuthService) {}

    onSignIn(): void {
        this.authService.signIn(this.signInForm).subscribe((data) => {
            this.router.navigate(['/']);
        });

    }

}