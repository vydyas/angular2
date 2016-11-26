import {Component, OnInit} from "@angular/core";
import {AuthService} from "../common/auth.service";

@Component({
    selector: "aside",
    templateUrl: "./app/sidebar/sidebar.tpl.html"
})
export class SidebarComponent implements OnInit {

    private user;

    constructor(private authService: AuthService) {
        this.user = authService.currentUser.user;
    }

    ngOnInit () {
        this.authService.observable.subscribe(
            (value) => {
                console.log('sidebar.component', value);

                this.user = value;
            },
            (error) => {
                console.log('error', error);
            }
        );
    }

}