import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CountersModule } from './counters/counters.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CountersModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
