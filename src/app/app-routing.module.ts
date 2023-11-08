import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  {
    path:'',redirectTo:'GetStarted',pathMatch:'full'
  },
  {
    path:'GetStarted',component:GetStartedComponent
  },
  {
    path:'GetStarted/Projects',component:MainContentComponent
  },
  {
    path:'GetStarted/Projects/viewProject/:id',component:ViewProjectComponent
  },
  {
    path:'GetStarted/Projects/addproject',component:AddProjectComponent
  },
  {
    path:'GetStarted/Projects/editProject/:projectId',component:EditProjectComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
