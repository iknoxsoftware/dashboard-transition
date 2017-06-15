import { Component, OnInit, Input, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import {DtTagConfig} from 'app/components/widgets/maas/maas-content/maas/services/dt-tag-config';

import {MaasGridComponent} from './maas-grid-renderer.component';

@Component({
  selector: 'maas-group-renderer',
  templateUrl: './maas-group-renderer.component.html',
  styleUrls: ['./maas-group-renderer.component.sass']
})

export class MaasGroupRenderer implements AfterViewInit {
  @Input("dtTagConfig") dtTagConfig: DtTagConfig;
  @Output() navClicked: EventEmitter<boolean> = new EventEmitter();

  @ViewChild(MaasGridComponent)
  maasGridComponent: MaasGridComponent;

  selectedDetailColumns: Array<string>;

  tagName: string;

  ngOnInit() {
    if (this.dtTagConfig == null) {
      this.dtTagConfig = new DtTagConfig();
    }

    this.selectedDetailColumns = new Array<string>();
  }

  ngAfterViewInit() {

  }

  configChanged(dtTagConfig: DtTagConfig, tagName: string) {
    this.dtTagConfig = dtTagConfig;
    this.tagName = tagName;
    
    console.log(this.selectedDetailColumns);

    if (this.maasGridComponent != null) {
      this.maasGridComponent.selectedDetailColumns = this.selectedDetailColumns;
      this.maasGridComponent.configClicked(dtTagConfig, tagName);
    }
  }

  onNavClicked() {
    this.navClicked.emit(true);
  }
}