import { MatGridListModule } from '@angular/material/grid-list';
import { ButtonDirective } from './directives/button.directive';
import { ArticlesService } from './protected/services/articles/articles.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatTooltipModule} from '@angular/material/tooltip'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import { HomeComponent } from './public/pages/home/home.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { ButtonComponent } from './public/components/button/button.component';
import { ProjectsComponent } from './public/components/projects/projects.component';
import { CardHomeComponent } from './public/components/card-home/card-home.component';
import { CardLangagesComponent } from './public/components/card-langages/card-langages.component';
import { FormationComponent } from './public/components/formation/formation.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ButtonComponent,
    ButtonDirective,
    ProjectsComponent,
    CardHomeComponent,
    CardLangagesComponent,
    FormationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [
    ArticlesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
