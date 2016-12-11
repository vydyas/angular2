export const signupHtml = `
    <div class="register-box">
        <div class="register-logo">
            <a routerLink="/"><b>Admin</b>LTE</a>
        </div>
        <div class="register-box-body">
            <p class="login-box-msg">Sign up form</p>
            <form (ngSubmit)="onSignUp()">
                <div class="row">
                    <div class="col-xs-6">
                        <div class="form-group">
                            <label>First name</label>
                            <input type="text" class="form-control" name="firstName" [(ngModel)]="signUpForm.firstName">
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <div class="form-group">
                            <label>Last name</label>
                            <input type="text" class="form-control" name="lastName" [(ngModel)]="signUpForm.lastName">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" name="username" [(ngModel)]="signUpForm.username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" name="email" [(ngModel)]="signUpForm.email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" name="password" [(ngModel)]="signUpForm.password">
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox">
                            <label class="">
                                <input type="checkbox">I agree to the <a routerLink="/terms">terms</a>
                            </label>
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Sign up</button>
                    </div>
                </div>
            </form>
            <a routerLink="/signin" class="text-center">I already have a membership</a>
        </div>
    </div>
`;