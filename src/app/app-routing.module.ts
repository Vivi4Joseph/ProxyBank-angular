import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { AccountCreateComponent } from "./account-create/account-create.component";
import { AccountShowComponent } from './account-show/account-show.component';
import { AccountSavingShowComponent } from './account-saving-show/account-saving-show.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'acceuil' },
  { path: 'acceuil' , component: AcceuilComponent},
  { path: 'create-client', component: ClientCreateComponent },
  { path: 'account-create' , component : AcceuilComponent},
  { path: 'clients-list', component: ClientListComponent },
  { path: 'client-edit/:id', component: ClientEditComponent },
  { path: 'client-show/:id', component: ClientShowComponent },
  { path: 'account-show/:id', component: AccountShowComponent },
  { path: 'account-saving-show/:id', component:AccountSavingShowComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }