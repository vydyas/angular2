export const headerHtml = `
    <!-- Logo -->
    <a routerLink="/" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>ng</b>2</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Angular</b>2</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>
    
        <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
                <!-- User Account: style can be found in dropdown.less -->
                <li class="dropdown user user-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i style="font-size: 19px; color: #FFFFFF;" class="fa fa-user" aria-hidden="true"></i>
                        <span class="hidden-xs">{{ user.firstName }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        <!-- User image -->
                        <li class="user-header">
                            <i style="font-size: 45px; color: #FFFFFF; margin-left: 10px;" class="fa fa-user" aria-hidden="true"></i>
    
                            <p>
                                Alexander Pierce - Web Developer
                                <small>Member since Nov. 2012</small>
                            </p>
                        </li>
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <div class="pull-left">
                                <a routerLink="/profile" class="btn btn-default btn-flat">Profile</a>
                            </div>
                            <div class="pull-right">
                                <span (click)="signOut()" class="btn btn-default btn-flat">Sign out</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
`;