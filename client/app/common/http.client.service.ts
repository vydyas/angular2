import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpClient {
    constructor (public http: Http) {

    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('authorization', '');
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }
}