import {Component, OnInit} from "@angular/core";
import {AuthService} from "./common/auth.service";

@Component({
    selector: "body",
    templateUrl: "./app/app.tpl.html",
    host: {
        "[class.sidebar-collapse]": "sideBarCollapse"
    }
})
export class AppComponent implements OnInit {

    private user;
    private sideBarCollapse: boolean;

    constructor(private authService: AuthService) {
        this.sideBarCollapse = false;
    }

    ngOnInit () {
        this.authService.observable.subscribe(
            (value) => {
                this.sideBarCollapse = !this.authService.isLoggedIn();
                this.user = value;
            },
            (error) => {
                console.log(error);
            }
        );
    }

}