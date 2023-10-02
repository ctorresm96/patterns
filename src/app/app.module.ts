import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BridgePatternModule } from './feature/bridge-pattern/bridge-pattern.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BridgePatternModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
