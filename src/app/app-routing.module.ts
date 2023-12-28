import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChallengeCreatorComponent } from './challenge-creator/challenge-creator.component';
import { RoutingGuard } from './routing.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"home",component:HomePageComponent,canActivate:[RoutingGuard]},
  {path:"create",component:ChallengeCreatorComponent,canActivate:[RoutingGuard]},
  {path:"",component:LoginComponent},
  {path:"**",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
