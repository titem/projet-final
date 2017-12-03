import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListGarderieComponent } from './list-garderie/list-garderie.component';
import { ContainerComponent } from './container/container.component';
import { OrgDetailsComponent } from './org-details/org-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGarderieComponent,
    ContainerComponent,
    OrgDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
