import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjeSectionComponent } from './components/page-content/proje-section/proje-section.component';
import { AboutSectionComponent } from './components/page-content/about-section/about-section.component';
import { ContactSectionComponent } from './components/page-content/contact-section/contact-section.component';
import { MapSectionComponent } from './components/page-content/map-section/map-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjeSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    MapSectionComponent,
    FooterComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: 'apiURL', useValue: 'https://jsonplaceholder.typicode.com' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
