export const sidebarHtml = `
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <i style="font-size: 45px; color: #FFFFFF; margin-left: 10px;" class="fa fa-user" aria-hidden="true"></i>
            </div>
            <div class="pull-left info">
                <p>{{ user.firstName }}</p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
    
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
            <li class="header">MAIN NAVIGATION</li>
            <li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact: true}">
                <a routerLink="/">
                    <i class="fa fa-home"></i>
                    <span>Home</span>
                </a>
            </li>
            <li [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact: true}">
                <a routerLink="dashboard">
                    <i class="fa fa-tachometer"></i>
                    <span>Dashboard</span>
                </a>
            </li>
        </ul>
    </section>
    <!-- /.sidebar -->
`;