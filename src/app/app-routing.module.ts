import { BarComponent } from './dumb/bar/bar.component';
import { FooComponent } from './dumb/foo/foo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'gallery',
    component: FooComponent,
  },
  {
    path: 'contact',
    component: BarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
