import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: "index",
    templateUrl: "./app/signup/signup.tpl.html",
    providers: [AuthService]
})
export class SignupComponent {

    signUpForm = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    };

    constructor(private router: Router, private authService: AuthService) {
        // if (authService.isLoggedIn()) {
        //     this.router.navigate(['']);
        // }
    }

    onSignUp(): void {
        this.authService.signUp(this.signUpForm).subscribe(
            (data) => {
                this.router.navigate([''])
            },
            error => console.log('onSignUp', error)
        );
    }

}