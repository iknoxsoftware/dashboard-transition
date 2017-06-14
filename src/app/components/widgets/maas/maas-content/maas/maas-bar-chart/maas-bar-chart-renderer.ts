import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import {Http, Response, HttpModule} from '@angular/http';
import 'rxjs/Rx';

import {MaasGroupRenderer} from 'app/components/widgets/maas/maas-content/maas/maas-grid-renderer/maas-group-renderer.component';

// Services references.
import {UnitAssessmentReadinessDetailsService} from 'app/components/widgets/maas/maas-content/maas/services/unit-assessment-readiness-details.service';
import {WebApiObjectFactoryService} from 'app/components/widgets/maas/maas-content/maas/services/web-api-object-factory.service';
import {MAASDetailColumnService} from 'app/components/widgets/maas/maas-content/maas/services/maas-detail-column.service';

// Object references.
import {DtTagConfig} from 'app/components/widgets/maas/maas-content/maas/services/dt-tag-config';
import {UnitAssessmentReadinessSummaryMetl} from 'app/components/widgets/maas/maas-content/maas/services/unit-assessment-readiness-summary-metl';
import {MAASDetailColumn} from 'app/components/widgets/maas/maas-content/maas/services/maas-detail-column';

@Component({
  selector: 'maas-bar-chart',
  templateUrl: './maas-bar-chart-renderer.html',
  providers: [WebApiObjectFactoryService]
})

export class MaasBarChart {
    @Input("dtTagConfig") dtTagConfig: DtTagConfig;

    @ViewChild(MaasGroupRenderer)
    private maasGroupRenderer: MaasGroupRenderer;

    @ViewChild('chart') public chart;

    hideChart: boolean = false;

    options: Object;
    uardService: UnitAssessmentReadinessDetailsService = new UnitAssessmentReadinessDetailsService();

    maasDetailColumnService: MAASDetailColumnService;
    detailColumns: Array<MAASDetailColumn> = new Array<MAASDetailColumn>();
    selectedDetailColumns: Array<string>;

    constructor(private http: Http, webApiFactory: WebApiObjectFactoryService) {
       this.dtTagConfig = new DtTagConfig();

        this.selectedDetailColumns = new Array<string>();

        if (this.dtTagConfig != null){
            this.setChart(this.dtTagConfig);
        }
    }

  setColumns(): void {
    /*
    this.maasDetailColumnService = new MAASDetailColumnService();
    this.detailColumns = this.maasDetailColumnService.getMAASDetailColumnsSetting()

    for (let detailColumn of this.detailColumns) {
      this.selectedDetailColumns.push(detailColumn.columnName);
    }
    */
  }

  public setChart(dtTagConfig: DtTagConfig) {
    this.setColumns();

    let uardSummaries: UnitAssessmentReadinessSummaryMetl[] = this.uardService.getChartMetlSummary(0, dtTagConfig.TagConfigId);
    let categories: string[] = new Array<string>();
    let seriesNRMetl: number[] = new Array<number>();
    let seriesYMetl: number[] = new Array<number>();
    let seriesQMetl: number[] = new Array<number>();
    let seriesNMetl: number[] = new Array<number>();

    for (let uardSummary of uardSummaries) {
        //Metl Counts
        categories.push(uardSummary.tagName + "\nMetl Counts");
        seriesNRMetl.push(uardSummary.nrCount);
        seriesYMetl.push(uardSummary.yCount);
        seriesQMetl.push(uardSummary.qCount);
        seriesNMetl.push(uardSummary.nCount);

        //CRate Counts
        categories.push(uardSummary.tagName + "\nCRates Counts");
        seriesNRMetl.push(uardSummary.c5Count);
        seriesYMetl.push(uardSummary.c4Count);
        seriesQMetl.push(uardSummary.c3Count);
        seriesNMetl.push(uardSummary.c12Count);
    }

    this.options = {
      chart: {
          width: 1000,
          height: 1000,
          type: 'column',
          click: function(e) {
            console.log("clicked")
          }
      },
      credits: {
          enabled: false
      },
      colors: ['#001a00', '#cc3300', '#ffff00', '#009900'],
      title: {
          text: ''
      },
      xAxis: {
          categories: categories
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Total Metl Ratings'
          }
      },
      legend: {
          reversed: false,
          enabled: false
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: [
        {
            name: 'NR',
            data: seriesNRMetl
        }, {
            name: 'N',
            data: seriesNMetl
        }, {
            name: 'Q',
            data: seriesQMetl
        }, {
            name: 'Y',
            data: seriesYMetl
        }
      ]
    }

    this.hideChart = false;

  }

  onChartClicked(e) {
    try {
      console.log(e.point.category);
    }
    catch (e){
      console.log("Event does not support point property.")
    }

    let tagName: string = e.point.category;

    tagName = tagName.replace("\nMetl Counts", "");
    tagName = tagName.replace("\nCRates Counts", "");

    this.maasGroupRenderer.selectedDetailColumns = this.selectedDetailColumns;
    this.maasGroupRenderer.configChanged(this.dtTagConfig, tagName);

    this.hideChart = true;
  }

  onChartLoad(chart) {
    console.log("Chart loaded.");
  }
}