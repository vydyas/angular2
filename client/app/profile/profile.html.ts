export const profileHtml = `
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Profile
            <small>Settings</small>
        </h1>
        <ol class="breadcrumb">
            <li>
                <i class="fa fa-gear"></i> Profile
            </li>
            <li class="active">
                <a routerLink="/profile">Settings</a>
            </li>
        </ol>
    </section>
    
    <!-- Main content -->
    <section class="content">
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">Personal info</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form (ngSubmit)="submitForm()" role="form">
                <div class="box-body row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label>First name</label>
                                    <input type="text" class="form-control" name="firstName" [(ngModel)]="user.firstName" placeholder="First name">
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label>Last name</label>
                                    <input type="text" class="form-control" name="lastName" [(ngModel)]="user.lastName" placeholder="Last name">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Country</label>
                            <select class="form-control" name="country" [(ngModel)]="user.country">
                                <option value="Armenia">Armenia</option>
                                <option value="Russia">Russia</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>City</label>
                            <input type="text" class="form-control" name="city" [(ngModel)]="user.city" placeholder="City">
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <input type="text" class="form-control" name="address.line1" [(ngModel)]="user.address.line1" placeholder="Address line 1">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="address.line2" [(ngModel)]="user.address.line2" placeholder="Address line 2">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" name="email" [(ngModel)]="user.email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" class="form-control" name="username" [(ngModel)]="user.username" placeholder="Username">
                        </div>
                        <div class="form-group">
                            <label>Enter password</label>
                            <input type="password" class="form-control" name="password" [(ngModel)]="user.password" placeholder="Password">
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    </section>
    <!-- /.content -->
`;