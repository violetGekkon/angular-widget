import {NgModule} from '@angular/core';
import {SharedModule} from '../../ui/shared/shared.module';
import {RouterModule} from '@angular/router';
import {AnimationsComponent} from './components/animations/animations.component';
import { AnimationsWithKeyframesComponent } from './components/animations-with-keyframes/animations-with-keyframes.component';


@NgModule({
  declarations: [AnimationsComponent, AnimationsWithKeyframesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AnimationsComponent, children: [
          {path: '', component: AnimationsWithKeyframesComponent}
        ]
      }
    ])
  ]
})
export class AnimationsModule {
}
