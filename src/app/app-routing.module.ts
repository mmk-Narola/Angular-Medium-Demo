import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

// lazy load the component
const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'User',
    loadChildren: () =>
      import('./components/text-editor/text-editor.module').then(
        (m) => m.TextEditorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
