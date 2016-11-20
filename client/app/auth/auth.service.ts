import {Injectable} from "@angular/core"
import {Http, Response, Headers} from "@angular/http"
import {Observable} from "rxjs";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/cache';

@Injectable()
export class AuthService {

    token: string;

    constructor(private http: Http) {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    signIn(data): Observable<any> {

        var headers = new Headers();
        headers.append('Content-type', 'application/json');

        return this.http.post('/api/auth', JSON.stringify(data), {
            headers: headers
        }).map((response: Response) => {
            let token1 = response.json() && response.json().token;

            if (token1) {
                this.token = token1;

                localStorage.setItem('currentUser', JSON.stringify({
                    username: data.username,
                    token: token1
                }));

                return true;
            }

            return false;
        });

    }

    signUp(data): Observable<any> {
        var headers = new Headers();
        headers.append('Content-type', 'application/json');

        return this.http.post('/api/sign-up', JSON.stringify(data), {
            headers: headers
        }).map((response: Response) => {
            let token1 = response.json() && response.json().token;

            if (token1) {
                this.token = token1;

                localStorage.setItem('currentUser', JSON.stringify({
                    username: data.username,
                    token: token1
                }));

                return true;
            }

            return false;
        });
    }

    logout (): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}