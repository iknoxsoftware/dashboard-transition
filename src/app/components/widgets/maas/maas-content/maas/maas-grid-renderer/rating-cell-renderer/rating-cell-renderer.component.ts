import {Component} from "@angular/core";

@Component({
    selector: 'app-red-component',
    styleUrls: ['./rating-cell-renderer.component.sass'],
    templateUrl: './rating-cell-renderer.component.html'
})
export class RatingCellRendererComponent {
    private params: any;

    public textAlign: string;
    public backgroundColor: string;
    public foregroundColor: string;

    public isGreenOverdue: boolean;
    public isYellowOverdue: boolean;
    public isRedOverdue: boolean;
    public isGrayOverdue: boolean;

    agInit(params: any): void {
        this.params = params;

        this.textAlign = "center";

        let metlDays: number = params.data.MetlDays;
        let cRatingDays: number = params.data.CRatingDays;
        let cRatingProjDays: number = params.data.cRatingProjDays;

        if (this.params.value == "0")
        {
            this.params.value = "";
        }
        // Gradient results (rates older than 30 days)
        else if ((metlDays > 30 && (params.colDef.field == "MetlRatingText" || params.colDef.field == "MetlRatingTextProj")) || (cRatingDays > 30 && (params.colDef.field == "CRating" || params.colDef.field == "PRating" || params.colDef.field == "SRating" || params.colDef.field == "RRating" || params.colDef.field == "TRating")) || (cRatingProjDays > 30 && params.colDef.field == "PCRating")) {
            this.foregroundColor = "white";
            if (this.params.value == "1" || this.params.value == "2" || this.params.value == "Y")
                this.isGreenOverdue = true;
            else if (this.params.value == "3" || this.params.value == "Q")
                this.isYellowOverdue = true;
            else if (this.params.value == "4" || this.params.value == "N")
                this.isRedOverdue = true;
            else
                this.isGrayOverdue = true;
        }
        else
        {
            this.foregroundColor = "white";
            if (this.params.value == "1" || this.params.value == "2" || this.params.value == "Y")
                this.backgroundColor = "linear-gradient(to bottom, #21BA25, #107213)";
            else if (this.params.value == "3" || this.params.value == "Q") {
                this.backgroundColor = "linear-gradient(to bottom, #FFE714, #E7AE0F)";
                this.foregroundColor = "black";
            }
            else if (this.params.value == "4" || this.params.value == "N")
                this.backgroundColor = "linear-gradient(to bottom, #E91313, #A01414)";
            else
                this.backgroundColor = "linear-gradient(to bottom, #818181, #4B4B4B)";
        }
    }
}