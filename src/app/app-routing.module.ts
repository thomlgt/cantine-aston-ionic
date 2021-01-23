import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeBoardsComponent } from './_components/home/home-boards/home-boards.component';
import { HomeDishesComponent } from './_components/home/home-dishes/home-dishes.component';
import { ResetPasswordComponent } from './_components/login/reset-password/reset-password.component';
import { SignInComponent } from './_components/login/sign-in/sign-in.component';
import { SignUpComponent } from './_components/login/sign-up/sign-up.component';
import { InfosFormComponent } from './_components/profile/infos-form/infos-form.component';
import { ProfileOrdersComponent } from './_components/profile/profile-orders/profile-orders.component';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { ProfileComponent } from './_pages/profile/profile.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent,
    children: [
      { path: 'boards', component: HomeBoardsComponent },
      { path: 'dishes', component: HomeDishesComponent },
      { path: '', redirectTo: 'boards', pathMatch: 'full' }
    ]
},
  {path : 'profile', component : ProfileComponent,
    children: [
      {path: 'orders', component: ProfileOrdersComponent},
      {path: 'infos', component: InfosFormComponent },
      { path: '', redirectTo: 'orders', pathMatch: 'full' }
  ]
},
  {path: 'login', component: LoginComponent,
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: '', redirectTo: 'sign-in', pathMatch: 'full'}
    ]
  },
  {path: '', redirectTo: '/home/boards', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
