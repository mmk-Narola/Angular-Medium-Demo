import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { TextEditorComponent } from './text-editor.component';
import { TextEditorRoutingModule } from './text-editor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { TextEditorComponent } from './text-editor.component';

@NgModule({
  declarations: [TextEditorComponent],
  imports: [
    CommonModule,
    TextEditorRoutingModule,
    QuillModule,
    ReactiveFormsModule,
  ],
  exports: [TextEditorComponent],
})
export class TextEditorModule {}
