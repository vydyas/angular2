import {Component, OnInit} from "@angular/core";
import {AuthService} from "../common/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: "header",
    templateUrl: "./app/header/header.tpl.html"
})

export class HeaderComponent implements OnInit {

    private user;

    constructor(private router: Router, private authService: AuthService) {
        this.user = authService.currentUser.user;
    }

    ngOnInit () {
        this.authService.observable.subscribe(
            (value) => {
                console.log('header.component', value);

                this.user = value;
            },
            (error) => {
                console.log('error', error);
            }
        );
    }

    signOut () {
        this.authService.signOut();
        this.router.navigate(['/signin']);
    }

}