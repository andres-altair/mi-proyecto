import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { CustomersListComponent } from './componets/customers-list/customers-list.component';
import { HttpClientModule  } from '@angular/common/http';
import { CustomerAddComponent } from './componets/customer-add/customer-add.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';

const routes : Routes=[
  {path:'',component:CustomersListComponent},
  {path:'create',component:CustomerAddComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    CustomersListComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
