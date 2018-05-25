import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuardService } from './modules/core/services/auth-guard.service';
const routes: Routes = [
// { path: 'home', component: HomeComponent},
{ path: '',
  loadChildren: './modules/index/index.module#IndexModule',
  canActivate: [AuthGuardService]
},

{ path: '',  redirectTo: '/login', pathMatch: 'full' },

{
  path: 'login',
  loadChildren: './modules/login/login.module#LoginModule'
},
{
  path: 'register',
  loadChildren: './modules/register/register.module#RegisterModule'
},

{
  path: '**',
  redirectTo: '/home'
},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
