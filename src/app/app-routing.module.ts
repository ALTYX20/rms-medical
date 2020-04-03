import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListpresentationComponent } from './component/listpresentation/listpresentation.component';
import { AddpresentationComponent } from './component/addpresentation/addpresentation.component';
import { ListcompanyComponent } from './component/listcompany/listcompany.component';
import { AddcompanyComponent } from './component/addcompany/addcompany.component';
import { ListprojectComponent } from './component/listproject/listproject.component';
import { AddprojectComponent } from './component/addproject/addproject.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AddComponent } from './add/add.component';
import { ModifyproductComponent } from './component/modifyproduct/modifyproduct.component';
import { ModifyprojectComponent } from './component/modifyproject/modifyproject.component';
import { ModifycompanyComponent } from './component/modifycompany/modifycompany.component';
import { ModifyPresentationComponent } from './component/modify-presentation/modify-presentation.component';
import { ListReferenceComponent } from './component/list-reference/list-reference.component';
import { AddReferenceComponent } from './component/add-reference/add-reference.component';
import { ModifyReferenceComponent } from './component/modify-reference/modify-reference.component';
import { AddMediaComponent } from './component/add-media/add-media.component';
import { ModifymediaComponent } from './component/modifymedia/modifymedia.component';
import { ListMediaComponent } from './component/list-media/list-media.component';


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
    {path:'addpresentation', component: AddpresentationComponent},
    {path:'modifypresentation',component:ModifyPresentationComponent},
    {path: 'listpresentation', component: ListpresentationComponent},
    {path:'addreference', component: AddReferenceComponent},
    {path:'modifyreference',component:ModifyReferenceComponent},
    {path: 'listreference', component: ListReferenceComponent},
    {path:'addmedia', component: AddMediaComponent},
    {path:'modifymedia',component:ModifymediaComponent},
    {path: 'listmedia', component: ListMediaComponent},
  ],canActivate:[AuthGuard]},



  {path : 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'add',component:AddComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
