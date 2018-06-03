import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './../components/header/header.component';
import { GenerateReportComponent } from './../components/generate-report/generate-report.component';
const routes: Routes = [
    { path: '',   component: GenerateReportComponent , pathMatch: 'full' },
    { path: 'report',   component: GenerateReportComponent },
  //  { path: 'user',   component: UserListComponent },
  //  { path: 'claimlist',   component: ClaimListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent, 
  GenerateReportComponent]