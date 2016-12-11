import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../common/auth.service";

@Component({
    selector: "signin",
    templateUrl: "./app/signin/signin.tpl.html"
})
export class SigninComponent {

    signInForm = {
        username: '',
        password: ''
    };

    constructor(private router: Router, private authService: AuthService) {
        if (authService.isLoggedIn()) {
            router.navigate(['/']);
        }
    }

    onSignIn(): void {
        this.authService.signIn(this.signInForm).subscribe(
            (success) => {
                if (success) {
                    this.router.navigate(['/'])
                }
            },
            error => console.log('onSignIn', error)
        );
    }

}