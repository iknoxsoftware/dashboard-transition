import { MaasChartsSummaryService } from './../../services/maas-charts-summary.service';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {ChartComponent} from '@progress/kendo-angular-charts';
import {SeriesClickEvent} from '@progress/kendo-angular-charts';
import {Http} from '@angular/http';
import {MaasChartsData} from './../../models/maas-charts-summary';

@Component({
  selector: 'maas-chart',
  styleUrls: ['./maas-chart.component.sass'],
  templateUrl: './maas-chart.component.html'
})

export class MaasChart implements AfterViewInit {
    @ViewChild('chart') chart: ChartComponent;

    seriesData: MaasChartsData[] = new Array<MaasChartsData>();

    constructor (private _http: Http, private chartService: MaasChartsSummaryService) { }

    ngAfterViewInit() {
        let value: any = this.chart;
    }

    ngOnInit() {
        this.seriesData = this.chartService.getChartData("Group 1");
    }

    onSeriesClick(e) {
        console.log("seriesClick - " + e.category);
    }
}