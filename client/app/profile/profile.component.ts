import {Component, OnInit} from "@angular/core";
import {ProfileService} from "./profile.service";
import {User} from "../common/models/user";
import {profileHtml} from "./profile.html";

@Component({
    selector: "profile",
    template: profileHtml,
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