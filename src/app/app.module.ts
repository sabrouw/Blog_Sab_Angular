
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { ButtonDirective } from './directives/button.directive';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  NgxUiLoaderModule, NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";

import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { ButtonComponent } from './public/components/button/button.component';
import { ProjectsComponent } from './public/components/projects/projects.component';
import { CardHomeComponent } from './public/components/card-home/card-home.component';
import { FormContactComponent } from './public/components/form-contact/form-contact.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { HeaderComponent } from './public/components/dumb/header/header.component';
import { CardProjectsComponent } from './public/components/card-projects/card-projects.component';
import { CardBannersComponent } from './public/components/card-banners/card-banners.component';
import { CardBienvenueComponent } from './public/components/card-bienvenue/card-bienvenue.component';
import { GaleryProjectsComponent } from './public/galery-projects/galery-projects.component';
import { CardPresentationComponent } from './public/components/card-presentation/card-presentation.component';
import { NavComponent } from './public/components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';





const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  fgsType: SPINNER.squareLoader,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
  logoUrl: "",
  fgsColor: '#CDB4DB',
  pbColor: "#CDB4DB",
  text: "ElleCode",
  textColor: "#CDB4DB",
  bgsColor: "#0000",
  overlayColor: "rgb(0,0,0)"
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ButtonComponent,
    ButtonDirective,
    ProjectsComponent,
    CardHomeComponent,
    FormContactComponent,
    ContactComponent,
    HeaderComponent,
    CardProjectsComponent,
    CardBannersComponent,
    CardBienvenueComponent,
    GaleryProjectsComponent,
    CardPresentationComponent,
    NavComponent
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
    LayoutModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
