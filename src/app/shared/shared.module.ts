import {NgModule} from '@angular/core';
import {PRIMENG_IMPORTS} from './primeng-imports';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialImport} from "./material-import";

@NgModule({

    imports: [
        MaterialImport,
        PRIMENG_IMPORTS,
        ReactiveFormsModule

    ],

    exports: [
        MaterialImport,
        PRIMENG_IMPORTS,
        ReactiveFormsModule,

    ]
})
export class SharedModule { }
