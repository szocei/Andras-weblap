import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { SzolgComponent } from './page/szolg/szolg.component';
import { ArComponent } from './page/ar/ar.component';
import { ModalComponent } from './page/modal/modal.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"szolg",
    component:SzolgComponent
  },
  {
    path:"ar",
    component:ArComponent
  },
  {
    path:"modal",
    component:ModalComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
