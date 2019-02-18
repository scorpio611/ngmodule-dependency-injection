import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CpCardComponent} from './cp-card/cp-card.component';
import {ContentProjectionComponent} from './content-projection.component';
import {ContentChildComponent} from './content-child/content-child.component';

@NgModule({
  declarations: [CpCardComponent, ContentProjectionComponent, ContentChildComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentProjectionComponent, ContentChildComponent]
})
export class ContentProjectionModule {
}
