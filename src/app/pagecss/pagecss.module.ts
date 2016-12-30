import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagecssComponent } from './pagecss.component';
import { CsscolorComponent } from './csscolor/csscolor.component';
import { PagecssRoutes } from './pagecss.routing';
import { CssgridComponent } from './cssgrid/cssgrid.component';

@NgModule({
  imports: [
    CommonModule,
    PagecssRoutes,
  ],
  declarations: [
    PagecssComponent,
    CsscolorComponent,
    CssgridComponent
]
})
export class PagecssModule { }