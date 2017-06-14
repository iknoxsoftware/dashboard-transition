import { DetailColumnID } from "app/models/detail-column.model";

export class DetailColumnHelper {
    static getColumnName(columnID: DetailColumnID) : string {
        switch(columnID) {
            case DetailColumnID.uic:
                return "UIC";
            case DetailColumnID.unitName:
                return "Unit Name";
            case DetailColumnID.utc:
                return "UTC";
            case DetailColumnID.activity:
                return "Activity";
            case DetailColumnID.location:
                return "Location";
            case DetailColumnID.metl:
                return "METL";
            case DetailColumnID.metlPrev:
                return "METL Prev";
            case DetailColumnID.metlProj:
                return "METL Proj";
            case DetailColumnID.metlAsOf:
                return "METL As of";
            case DetailColumnID.metlAge:
                return "METL # of Days";
            case DetailColumnID.assigned:
                return "Assigned";
            case DetailColumnID.majcom:
                return "MAJCOM";
            case DetailColumnID.cRating:
                return "C-Rating";
            case DetailColumnID.cRatingPrev:
                return "C-Rating Prev";
            case DetailColumnID.cRatingProj:
                return "C-Rating Proj";
            case DetailColumnID.pRating:
                return "P";
            case DetailColumnID.sRating:
                return "S";
            case DetailColumnID.rRating:
                return "R";
            case DetailColumnID.tRating:
                return "T";
            case DetailColumnID.cRatingAsOf:
                return "C-Rating As of (RICDA)";
            case DetailColumnID.cRatingAge:
                return "C-Rating # of Days";
            case DetailColumnID.pctef:
                return "PCTEF";
            default:
                return "Unknown";
        }
    }

    static getDefaultColumns() : Array<DetailColumnID> {
        let columns: Array<DetailColumnID> = [
            DetailColumnID.uic,
            DetailColumnID.unitName,
            DetailColumnID.utc,
            DetailColumnID.location,
            DetailColumnID.metl,
            DetailColumnID.metlProj,
            DetailColumnID.assigned,
            DetailColumnID.majcom,
            DetailColumnID.cRating,
            DetailColumnID.cRatingProj,
            DetailColumnID.pRating,
            DetailColumnID.sRating,
            DetailColumnID.rRating,
            DetailColumnID.tRating
        ];
        return columns;
    }
}