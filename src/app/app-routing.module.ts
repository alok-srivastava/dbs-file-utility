import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileDetailsComponent } from './file-details/file-details.component';
import { DirectoryDetailsComponent } from './directory-details/directory-details.component';

const routes: Routes = [
  { path: 'fileDetails', component: FileDetailsComponent },
  { path: 'directoryInfo', component: DirectoryDetailsComponent },
  { path: '', redirectTo: 'fileDetails', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
