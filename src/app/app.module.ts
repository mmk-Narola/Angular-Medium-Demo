import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TextEditorModule } from './components/text-editor/text-editor.module';
import { QuillModule } from 'ngx-quill';
import { RouterModule } from '@angular/router';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextEditorModule,
    RouterModule,
    QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
