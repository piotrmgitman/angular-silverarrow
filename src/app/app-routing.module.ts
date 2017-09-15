import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { HelpComponent } from './components/help/help.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { PolicyComponent } from './components/policy/policy.component';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: []
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'cookies',
    component: CookiesComponent
  },
  {
    path: 'policy',
    component: PolicyComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
