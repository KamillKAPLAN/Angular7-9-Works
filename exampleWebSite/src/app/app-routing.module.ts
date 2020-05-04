import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjeSectionComponent } from './components/page-content/proje-section/proje-section.component';
import { AboutSectionComponent } from './components/page-content/about-section/about-section.component';
import { ContactSectionComponent } from './components/page-content/contact-section/contact-section.component';
import { MapSectionComponent } from './components/page-content/map-section/map-section.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'photos',
    component: ProjeSectionComponent
  },
  {
    path: 'about',
    component: AboutSectionComponent
  },
  {
    path: 'contact',
    component: ContactSectionComponent
  },
  {
    path: 'map',
    component: MapSectionComponent
  },
  { 
    path: '**', 
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
