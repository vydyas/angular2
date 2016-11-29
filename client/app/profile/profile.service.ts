import {Injectable} from "@angular/core";
import {HttpClient} from "../common/services/http.client.service";
import {Observable} from "rxjs/Observable";
import {User} from "../common/models/user";
import {Response} from "@angular/http";

@Injectable()
export class ProfileService {

    constructor(private httpClient: HttpClient) {}

    getUserInfo (): Observable<User> {
        return this.httpClient.get('/api/user').map((response: Response) => {
            return response.json();
        });
    }

    saveUserInfo (userInfo: User): Observable<boolean> {
        return this.httpClient.put('/api/user', userInfo).map((response: Response) => {
            let resp = response.json();
            return !!resp.success;
        });
    }

}