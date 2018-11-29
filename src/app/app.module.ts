import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PizquierdoComponent } from './pizquierdo/pizquierdo.component';
import { PderechoComponent } from './pderecho/pderecho.component';
import { GithubService } from './pizquierdo/github.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PizquierdoComponent,
    PderechoComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
