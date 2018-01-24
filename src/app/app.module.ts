import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopFormComponent } from './top-form/top-form.component';
import { SqlFormComponent } from './sql-form/sql-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BqformComponent } from './bqform/bqform.component';


@NgModule({
  declarations: [
    AppComponent,
    TopFormComponent,
    SqlFormComponent,
    BqformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
