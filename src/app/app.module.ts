import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule ,FormBuilder,Validators, FormGroup, FormControl}   from '@angular/forms';


import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPresentationComponent } from './component/add-presentation/add-presentation.component';
import { ListPresentationComponent } from './component/list-presentation/list-presentation.component';
import { ModifyPresentationComponent } from './component/modify-presentation/modify-presentation.component';
import { AddReferenceComponent } from './component/add-reference/add-reference.component';
import { ListReferenceComponent } from './component/list-reference/list-reference.component';
import { ModifyReferenceComponent } from './component/modify-reference/modify-reference.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPresentationComponent,
    ListPresentationComponent,
    ModifyPresentationComponent,
    AddReferenceComponent,
    ListReferenceComponent,
    ModifyReferenceComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,

   FormsModule
 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
