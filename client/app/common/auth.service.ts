import {Injectable} from "@angular/core"
import {Http, Response, Headers} from "@angular/http"
import {Observable} from "rxjs/Observable";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class AuthService {

    public currentUser;

    public observable: Observable<any>;
    public observer: any;

    constructor (private http: Http) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        let user = null;
        if (this.currentUser && this.currentUser.user) {
            user = this.currentUser.user;
        }

        this.observable = new Observable(observer => {
            this.observer = observer;

            observer.next(user);
        }).share();
    }

    signIn (data): Observable<boolean> {

        var headers = new Headers();
        headers.append('Content-type', 'application/json');

        return this.http.post('/api/auth', JSON.stringify(data), {
            headers: headers
        }).map((response: Response) => {
            let currentUser = response.json();

            if (currentUser) {
                localStorage.setItem('currentUser', JSON.stringify(currentUser));

                this.currentUser = currentUser;
                this.observer.next(currentUser.user);

                return true;
            }

            return false;
        });

    }

    signUp(data): Observable<boolean> {
        var headers = new Headers();
        headers.append('Content-type', 'application/json');

        return this.http.post('/api/sign-up', JSON.stringify(data), {
            headers: headers
        }).map((response: Response) => {
            let currentUser = response.json();

            if (currentUser) {
                localStorage.setItem('currentUser', JSON.stringify(currentUser));

                this.currentUser = currentUser;
                this.observer.next(currentUser.user);

                return true;
            }

            return false;
        });
    }

    signOut (): void {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.observer.next(this.currentUser);
    }

    isLoggedIn (): boolean {
        // Check to see if there is a token in local storage
        return !!(this.currentUser && this.currentUser.token);

    }

}