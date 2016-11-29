import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpClient {
    constructor (public http: Http) {}

    createAuthorizationHeader(headers: Headers): void {

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let token = currentUser.token;

        headers.append('authorization', token);
    }

    get(url): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }

    put(url, data): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.put(url, data, {
            headers: headers
        });
    }
}