import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {ChartComponent} from '@progress/kendo-angular-charts';
import {SeriesClickEvent} from '@progress/kendo-angular-charts';

@Component({
  selector: 'maas-chart',
  styleUrls: ['./maas-chart.component.sass'],
  templateUrl: './maas-chart.component.html'
})

export class MaasChart implements AfterViewInit {
    @ViewChild('chart') chart: ChartComponent;

    seriesData: any = 
        [
            {TagConfig: "Air Force List METL", redMetlCount: 3, yellowMetlCount: 1, greenMetlCount: 2, blackMetlCount: 4},
            {TagConfig: "Air Force List C-Rate", redMetlCount: 1, yellowMetlCount: 2, greenMetlCount: 1, blackMetlCount: 3},
            {TagConfig: "EOD MU METL", redMetlCount: 2, yellowMetlCount: 4, greenMetlCount: 3, blackMetlCount: 3},
            {TagConfig: "EOD MU C-Rate", redMetlCount: 1, yellowMetlCount: 3, greenMetlCount: 3, blackMetlCount: 1}
        ];

    categoryAxes: Array<string> = ['Air Force List METL', 'Air Force List C-Rate', 'EOD MU METL', 'EOD MU METL'];

    redMETLCounts: Array<number> = [3,1,2,4];
    yellowMETLCounts: Array<number> = [1,2,4,2];
    greenMETLCounts: Array<number> = [1,1,3,1];
    blackMETLCounts: Array<number> = [1,3,3,1];

    ngAfterViewInit() {
        let value: any = this.chart;
    }

    onSeriesClick(e) {
        console.log("seriesClick - " + e.category);
    }
}