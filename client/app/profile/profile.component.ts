import {Component, OnInit} from "@angular/core";
import {ProfileService} from "./profile.service";
import {User} from "../common/models/user";

@Component({
    selector: "profile",
    templateUrl: "./app/profile/profile.tpl.html",
    providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

    user: User = new User();

    constructor (private profileService: ProfileService) {}

    ngOnInit () {
        this.getUserInfo();
    }

    getUserInfo () {
        this.profileService.getUserInfo().subscribe(
            (profile) => {
                this.user = new User(profile);
            },
            (error) => console.log(error)
        );
    }

    submitForm (): void {
        this.profileService.saveUserInfo(this.user).subscribe(
            (response) => {
                console.log(response);
            },
            (error) => console.log(error)
        )
    }

}