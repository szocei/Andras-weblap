import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './page/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { SzolgComponent } from './page/szolg/szolg.component';
import { BemutatkozasComponent } from './page/bemutatkozas/bemutatkozas.component';
import { ArComponent } from './page/ar/ar.component';
import { ModalComponent } from './page/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    SzolgComponent,
    BemutatkozasComponent,
    ArComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
