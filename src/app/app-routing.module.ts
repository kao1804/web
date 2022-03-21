import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BannerComponent } from './banner/banner.component';
import {SidabarComponent} from'./sidabar/sidabar.component';
const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch: 'full'},
  {path:'sidabar',component: SidabarComponent},
  {path:'home',component: HomeComponent},
  {path:'info',component: InfoComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'banner',component: BannerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
