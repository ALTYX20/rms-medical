import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule,FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';

import { FooterComponent } from './layout/footer/footer.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';
import { ListprojectComponent } from './component/listproject/listproject.component';
import { AddprojectComponent } from './component/addproject/addproject.component';
import { AddcompanyComponent } from './component/addcompany/addcompany.component';
import { ListcompanyComponent } from './component/listcompany/listcompany.component';

import { AddPresentationComponent } from './component/add-presentation/add-presentation.component';

import { ListPresentationComponent } from './component/list-presentation/list-presentation.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { ModifyproductComponent } from './component/modifyproduct/modifyproduct.component';
import { ModifyprojectComponent } from './component/modifyproject/modifyproject.component';
import { ModifycompanyComponent } from './component/modifycompany/modifycompany.component';
import { ModifyPresentationComponent } from './component/modify-presentation/modify-presentation.component';
import { ModifyReferenceComponent } from './component/modify-reference/modify-reference.component';
//import { AddMediaComponent } from './add-media/add-media.component';
import { ListMediaComponent } from './component/list-media/list-media.component';
import { ModifyMediaComponent } from './component/modify-media/modify-media.component';
import { RouterModule } from '@angular/router';
import { AddReferenceComponent } from './component/add-reference/add-reference.component';
import { ListReferenceComponent } from './component/list-reference/list-reference.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AddproductComponent,
    ListproductComponent,
    ListprojectComponent,
    AddPresentationComponent,
    AddprojectComponent,
    ListPresentationComponent,
    AddcompanyComponent,
    ListcompanyComponent,
    AddReferenceComponent,
    ListReferenceComponent,
    DashboardComponent,
    AddComponent,
    ModifyproductComponent,
    ModifyprojectComponent,
    ModifycompanyComponent,
    ModifyPresentationComponent,
    ModifyReferenceComponent,
    //AddMediaComponent,
    ListMediaComponent,
    ModifyMediaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,FormsModule,

    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
