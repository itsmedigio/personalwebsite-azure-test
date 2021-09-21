import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from '../services/ApiService.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { EditorciboComponent } from './editorcibo/editorcibo.component'
import { FormsModule } from '@angular/forms';
import { RimuoviciboComponent } from './rimuovicibo/rimuovicibo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashscreenComponent,
    MenuitemComponent,
    EditorciboComponent,
    RimuoviciboComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
