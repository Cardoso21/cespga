import {Component} from '@angular/core';
import {AppComponent} from '../../app.component';
import {Authentication, User} from '@nuvem/angular-base';
import {MatDialog} from '@angular/material/dialog';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent {



    constructor(public app: AppComponent, private readonly _authentication: Authentication<User>, public dialog: MatDialog) {
    }





    get usuario() {
        return this._authentication.getUser();
    }

    isAuthenticated() {
        return this._authentication.isAuthenticated();
    }
}
