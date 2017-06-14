import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {DtTagConfig} from './dt-tag-config';
import {DtUnitAssessmentReadinessDetails} from './dt-unit-assessment-readiness-details';

@Injectable()
export class WebApiObjectFactoryService {
    error: String;

    constructor (private http: Http) {

    }

    getTagConfigs(DashboardId: Number, UserName: String): Observable<DtTagConfig[]> {
        console.log("TagConfigs are being called");

        //let url: string = "assets/data/dt-tag-config-data.json";
        let url: string = "http://localhost:63261/api/TagConfig?DashboardId=13&UserName=lsimpson";
        
        return this.http.get(url)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getUnitAssessmentReadinessDetails(Level: number, TagConfigId: string): Observable<DtUnitAssessmentReadinessDetails[]> {
        console.log("TagConfigs are being called");

        //let url: string = "assets/data/dt-tag-config-data.json";
        let url: string = "http://localhost:63261/api/UnitReadinessDetail?Level=" + Level.toString() + "&TagConfigId=" + TagConfigId;
        
        return this.http.get(url)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getUnitAssessmentReadinessDetails2(Level: number, TagId: string, TagConfigId: string): Observable<DtUnitAssessmentReadinessDetails[]> {
        console.log("TagConfigs are being called");

        //let url: string = "assets/data/dt-tag-config-data.json";
        let url: string = "http://localhost:63261/api/UnitReadinessDetail?Level=" + Level.toString() + "&TagId=" + TagId + "&TagConfigId=" + TagConfigId;
        
        return this.http.get(url)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}