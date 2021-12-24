import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './stranice/pocetna/pocetna.component';
import { NotFoundComponent } from './statusneStranice/not-found/not-found.component';
import { NavigacijaComponent } from './statusneStranice/navigacija/navigacija.component';
import { FooterComponent } from './statusneStranice/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { DrzavaCardComponent } from './templates/drzava-card/drzava-card.component'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './templates/loader/loader.component';
import { HttpReqInterceptor } from './interceptors/http-req.interceptor';
import { CovidInfoComponent } from './stranice/covid-info/covid-info.component';
import { ChartsModule } from 'ng2-charts';
import { DatePipe, DecimalPipe } from '@angular/common';

@NgModule({

  declarations: [
    AppComponent,
    PocetnaComponent,
    NotFoundComponent,
    NavigacijaComponent,
    FooterComponent,
    DrzavaCardComponent,
    LoaderComponent,
    CovidInfoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptor, multi: true }, 
    DatePipe, 
    DecimalPipe
  ],

  bootstrap: [AppComponent]

})

export class AppModule { }
