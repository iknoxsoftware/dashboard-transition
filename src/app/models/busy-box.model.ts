export enum BusyBoxMessageID {
    loading = 1 ,
    refreshing = 2,
    exporting = 3
}

export class BusyBoxModel { 
    message: string;

    constructor(public messageID: BusyBoxMessageID) {
        this.message = this.getMessage(messageID);
    }

    private getMessage(messageID: BusyBoxMessageID): string {
        switch(messageID)
        {
            case BusyBoxMessageID.loading:
                return "Loading...";
            case BusyBoxMessageID.refreshing:
                return "Refreshing...";
            case BusyBoxMessageID.exporting:
            default:
                return "Exporting...";
        }
    }
}