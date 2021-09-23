import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFornComponent } from './reactive-forn/reactive-forn.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Address', component: AddressComponent },
  { path: 'Form', component: TemplateDrivenFormComponent },
  { path: 'Reactive', component: ReactiveFornComponent },
  { path: 'GetData', component: GetDataComponent },
  //{ path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
