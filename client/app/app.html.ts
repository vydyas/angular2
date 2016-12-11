export const appHtml = `
    <div [ngClass]="{'wrapper': !sideBarCollapse}">
        <header class="main-header" *ngIf="!sideBarCollapse"></header>
    
        <aside class="main-sidebar" *ngIf="!sideBarCollapse"></aside>
    
        <div class="content-wrapper">
            <router-outlet></router-outlet>
        </div>
    
        <footer class="main-footer" *ngIf="authService.isLoggedIn()">
            <div class="pull-right hidden-xs">
                <b>Version</b> 1.0.0
            </div>
            <strong>Copyright © 2016 <a target="_blank" href="http://facebook.com/hayk.aghabekyan">Hayk Aghabekyan</a>.</strong> All rights reserved.
        </footer>
    </div>
`;