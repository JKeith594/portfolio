import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavComponent } from './core/header/nav/nav.component';
import { HeroComponent } from './shared/hero/hero.component';
import { BubbleSectionComponent } from './shared/bubble-section/bubble-section.component';
import { ListSectionComponent } from './shared/list-section/list-section.component';
import { AngledSectionComponent } from './shared/angled-section/angled-section.component';
import { ProjectComponent } from './shared/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HeroComponent,
    BubbleSectionComponent,
    ListSectionComponent,
    AngledSectionComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
