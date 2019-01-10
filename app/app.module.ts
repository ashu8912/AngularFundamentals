import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
@NgModule({
  declarations:[AppComponent],
  imports:[BrowserModule,CommonModule,FormsModule,PassengerDashboardModule],
  bootstrap:[AppComponent]
})
export class AppModule{}