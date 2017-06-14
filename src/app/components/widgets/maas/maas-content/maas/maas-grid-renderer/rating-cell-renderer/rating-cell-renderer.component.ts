import {Component} from "@angular/core";

@Component({
    selector: 'app-red-component',
    styleUrls: ['./rating-cell-renderer.component.css'],
    templateUrl: './rating-cell-renderer.component.html'
})
export class RatingCellRendererComponent {
    private params: any;

    public textAlign: string;
    public backgroundColor: string;
    public foregroundColor: string;

    agInit(params: any): void {
        this.params = params;

        this.textAlign = "center";

        let metlDays: number = params.data.MetlDays;
        let cRatingDays: number = params.data.CRatingDays;
        let cRatingProjDays: number = params.data.cRatingProjDays;

        // Gradient results (rates older than 30 days)
        if ((metlDays > 30 && (params.colDef.field == "MetlRatingText" || params.colDef.field == "MetlRatingTextProj")) || (cRatingDays > 30 && (params.colDef.field == "CRating" || params.colDef.field == "PRating" || params.colDef.field == "SRating" || params.colDef.field == "RRating" || params.colDef.field == "TRating")) || (cRatingProjDays > 30 && params.colDef.field == "PCRating")) {
            if (this.params.value == "1" || this.params.value == "2" || this.params.value == "Y") {
                this.backgroundColor = "repeating-linear-gradient(-55deg, black, green 10%, green 0%)"
                this.foregroundColor = "white";
            }
            else if (this.params.value == "3" || this.params.value == "Q") {
                this.backgroundColor = "repeating-linear-gradient(-55deg, black, yellow 10%, yellow 10%)"
                this.foregroundColor = "white";
            }
            else if (this.params.value == "4" || this.params.value == "N") {
                this.backgroundColor = "repeating-linear-gradient(-55deg, black, red 10%, red 0%)"
                this.foregroundColor = "white";
            }
            else {
                this.backgroundColor = "repeating-linear-gradient(-55deg, black, #a6a6a6 10%, #a6a6a6 0%)"
                this.foregroundColor = "white";
            }
        }
        else
        {
            if (this.params.value == "1" || this.params.value == "2" || this.params.value == "Y") {
                this.backgroundColor = "linear-gradient(to bottom, #009933, #004d00)";
                this.foregroundColor = "white";
            }
            else if (this.params.value == "3" || this.params.value == "Q") {
                this.backgroundColor = "linear-gradient(to bottom, #ffff00, #b3b300)";
                this.foregroundColor = "white";
            }
            else if (this.params.value == "4" || this.params.value == "N") {
                this.backgroundColor = "linear-gradient(to bottom, #cc0000, #4d0000)";
                this.foregroundColor = "white";
            }
            else {
                this.backgroundColor = "linear-gradient(to bottom, #b3b3b3, #4d4d4d)";
                this.foregroundColor = "white";
            }
        }
    }
}