import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { FsLegendModule } from '@firestitch/package';

import { AppMaterialModule } from './material.module';
import {
  ExampleComponent,
  ExamplesComponent
} from './components';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FsLegendModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        FsExampleModule.forRoot(),
        FsMessageModule.forRoot(),
        RouterModule.forRoot(routes, {}),
    ],
    declarations: [
        AppComponent,
        ExamplesComponent,
        ExampleComponent
    ],
    providers: []
})
export class PlaygroundModule {
}
