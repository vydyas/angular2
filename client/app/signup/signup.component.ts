import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../common/auth.service";
import {User} from "../common/models/user";
import {signupHtml} from "./signup.html";

@Component({
    selector: "index",
    template: signupHtml
})
export class SignupComponent {

    signUpForm: User;

    constructor(private router: Router, private authService: AuthService) {

        this.signUpForm = new User;
        console.log(this.signUpForm);

    }

    onSignUp(): void {
        this.authService.signUp(this.signUpForm).subscribe(
            data => this.router.navigate(['']),
            error => console.log('onSignUp', error)
        );
    }

}