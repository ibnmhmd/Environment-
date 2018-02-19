import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    path: '', component : HomePageComponent
  },
  {
    path: 'register', component : RegisterComponent
  },
  {
    path: 'profile/:person', component : ProfileComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'about-us', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
