import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from "./componentes/homepage/inicio/inicio.component";
import {OxalaComponent} from "./componentes/orixas/oxala/oxala.component";
import {OssaimComponent} from "./componentes/orixas/ossaim/ossaim.component";
import {OxossiComponent} from "./componentes/orixas/oxossi/oxossi.component";
import {OxumComponent} from "./componentes/orixas/oxum/oxum.component";
import {OxumareComponent} from "./componentes/orixas/oxumare/oxumare.component";


const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'oxala', component: OxalaComponent },
    { path: 'ossaim', component: OssaimComponent },
    { path: 'oxossi', component: OxossiComponent },
    { path: 'oxum', component: OxumComponent },
    { path: 'oxumare', component: OxumareComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

