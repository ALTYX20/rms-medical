import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListcompanyComponent } from './component/listcompany/listcompany.component';
import { AddcompanyComponent } from './component/addcompany/addcompany.component';
import { ListprojectComponent } from './component/listproject/listproject.component';
import { AddprojectComponent } from './component/addproject/addproject.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AddComponent } from './add/add.component';
import { ModifyproductComponent } from './component/modifyproduct/modifyproduct.component';
import { ModifyprojectComponent } from './component/modifyproject/modifyproject.component';
import { ModifycompanyComponent } from './component/modifycompany/modifycompany.component';
import { AddReferenceComponent } from './component/add-reference/add-reference.component';
import { ListReferenceComponent } from './component/list-reference/list-reference.component';
import { ListPresentationComponent } from './component/list-presentation/list-presentation.component';
import { AddPresentationComponent } from './component/add-presentation/add-presentation.component';
import { ModifyPresentationComponent } from './component/modify-presentation/modify-presentation.component';
import { ModifyReferenceComponent } from './component/modify-reference/modify-reference.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMediaComponent } from './component/add-media/add-media.component';
import { ListMediaComponent } from './component/list-media/list-media.component';
import { ModifyMediaComponent } from './component/modify-media/modify-media.component';


const routes: Routes = [

  {path: '' , component: LayoutComponent , children:[

    {path: '', component: DashboardComponent },
    {path:'addproduct', component: AddproductComponent},
    {path:'editproduct', component: ModifyproductComponent},
    {path: 'listproduct', component: ListproductComponent},
    {path:'addproject', component: AddprojectComponent},
    {path:'editproject', component: ModifyprojectComponent},
    {path: 'listproject', component: ListprojectComponent},
    {path:'addcompany', component: AddcompanyComponent},
    {path:'editcompany', component: ModifycompanyComponent},
    {path: 'listcompany', component: ListcompanyComponent},
    {path:'add-presentation', component: AddPresentationComponent},
    {path: 'list-presentation', component: ListPresentationComponent},
    {path:'modifyPresentation', component: ModifyPresentationComponent},

    {path:'add-reference', component: AddReferenceComponent},
    {path: 'list-reference', component: ListReferenceComponent},
    {path:'modify-reference', component: ModifyReferenceComponent},
    {path:'add-media', component: AddMediaComponent},
    {path: 'list-media', component: ListMediaComponent},
    {path:'modify-media', component: ModifyMediaComponent},

  ],canActivate:[AuthGuard]},



  {path : 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'add',component:AddComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule
  ],
  exports: [RouterModule,RouterLink  ]})
export class AppRoutingModule { }
