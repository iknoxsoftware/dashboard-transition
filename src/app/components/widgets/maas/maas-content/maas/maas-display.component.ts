import {Component, OnInit} from '@angular/core';

//Settings Panel
import {MAASSettings} from './maas-settings.component';

@Component ({
    selector: 'maas-display',
    templateUrl: './maas-display.component.html',
    styleUrls: ['./maas-display.component.css']
})

export class MAASDisplay {
    configurationName: String;

    ngOnInit () {

    }
}