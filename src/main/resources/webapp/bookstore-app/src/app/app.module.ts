import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AddBookComponent} from "./book/add-book/add-book.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateBookComponent } from './book/update-book/update-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    UpdateBookComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
