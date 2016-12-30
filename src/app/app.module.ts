import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { PagecssModule } from './pagecss/pagecss.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PagecssModule,
    AppRoutes,
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
