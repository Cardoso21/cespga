import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppTopbarComponent} from './components/topbar/app.topbar.component';
import {AppFooterComponent} from './components/footer/app.footer.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {BreadcrumbModule, ErrorStackModule, MenuModule, PageNotificationModule} from '@nuvem/primeng-components';
import {ErrorModule, SecurityModule, VersionTagModule} from '@nuvem/angular-base';
import {DiarioErrosComponent} from './components/diario-erros/diario-erros.component';
import {BlockUIModule} from 'ng-block-ui';
import {ConfirmationService} from 'primeng';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { InicioComponent } from './componentes/homepage/inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OxalaComponent } from './componentes/orixas/oxala/oxala.component';
import { OssaimComponent } from './componentes/orixas/ossaim/ossaim.component';
import { OxossiComponent } from './componentes/orixas/oxossi/oxossi.component';
import { OxumComponent } from './componentes/orixas/oxum/oxum.component';
import { OxumareComponent } from './componentes/orixas/oxumare/oxumare.component';


@NgModule({
    declarations: [
        AppComponent,
        AppTopbarComponent,
        AppFooterComponent,
        DiarioErrosComponent,
        InicioComponent,
        OxalaComponent,
        OssaimComponent,
        OxossiComponent,
        OxumComponent,
        OxumareComponent,


    ],
    imports: [
        BlockUIModule.forRoot({
            message: "Carregando..."
          }),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        PageNotificationModule,
        BreadcrumbModule,
        ErrorStackModule,
        ErrorModule,
        VersionTagModule,
        SecurityModule.forRoot(environment.auth),
        MenuModule,
        MatDialogModule,
        MatCardModule,
        NgbModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
