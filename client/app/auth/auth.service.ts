import {Injectable} from "@angular/core"
import {Http, Response, Headers} from "@angular/http"
import {Observable} from "rxjs";

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    currentUser: any;

    constructor(private http: Http) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    signIn(data): Observable<boolean> {

        var headers = new Headers();
        headers.append('Content-type', 'application/json');

        return this.http.post('/api/auth', JSON.stringify(data), {
            headers: headers
        }).map((response: Response) => {
            let currentUser = response.json();

            if (currentUser) {
                this.currentUser = currentUser;

                localStorage.setItem('currentUser', JSON.stringify(currentUser));

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
            let currentUser = response.json();

            if (currentUser) {
                this.currentUser = currentUser;

                localStorage.setItem('currentUser', JSON.stringify(currentUser));

                return true;
            }

            return false;
        });
    }

    logout (): void {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    isLoggedIn (): boolean {
        // Check to see if there is a token in local storage
        return !!(this.currentUser && this.currentUser.token);

    }

}