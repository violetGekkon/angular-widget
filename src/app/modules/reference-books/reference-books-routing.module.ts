import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


const routes = [
  {path: 'administration'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
