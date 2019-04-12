import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormDetailsComponent } from './reactive-form/form-details/form-details.component';
import { PaymentComponent } from './reactive-form/payment/payment.component';

const routes: Routes = [
  {
    'path': 'Form',
    'component': ReactiveFormComponent,
    'children': [
      {
        'path': 'Details',
        'component': FormDetailsComponent
      },
      {
        'path': 'Payment',
        'component': PaymentComponent
      }
    ]
  },
  {
    'path': 'aboutUs',
    'component': AboutUsComponent
  },
  {
    'path': '',
    'redirectTo': '/Form/Details',
    'pathMatch': 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
