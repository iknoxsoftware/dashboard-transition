import {Injectable} from '@angular/core';

import {MAASDetailColumn} from './maas-detail-column';

@Injectable()
export class MAASDetailColumnService {
    getMAASDetailColumnsSetting(): Array<MAASDetailColumn> {
        // Add fields to columns array
        let maasDetailColumns: MAASDetailColumn[] = [
            {columnName: "All"},
            {columnName: "UIC"},
            {columnName: "Unit Name"},
            {columnName: "UTC"},
            {columnName: "Activity"},
            {columnName: "Location"},
            {columnName: "METL Prev"},
            {columnName: "METL"},
            {columnName: "METL Proj"},
            {columnName: "METL # of Days"},
            {columnName: "Assigned"},
            {columnName: "MAJCOM"},
            {columnName: "C-Rating Prev"},
            {columnName: "C-Rating"},
            {columnName: "C-Rating Proj"},
            {columnName: "C-Rating Proj Date"},
            {columnName: "C-Rating Proj Days"},
            {columnName: "P"},
            {columnName: "R"},
            {columnName: "S"},
            {columnName: "T"},
            {columnName: "C-Rating As of (RICDA)"},
            {columnName: "C-Rating # of Days"},
            {columnName: "PCTEF"}
        ]

        return maasDetailColumns;
    }
}