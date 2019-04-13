import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import { FormDetailsComponent } from './reactive-form/form-details/form-details.component';
import { PaymentComponent } from './reactive-form/payment/payment.component';
import { FormsModule } from '@angular/forms';
import { AllEnrollmentComponent } from './reactive-form/all-enrollment/all-enrollment.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    AboutUsComponent,
    FormDetailsComponent,
    PaymentComponent,
    AllEnrollmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
