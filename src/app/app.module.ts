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

//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

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
    //Angular Material Components
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    BrowserAnimationsModule,
    ReactiveFormsModule,FormsModule,

    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
