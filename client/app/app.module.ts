import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {IndexComponent} from "./index/index.component";
import {SigninComponent} from "./signin/signin.component";
import {NotFoundComponent} from "./error/not-found/not-found.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AuthGuard} from "./auth/auth.guard";

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
            path: '**',
            component: NotFoundComponent
        }])
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        NotFoundComponent,
        SigninComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        AuthGuard
    ]
})
export class AppModule { }