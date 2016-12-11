export const signinHtml = `
<div class="login-box">
    <div class="login-logo">
        <a routerLink="/"><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <form (ngSubmit)="onSignIn()">
            <div class="form-group has-feedback">
                <input type="text" class="form-control" name="username" [(ngModel)]="signInForm.username">
                <span class="fa fa-user form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" class="form-control" name="password" [(ngModel)]="signInForm.password">
                <span class="fa fa-lock form-control-feedback"></span>
            </div>
            <div class="row">
                <!-- /.col -->
                <div class="col-xs-4">
                    <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
                <!-- /.col -->
            </div>
        </form>

        <a routerLink="/signup" class="text-center">Register a new membership</a>

    </div>
    <!-- /.login-box-body -->
</div>
`;