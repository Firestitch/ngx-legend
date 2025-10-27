import { Component } from '@angular/core';
import { FsLegendComponent } from '../../../../src/app/components/legend/legend.component';
import { FsLegendItemComponent } from '../../../../src/app/components/legend-item/legend-item.component';

@Component({
    selector: 'example',
    templateUrl: 'example.component.html',
    styleUrls: ['example.component.scss'],
    standalone: true,
    imports: [FsLegendComponent, FsLegendItemComponent]
})
export class ExampleComponent {
}
