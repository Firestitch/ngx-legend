import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsLegendComponent } from './components/legend/legend.component';
import { FsLegendItemComponent } from './components/legend-item/legend-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsLegendComponent,
    FsLegendItemComponent
  ],
  declarations: [
    FsLegendComponent,
    FsLegendItemComponent
  ]
})
export class FsLegendModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsLegendModule
    };
  }
}
