import {Component} from "@angular/core";
import {AuthService} from "./auth/auth.service";

@Component({
    selector: "app",
    templateUrl: "./app/app.tpl.html"
})
export class AppComponent {

    private currentUser;

    constructor(private authService: AuthService) {

        this.currentUser = authService.currentUser;

    }

}