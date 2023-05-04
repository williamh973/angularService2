import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CocktailService } from './cocktail.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CocktailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
