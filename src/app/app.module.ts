import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { TestHttpComponent } from './test-http/test-http.component';
import { ServicesService } from './services/services.service';

@NgModule({
  declarations: [
    AppComponent,
    TestHttpComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
