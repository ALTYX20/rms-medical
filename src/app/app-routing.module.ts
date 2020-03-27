import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { AddPresentationComponent } from './component/add-presentation/add-presentation.component';
import { ModifyPresentationComponent } from './component/modify-presentation/modify-presentation.component';
import { ListPresentationComponent } from './component/list-presentation/list-presentation.component';
import { AddReferenceComponent } from './component/add-reference/add-reference.component';
import { ModifyReferenceComponent } from './component/modify-reference/modify-reference.component';
import { ListReferenceComponent } from './component/list-reference/list-reference.component';


const routes: Routes = [

  {path:'addpresentation', component: AddPresentationComponent},
  {path:'modifyPresentation', component: ModifyPresentationComponent},
  {path: 'listpresentation', component: ListPresentationComponent},
  {path:'addreference', component: AddReferenceComponent},
  {path:'modifyreference', component: ModifyReferenceComponent},
  {path: 'listreference', component: ListReferenceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
