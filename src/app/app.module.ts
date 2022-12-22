import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountShowComponent } from './account-show/account-show.component';
import { AccountSavingShowComponent } from './account-saving-show/account-saving-show.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientCreateComponent,
    ClientEditComponent,
    ClientListComponent,
    ClientShowComponent,
    AcceuilComponent,
    AccountCreateComponent,
    AccountShowComponent,
    AccountSavingShowComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }