import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Router, NavigationEnd} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {IndexComponent} from "./index/index.component";
import {SigninComponent} from "./signin/signin.component";
import {NotFoundComponent} from "./error/not-found/not-found.component";

import {AuthGuard} from "./auth/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthService} from "./auth/auth.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([{
            path: '',
            component: IndexComponent,
            canActivate: [AuthGuard]
        }, {
            path: 'signin',
            component: SigninComponent
        }, {
            path: 'dashboard',
            component: DashboardComponent,
            canActivate: [AuthGuard]
        }, {
            path: '**',
            component: NotFoundComponent
        }])
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        NotFoundComponent,
        SigninComponent,
        DashboardComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class AppModule {

    constructor(private router: Router) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                console.log('NavigationEnd');
            }
        })
    }

}