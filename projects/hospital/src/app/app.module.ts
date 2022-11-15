import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { RouteModule } from './route.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
