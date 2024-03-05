import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GribouillisListComponent } from './gribouillis-list/gribouillis-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: 'gribouillis', component: GribouillisListComponent},
  {path: '', component : LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

