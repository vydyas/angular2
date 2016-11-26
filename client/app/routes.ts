import {Routes} from "@angular/router";
import {GuardService} from "./common/guard.service";
import {NotFoundComponent} from "./error/not-found/not-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {IndexComponent} from "./index/index.component";

export const appRoutes: Routes = [{
    path: '',
    component: IndexComponent,
    canActivate: [GuardService]
}, {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardService]
}, {
    path: 'signin',
    component: SigninComponent
}, {
    path: 'signup',
    component: SignupComponent
}, {
    path: '**',
    component: NotFoundComponent
}];