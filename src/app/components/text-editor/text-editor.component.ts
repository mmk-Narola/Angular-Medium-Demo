import { Component, OnInit } from '@angular/core';
// import { QuillConfiguration } from './quill-configuration';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
})
export class TextEditorComponent implements OnInit {
  IsEditor = false;
  IsTitle = true;

  //editor configuration
  quillConfiguration: any = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ['clean'], // remove formatting button
    ],
    // toolbar: [
    //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
    //   ['bold', 'italic', 'underline', 'strike', 'link'],
    //   ['image'],
    //   ['video'],
    //   ['formula'],
    //   ['code-block'],
    //   ['blockquote'],
    //   [{ list: 'ordered' }, { list: 'bullet' }],
    //   // [{ direction: 'rtl' }],
    //   [{ align: [] }],
    //   [{ color: [] }, { background: [] }],
    // ],
  };

  ngOnInit(): void {
    this.IsEditor = true;
    this.IsTitle = false;
  }

  hideShowEditor() {
    this.IsEditor = !this.IsEditor;
    this.IsTitle = !this.IsTitle;
  }

  created(event: any) {
    const htmlContent = localStorage.getItem('EditorData');
    console.log(htmlContent);
    if (htmlContent != null) {
      event.root.innerHTML = htmlContent;
    }
  }

  contentChanged(obj: any) {
    localStorage.setItem('EditorData', obj.html);
  }

  // changedEditor(event: EditorChangeContent | EditorChangeSelection) {}
}
