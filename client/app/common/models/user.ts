export class User {
    _id: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    address: {
        line1: string,
        line2: string
    };
    email: string;
    username: string;
    password: string;

    constructor (profile?) {
        profile = profile || {};

        this._id = profile._id;
        this.firstName = profile.firstName || '';
        this.lastName = profile.lastName || '';
        this.country = profile.country || '';
        this.city = profile.city || '';
        this.address = profile.address || {line1: '', line2: ''};
        this.email = profile.email || '';
        this.username = profile.username || '';
        this.password = '----------------';
    }
}