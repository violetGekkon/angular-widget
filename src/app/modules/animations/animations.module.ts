import {NgModule} from '@angular/core';
import {SharedModule} from '../../ui/shared/shared.module';
import {RouterModule} from '@angular/router';
import {AnimationsComponent} from './components/animations/animations.component';
import {AnimationsWithKeyframesComponent} from './components/animations-with-keyframes/animations-with-keyframes.component';
import {SimpleAnimationsComponent} from './components/simple-animations/simple-animations.component';
import { QueryAnimationsComponent } from './components/query-animations/query-animations.component';
import { CardItemComponent } from './components/card-item/card-item.component';


@NgModule({
  declarations: [AnimationsComponent, AnimationsWithKeyframesComponent, SimpleAnimationsComponent, QueryAnimationsComponent, CardItemComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AnimationsComponent,
        children: [
          {path: 'keyframes', component: AnimationsWithKeyframesComponent},
          {path: 'simple', component: SimpleAnimationsComponent},
          {path: 'query', component: QueryAnimationsComponent}
        ]
      }
    ])
  ]
})
export class AnimationsModule {
}
