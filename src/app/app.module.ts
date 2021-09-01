import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.componet';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app-routing.module';
registerLocaleData(localPt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide:DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',

    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
