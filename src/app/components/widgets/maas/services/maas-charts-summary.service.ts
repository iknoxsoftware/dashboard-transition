import { MaasChartsData } from './../models/maas-charts-summary';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MaasChartsSummaryService 
{
    constructor (private _http: Http) {}

    getChartData(TagConfigId: string): MaasChartsData[] {
        return [
            <MaasChartsData> {TagConfig: "Air Force List METL", RedMetlCount: 3, YellowMetlCount: 1, GreenMetlCount: 2, BlackMetlCount: 4, RedCrateCount: 4, YellowCrateCount: 0, GreenCrateCount: 12, BlackCrateCount: 14},
            <MaasChartsData> {TagConfig: "Air Force List METL", RedMetlCount: 12, YellowMetlCount: 28, GreenMetlCount: 23, BlackMetlCount: 14, RedCrateCount: 8, YellowCrateCount: 12, GreenCrateCount: 1, BlackCrateCount: 8},
        ];
    }
}