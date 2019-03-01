import { Component, Input } from '@angular/core';

@Component({
  selector: '[fsLegendItem]',
  template: '<div class="shape" [style.backgroundColor]="color"></div><ng-content></ng-content>',
  styleUrls: [ 'legend-item.component.scss' ],
  host: { class: 'fs-legend-item' }
})
export class FsLegendItemComponent {

  @Input() color;

  constructor() {}
}
