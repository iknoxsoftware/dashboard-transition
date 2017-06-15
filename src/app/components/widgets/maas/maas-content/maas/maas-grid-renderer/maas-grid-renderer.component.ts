import {Component, OnInit, Input} from "@angular/core";
import {Http, Response, HttpModule} from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

//Components
import {MaasGroupRenderer} from './maas-group-renderer.component';

// Data Services
import {WebApiObjectFactoryService} from 'app/components/widgets/maas/maas-content/maas/services/web-api-object-factory.service';
import {UnitAssessmentReadinessDetailsService} from 'app/components/widgets/maas/maas-content/maas/services/unit-assessment-readiness-details.service';

// Grid Stuff
import {GridOptions} from "ag-grid/main";
import {RatingCellRendererComponent} from "./rating-cell-renderer/rating-cell-renderer.component";
import {GroupReadinessRenderer} from "./group-readiness-renderer/group-readiness-renderer.component";

// Data Objects
import {DtTagConfig} from 'app/components/widgets/maas/maas-content/maas/services/dt-tag-config';
import {DtUnitAssessmentReadinessDetails} from 'app/components/widgets/maas/maas-content/maas/services/dt-unit-assessment-readiness-details';
import {UnitAssessmentReadinessSummaryMetl} from 'app/components/widgets/maas/maas-content/maas/services/unit-assessment-readiness-summary-metl';

@Component({
    moduleId: module.id,
    selector: 'maas-grid-component',
    templateUrl: './maas-grid-renderer.component.html',
    providers: [WebApiObjectFactoryService],
    styleUrls: ['./maas-grid-renderer.component.sass']
})

export class MaasGridComponent {
    @Input("dtTagConfig") dtTagConfig: DtTagConfig;

    selectedDetailColumns: Array<string>;

    public gridOptions: GridOptions;
    public height: number;
    public tagName: string;

    uardService: UnitAssessmentReadinessDetailsService;

    dtuard: DtUnitAssessmentReadinessDetails[];

    showGrid: boolean = false;

    constructor(http: Http, webApiFactory: WebApiObjectFactoryService) {
        // Populate Readiness Details
        this.dtuard = new Array<DtUnitAssessmentReadinessDetails>();
        this.selectedDetailColumns = new Array<string>();

        /*
        console.log("Tag Configs being called by component.");
        webApiFactory.getUnitAssessmentReadinessDetails(0, "CA1A241F-A56C-4A7E-B30E-D97C1B0FD629")
        .subscribe(result => this.dtuard = result);
        */

        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.groupUseEntireRow = true;
        this.gridOptions.groupSuppressAutoColumn;
        this.gridOptions.animateRows = true;
        this.gridOptions.rowHeight = 25;
        this.gridOptions.enableColResize;
        this.gridOptions.enableSorting = true;

        this.height = 100;

        if (this.dtTagConfig == null) {
            this.dtTagConfig = new DtTagConfig();
        }
    }

    sizeToFit() {
        this.gridOptions.api.sizeColumnsToFit();
    }

    autoSizeAll() {
        this.gridOptions.columnApi.autoSizeAllColumns();
    }
    private createColumnDefs() {
        return [
            {
                headerName: "cRed",
                field: "C4Count",
                width: 50,
                aggFunc: "sum",
                hide: true,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "cYellow",
                field: "C3Count",
                width: 50,
                aggFunc: "sum",
                hide: true,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "cGreen",
                field: "C12Count",
                width: 50,
                aggFunc: "sum",
                hide: true,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "cGray",
                field: "C5Count",
                width: 50,
                aggFunc: "sum",
                hide: true,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "mRed",
                field: "NCount",
                width: 50,
                aggFunc: "sum",
                hide: true,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "mYellow",
                field: "QCount",
                width: 50,
                aggFunc: "sum",
                hide: true,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "mGreen",
                field: "YCount",
                width: 50,
                aggFunc: "sum",
                hide: true,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "mGray",
                field: "NRCount",
                width: 50,
                aggFunc: "sum",
                hide: true,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "UIC",
                field: "UnitUic",
                colId: "UIC",
                width: 70,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "Unit Name",
                field: "UnitName",
                colId: "Unit Name",
                cellClass: "dashboard-cell"
            },
            {
                headerName: "UTC",
                field: "UnitTypeCode",
                colId: "UTC",
                width: 70,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "Activity",
                field: "UnitCtivityName",
                colId: "Activity",
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "Location",
                field: "PresentRegion",
                colId: "Location",
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "METL Prev",
                field: "MetlRatingTextPrev",
                tooltipField: "MetlDateAssessed",
                width: 100,
                cellRendererFramework: RatingCellRendererComponent,
                colId: "METL Prev",
                suppressSizeToFit: true,
                cellClass: "dashboard-rating-cell"
            }, 
            {
                headerName: "METL",
                field: "MetlRatingText",
                tooltipField: "MetlDateAssessed",
                width: 100,
                cellRendererFramework: RatingCellRendererComponent,
                colId: "METL",
                suppressSizeToFit: true,
                cellClass: "dashboard-rating-cell"
            },
            {
                headerName: "METL Proj",
                field: "MetlRatingTextProj",
                tooltipField: "MetlDateAssessed",
                width: 100,
                cellRendererFramework: RatingCellRendererComponent,
                colId: "METL Proj",
                suppressSizeToFit: true,
                cellClass: "dashboard-rating-cell"
            },
            {
                headerName: "METL As Of",
                field: "MetlDateAssessed",
                tooltipField: "MetlDateAssessed",
                hidden: true,
                colId: "METL As Of",
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "METL Days",
                field: "MetlDays",
                tooltipField: "MetlDateAssessed",
                hidden: true,
                colId: "METL Days",
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "Assigned",
                field: "AssignedUic",
                colId: "Assigned",
                width: 100,
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "MAJCOM",
                field: "MajcomUic",
                colId: "MAJCOM",
                width: 100,
                suppressSizeToFit: true,
            },
            {
                headerName: "C-Rating Prev",
                field: "CRatingPrev",
                tooltipField: "CDateAssessed",
                width: 100,
                cellRendererFramework: RatingCellRendererComponent,
                colId: "C-Rating Prev",
                suppressSizeToFit: true,
                cellClass: "dashboard-rating-cell"
            },
            {
                headerName: "C-Rating",
                field: "CRating",
                tooltipField: "CDateAssessed",
                width: 80,
                cellRendererFramework: RatingCellRendererComponent,
                colId: "C-Rating",
                suppressSizeToFit: true,
                cellClass: "dashboard-rating-cell"
            },
            {
                headerName: "C-Rating Proj",
                field: "PCRating",
                width: 100,
                cellRendererFramework: RatingCellRendererComponent,
                colId: "C-Rating Proj",
                suppressSizeToFit: true,
                cellClass: "dashboard-rating-cell"
            },
            {
                headerName: "C-Rating Proj Date",
                field: "PCDateAssessed",
                tooltipField: "CDateAssessed",
                hidden: true,
                colId: "C-Rating Proj Date",
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "C-Rating Proj Days",
                field: "cRatingProjDays",
                tooltipField: "CDateAssessed",
                hidden: true,
                colId: "C-Rating Proj Days",
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "P",
                field: "PRating",
                width: 50,
                cellRendererFramework: RatingCellRendererComponent,
                colId: "P",
                suppressSizeToFit: true,
                cellClass: "dashboard-rating-cell"
            },
            {
                headerName: "S",
                field: "SRating",
                width: 50,
                cellRendererFramework: RatingCellRendererComponent,
                colId: "S",
                suppressSizeToFit: true,
                cellClass: "dashboard-rating-cell"
            },
            {
                headerName: "R",
                field: "RRating",
                width: 50,
                cellRendererFramework: RatingCellRendererComponent,
                colId: "R",
                suppressSizeToFit: true,
                cellClass: "dashboard-rating-cell"
            },
            {
                headerName: "T",
                field: "TRating",
                width: 50,
                cellRendererFramework: RatingCellRendererComponent,
                colId: "T",
                suppressSizeToFit: true,
                cellClass: "dashboard-rating-cell"
            },
            {
                headerName: "C-Rating As of (RICDA)",
                field: "CDateAssessed",
                tooltipField: "CDateAssessed",
                hidden: true,
                colId: "C-Rating As of (RICDA)",
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "C-Rating Days",
                field: "CRatingDays",
                tooltipField: "CDateAssessed",
                hidden: true,
                colId: "C-Rating Days",
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            },
            {
                headerName: "PCTEF",
                field: "PCTEF",
                tooltipField: "PCTEF",
                hidden: true,
                colId: "PCTEF",
                suppressSizeToFit: true,
                cellClass: "dashboard-cell"
            }
        ];
    }

    configClicked(dtTagConfig: DtTagConfig, tagName: string) {
        this.showGrid = true;

        this.dtTagConfig = dtTagConfig;
        this.tagName = tagName;

        this.gridOptions.api.setRowData(this.createRowData());
        for (let columnDef of this.gridOptions.columnDefs) {
            let colVisible: boolean = false;
            for (let detailColumn of this.selectedDetailColumns) {
                if (detailColumn == columnDef.headerName) {
                    colVisible = true;
                    break;
                }
            }

            if (colVisible == true) {
                this.gridOptions.columnApi.setColumnVisible(columnDef.headerName, true);
            } else {
                this.gridOptions.columnApi.setColumnVisible(columnDef.headerName, false);
            }
        }
        this.gridOptions.api.refreshView();
        this.sizeToFit();
        //this.gridOptions.columnApi.autoSizeAllColumns();
    }

    private createRowData() {
        this.uardService = new UnitAssessmentReadinessDetailsService();

        let uard: DtUnitAssessmentReadinessDetails[] = new Array<DtUnitAssessmentReadinessDetails>();

        if (this.dtTagConfig == null) {
            uard = this.uardService.getDataByTagConfig(0, "00000000-0000-0000-0000-000000000000");
        } else {
            uard = this.uardService.getDataByTagName(0, this.tagName, this.dtTagConfig.TagConfigId);
            let uardSum: Array<UnitAssessmentReadinessSummaryMetl> = this.uardService.getChartMetlSummary(0, this.dtTagConfig.TagConfigId);
        }
        
        return uard;
    }
}