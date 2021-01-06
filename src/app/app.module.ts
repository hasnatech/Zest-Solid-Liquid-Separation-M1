import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { MatIconModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SafePipe } from './pipes/safe.pipe';
import { Home1Component } from './home1/home1.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    SafePipe,
    
    Home1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    MatIconModule,
   
    BrowserAnimationsModule
  ],
  providers: [SafePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
