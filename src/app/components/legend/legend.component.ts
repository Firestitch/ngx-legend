import { Component, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'fs-legend',
  template: '<ng-content></ng-content>',
  styleUrls: [ 'legend.component.scss' ],
})
export class FsLegendComponent implements OnChanges {

  @HostBinding('class.shape-square') classSquare = true;
  @HostBinding('class.shape-circle') classCircle = false;

  @Input() shape: 'square' | 'circle' = 'square';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.shape) {
      this.classSquare = this.shape === 'square';
      this.classCircle = this.shape === 'circle';
    }
  }
}
