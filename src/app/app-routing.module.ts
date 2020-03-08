import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  { path: "job", component: JobComponent },
  { path: "job/:proposalId", component: JobComponent },
  { path: "**", redirectTo: "job", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
