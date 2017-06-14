// Angular References
import {Component, OnInit, ViewChild} from '@angular/core';

import {Http, Response, HttpModule} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

// Custom references
import {MaasBarChart} from './maas-bar-chart/maas-bar-chart-renderer';

import {MAASDetailColumnService} from './services/maas-detail-column.service';
import {MAASDetailColumn} from './services/maas-detail-column';

import {DtTagConfig} from 'app/components/widgets/maas/maas-content/maas/services/dt-tag-config';
import {ConfigurationCheck} from './configuration-check';

import {WebApiObjectFactoryService} from 'app/components/widgets/maas/maas-content/maas/services/web-api-object-factory.service';
import {TagConfigService} from './services/tag-config.service';

@Component({
  selector: 'maas-settings',
  templateUrl: './maas-settings.component.html',
  styleUrls: ['./maas-settings.component.css'],
  providers: [WebApiObjectFactoryService, TagConfigService]
})

export class MAASSettings {
  @ViewChild(MaasBarChart)
  private maasBarChart: MaasBarChart;

  // last and most recently checked configurations.
  lastConfigChecked: any;
  currentConfigChecked: any;

  maasDetailColumnService: MAASDetailColumnService;

  // visibility controllers for configs and details sections.
  configurationsHidden: boolean = true;
  detailsHidden: boolean = true;
  showChart: boolean = false;

  updateGraph: boolean = false;

  dtTagConfig: DtTagConfig
  dtTagConfigs: Array<DtTagConfig>;
  detailColumns: Array<MAASDetailColumn> = new Array<MAASDetailColumn>();
  configChecks: Array<ConfigurationCheck>;
  selectedDetailColumns: Array<string>;

  settingsWidthValue: number = 20;
  settingsWidth: string = "20%";
  chartWidth: string = String(100 - this.settingsWidthValue) + "%";

  constructor(http: Http, webApiFactory: WebApiObjectFactoryService, tagConfigService: TagConfigService) {
    tagConfigService = new TagConfigService();

    this.dtTagConfigs = new Array<DtTagConfig>();
    this.configChecks = new Array<ConfigurationCheck>();
    this.selectedDetailColumns = new Array<string>();
  
    this.dtTagConfigs = tagConfigService.getTagConfigsFiltered(13, "lsimpson");
    /*
    console.log("Tag Configs being called by component.");
    webApiFactory.getTagConfigs(13, "lsimpson")
      .subscribe(result => this.dtTagConfigs = result);
    */
  }

  getGroups(): void {
    this.maasDetailColumnService = new MAASDetailColumnService();
    this.detailColumns = this.maasDetailColumnService.getMAASDetailColumnsSetting()

    for (let detailColumn of this.detailColumns) {
      this.selectedDetailColumns.push(detailColumn.columnName);
    }
  }

  configsClicked() {
    this.configurationsHidden = !this.configurationsHidden;
    if(!this.configurationsHidden && !this.detailsHidden) {
      this.detailsHidden = true;
    }
  }

  detailsClicked() {
    this.detailsHidden = !this.detailsHidden;
    if(!this.configurationsHidden && !this.detailsHidden) {
      this.configurationsHidden = true;
    }
  }

  detailClicked(event: any, columnName: string) {
    console.log(event);

    if (event.currentTarget.checked == true) {
      this.selectedDetailColumns.push(columnName);
    } else {
      let index: number = this.selectedDetailColumns.indexOf(columnName, 0);
      if (index > -1) {
        this.selectedDetailColumns.splice(index, 1);
      }
    }
  }

  configClicked(dtTagConfig: DtTagConfig, event: any) {
    // track internal checked array.
    for (let configCheck of this.configChecks) {
      if (configCheck.TagConfigId == dtTagConfig.TagConfigId) {
        configCheck.Checked = true;
      } else {
          configCheck.Checked = false;
      }
    }

      // uncheck the Configs that weren't selected.
      this.lastConfigChecked = this.currentConfigChecked;
      this.currentConfigChecked = event.currentTarget;

      if (this.lastConfigChecked != null) {
        this.lastConfigChecked.checked = false;
      }
    
      this.currentConfigChecked.checked = true;
  }

  apply() {
    let dtTagConfig: DtTagConfig = new DtTagConfig();

    for (let configCheck of this.configChecks) {
      if (configCheck.Checked == true) {
        dtTagConfig = this.dtTagConfigs.find(config => config.TagConfigId == configCheck.TagConfigId);
        this.dtTagConfig = dtTagConfig;
      }
    }

    this.updateGraph = true;

    if (this.updateGraph) {
      this.maasBarChart.setChart(this.dtTagConfig);
      this.maasBarChart.selectedDetailColumns = this.selectedDetailColumns;
      this.updateGraph = false;
    }
  }

  ngOnInit(): void {
    this.getGroups();

    for (let dtConfig of this.dtTagConfigs) {
      this.addConfigCheckToArray(dtConfig);
    }
  }

  addConfigCheckToArray(dtConfig: DtTagConfig) {
    let configCheck: ConfigurationCheck = new ConfigurationCheck();

    configCheck.TagConfigId = dtConfig.TagConfigId;
    configCheck.TagConfigName = dtConfig.TagConfigName;
    configCheck.Checked = false;

    this.configChecks.push(configCheck);
  }

  settingsMouseOver() {
    console.log("Mousing Over Settings");
  }
}