import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DrinkComponent } from './Componentes/drink/drink.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DrinkComponent]
})
export class AppModule { }
