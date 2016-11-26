import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {IndexComponent} from "./index/index.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {NotFoundComponent} from "./error/not-found/not-found.component";

import {GuardService} from "./common/guard.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthService} from "./common/auth.service";
import {appRoutes} from "./routes";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        NotFoundComponent,
        SigninComponent,
        SignupComponent,
        DashboardComponent,
        HeaderComponent,
        SidebarComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        GuardService,
        AuthService
    ]
})
export class AppModule {

}