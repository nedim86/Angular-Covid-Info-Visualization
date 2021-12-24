import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './stranice/pocetna/pocetna.component';
import { NotFoundComponent } from './statusneStranice/not-found/not-found.component';
import { CovidInfoComponent } from './stranice/covid-info/covid-info.component';

const routes: Routes = [
  { path: '', component: PocetnaComponent },
  { path: 'covid-info/:id', component: CovidInfoComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
