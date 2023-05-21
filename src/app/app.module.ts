import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { ArticlesService } from './protected/services/articles/articles.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ArticlesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
