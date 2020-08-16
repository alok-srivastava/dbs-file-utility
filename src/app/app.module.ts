import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectoryDetailsComponent } from './directory-details/directory-details.component';
import { FileDetailsComponent } from './file-details/file-details.component';

@NgModule({
  declarations: [AppComponent, DirectoryDetailsComponent, FileDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
