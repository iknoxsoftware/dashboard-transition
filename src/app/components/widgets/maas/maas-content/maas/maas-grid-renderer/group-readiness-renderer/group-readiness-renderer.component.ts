import {Component} from "@angular/core";

@Component({
    selector: 'group-readiness-renderer',
    styleUrls: ['./group-readiness-renderer.component.css'],
    templateUrl: './group-readiness-renderer.component.html'
})
export class GroupReadinessRenderer {
    private params: any;

    public configurationGroupName: string;

    public cRedCount: number = 0;
    public cYellowCount: number = 0;
    public cGreenCount: number = 0;
    public cGrayCount: number = 0;

    public cRedPercent: number;
    public cYellowPercent: number;
    public cGreenPercent: number;
    public cGrayPercent: number;

    public cRedWidth: String;
    public cYellowWidth: string;
    public cGreenWidth: string;
    public cGrayWidth: string;

    public mRedCount: number = 0;
    public mYellowCount: number = 0;
    public mGreenCount: number = 0;
    public mGrayCount: number = 0;

    public mRedPercent: number;
    public mYellowPercent: number;
    public mGreenPercent: number;
    public mGrayPercent: number;

    public mRedWidth: String;
    public mYellowWidth: string;
    public mGreenWidth: string;
    public mGrayWidth: string;

    agInit(params: any): void {
        this.params = params;

        this.configurationGroupName = params.node.key;

        this.setCData();
        this.setMData();
    }

    setData() {
        let rowNode = this.params.node;

        let cRed: number = 0;
        let cYellow: number = 0;
        let cGreen: number = 0;
        let cGray: number = 0

        let mRed: number = 0;
        let mYellow: number = 0;
        let mGreen: number = 0;
        let mGray: number = 0;

        for (let i in rowNode.allLeafChildren) {
            cRed = parseInt(rowNode.allLeafChildren[i].data.C4Count);
            cYellow = parseInt(rowNode.allLeafChildren[i].data.C3Count);
            cGreen = parseInt(rowNode.allLeafChildren[i].data.C12Count);
            cGray = parseInt(rowNode.allLeafChildren[i].data.C5Count);

            mRed = parseInt(rowNode.allLeafChildren[i].data.NCount);
            mYellow = parseInt(rowNode.allLeafChildren[i].data.QCount);
            mGreen = parseInt(rowNode.allLeafChildren[i].data.YCount);
            mGray = parseInt(rowNode.allLeafChildren[i].data.NRCount);

            this.cRedCount = this.cRedCount + cRed;
            this.cYellowCount = this.cYellowCount + cYellow;
            this.cGreenCount = this.cGreenCount + cGreen;
            this.cGrayCount = this.cGrayCount + cGray;

            this.mRedCount = this.mRedCount + mRed;
            this.mYellowCount = this.mYellowCount + mYellow;
            this.mGreenCount = this.mGreenCount + mGreen;
            this.mGrayCount = this.mGrayCount + mGray;
        }

        let cTotalCount: number = this.cRedCount + this.cYellowCount + this.cGreenCount + this.cGrayCount;

        this.cRedPercent = Math.round((this.cRedCount / cTotalCount) * 100);
        this.cYellowPercent = Math.round((this.cYellowCount / cTotalCount) * 100);
        this.cGreenPercent = Math.round((this.cGreenCount / cTotalCount) * 100);
        this.cGrayPercent = Math.round((this.cGrayCount / cTotalCount) * 100);

        let mTotalCount: number = this.mRedCount + this.mYellowCount + this.mGreenCount + this.mGrayCount;

        this.mRedPercent = Math.round((this.mRedCount / mTotalCount) * 100);
        this.mYellowPercent = Math.round((this.mYellowCount / mTotalCount) * 100);
        this.mGreenPercent = Math.round((this.mGreenCount / mTotalCount) * 100);
        this.mGrayPercent = Math.round((this.mGrayCount / mTotalCount) * 100);
    }

    setCData() {
        this.cRedCount = parseInt(this.params.data.C4Count);
        this.cYellowCount = parseInt(this.params.data.C3Count);
        this.cGreenCount = parseInt(this.params.data.C12Count);
        this.cGrayCount = parseInt(this.params.data.C5Count);

        let cTotalCount: number = this.cRedCount + this.cYellowCount + this.cGreenCount + this.cGrayCount;

        this.cRedPercent = Math.round((this.cRedCount / cTotalCount) * 100);
        this.cYellowPercent = Math.round((this.cYellowCount / cTotalCount) * 100);
        this.cGreenPercent = Math.round((this.cGreenCount / cTotalCount) * 100);
        this.cGrayPercent = Math.round((this.cGrayCount / cTotalCount) * 100);
    }

    setMData() {
        this.mRedCount = parseInt(this.params.data.NCount);
        this.mYellowCount = parseInt(this.params.data.QCount);
        this.mGreenCount = parseInt(this.params.data.YCount);
        this.mGrayCount = parseInt(this.params.data.NRCount);

        let mTotalCount: number = this.mRedCount + this.mYellowCount + this.mGreenCount + this.mGrayCount;

        this.mRedPercent = Math.round((this.mRedCount / mTotalCount) * 100);
        this.mYellowPercent = Math.round((this.mYellowCount / mTotalCount) * 100);
        this.mGreenPercent = Math.round((this.mGreenCount / mTotalCount) * 100);
        this.mGrayPercent = Math.round((this.mGrayCount / mTotalCount) * 100);        
    }
}