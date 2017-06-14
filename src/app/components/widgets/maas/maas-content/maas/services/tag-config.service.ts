import {Injectable} from '@angular/core';

import {DtTagConfig} from 'app/components/widgets/maas/maas-content/maas/services/dt-tag-config';

@Injectable()
export class TagConfigService {

    getTagConfigs(): Array<DtTagConfig> {
        let tagConfig: DtTagConfig[] = this.getData();

        return tagConfig;
    }

    getTagConfigsFiltered(DashboardId: number, UserName: string): Array<DtTagConfig> {
        let tagConfig: DtTagConfig[] = this.getData().filter(dtTagConfig => dtTagConfig.DashboardId==DashboardId && dtTagConfig.UserName==UserName);

        return tagConfig;
    }

    getData(): Array<DtTagConfig> {
        return [
            {
                "TagConfigId": "EAE0C757-9111-4A72-9E47-00963CCFC4D8",
                "TagConfigName": "C Config 2",
                "DashboardId": 13,
                "UserName": "lsimpson"
            },
            {
                "TagConfigId": "1AEDA9A8-CB24-4864-A0CF-7C4057966000",
                "TagConfigName": "Clint Configuration",
                "DashboardId": 13,
                "UserName": "lsimpson"
            },
            {
                "TagConfigId": "857D0E94-BA30-4480-BE46-47947990BD35",
                "TagConfigName": "Default",
                "DashboardId": 5,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "8D0E842B-C4F1-4CFE-8F7B-5C3ED86C77D6",
                "TagConfigName": "Default",
                "DashboardId": 30,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "0C60AA6A-365F-4B78-9493-48D2124BE69A",
                "TagConfigName": "My Config",
                "DashboardId": 33,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "446D619B-590D-43F6-A110-4B02BEB4AB40",
                "TagConfigName": "My Configuration",
                "DashboardId": 15,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "00E43A30-1269-456A-B0B9-5416CB384051",
                "TagConfigName": "My Configuration",
                "DashboardId": 2,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "F4143A46-9B6E-418D-83C6-580C2119054D",
                "TagConfigName": "My Configuration",
                "DashboardId": 13,
                "UserName": "lsimpson"
            },
            {
                "TagConfigId": "826009D7-8A05-4818-82A0-6B15F8B37A9D",
                "TagConfigName": "My Configuration",
                "DashboardId": 13,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "A4A25909-0401-49B8-8AF3-0F432320DE4A",
                "TagConfigName": "My Configuration",
                "DashboardId": 2,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "6BF75A94-3C1A-486C-88B1-1CF2815D00A1",
                "TagConfigName": "My Configuration",
                "DashboardId": 3,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "3F0F1C1C-30AA-4919-9EF0-856D4A577F42",
                "TagConfigName": "My Configuration",
                "DashboardId": 3,
                "UserName": "jalibegovic"
            },
            {
                "TagConfigId": "8864AC49-A82A-4AD5-A765-85CC945071BB",
                "TagConfigName": "My Configuration",
                "DashboardId": 20,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "AAF3E57D-0B54-4E59-B5D7-C62F04AB0BE2",
                "TagConfigName": "My Configuration",
                "DashboardId": 2,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "15CB9716-EC48-41B3-B5DB-C8CEC5F4FC3A",
                "TagConfigName": "My Configuration",
                "DashboardId": 33,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "B3B631EF-5C41-4D2D-84C1-D125E4688EF3",
                "TagConfigName": "My Configuration",
                "DashboardId": 4,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "B562D890-5EE1-49D8-BCDD-ABCFDFA1C51C",
                "TagConfigName": "My Configuration",
                "DashboardId": 5,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "5877C0A9-585A-4EC1-BC38-B9D72209BB0D",
                "TagConfigName": "My Configuration",
                "DashboardId": 4,
                "UserName": "jalibegovic"
            },
            {
                "TagConfigId": "DD1D2BAE-50E4-48A4-9164-F370A39A62F5",
                "TagConfigName": "My Configuration",
                "DashboardId": 3,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "814D7F52-64E8-47ED-BA10-D663E889F8C6",
                "TagConfigName": "Navy",
                "DashboardId": 28,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "1B7F0A4D-1F70-4647-9A9F-19A368B332C1",
                "TagConfigName": "Sample",
                "DashboardId": 2,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "29D6D43E-D6E3-491A-812A-DCE1B5ADF2B3",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 4,
                "UserName": ""
            },
            {
                "TagConfigId": "6772F34A-0D1C-48DE-ACFA-DF21CE223835",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 12,
                "UserName": ""
            },
            {
                "TagConfigId": "8FA14EED-C7C9-49B3-8768-EADF4035464C",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 2,
                "UserName": ""
            },
            {
                "TagConfigId": "3214197A-39B4-4FB8-99C3-BB54C31A75FF",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 2,
                "UserName": ""
            },
            {
                "TagConfigId": "64330F6B-515F-4078-A80B-D446BEC403C3",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 6,
                "UserName": ""
            },
            {
                "TagConfigId": "3E93C2A2-5BD4-4082-96F6-8A785E87A2C1",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 3,
                "UserName": ""
            },
            {
                "TagConfigId": "C918A57C-D599-41ED-A7BB-2D903ACDD575",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 2,
                "UserName": ""
            },
            {
                "TagConfigId": "6D64E66E-7A47-4CF0-B9DA-36102BA561B1",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 10,
                "UserName": ""
            },
            {
                "TagConfigId": "892A9F92-9383-436F-A47D-41CF8AEF0891",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 5,
                "UserName": ""
            },
            {
                "TagConfigId": "BE93EE0E-9302-4D32-8925-1015A6A5B4F6",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 17,
                "UserName": ""
            },
            {
                "TagConfigId": "057493D5-1D2C-43CD-9B96-0437FC84B4B4",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 17,
                "UserName": ""
            },
            {
                "TagConfigId": "AA8DB579-0D27-4106-9FF3-729AACEF4758",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 20,
                "UserName": ""
            },
            {
                "TagConfigId": "EBE1084F-1CD6-47C1-906C-75EBA271A068",
                "TagConfigName": "Shared Configuration",
                "DashboardId": 3,
                "UserName": ""
            },
            {
                "TagConfigId": "3B0A97A9-801A-47A1-94BC-62B79BE4B269",
                "TagConfigName": "Test",
                "DashboardId": 13,
                "UserName": "nknox"
            },
            {
                "TagConfigId": "CA1A241F-A56C-4A7E-B30E-D97C1B0FD629",
                "TagConfigName": "Test",
                "DashboardId": 13,
                "UserName": "lsimpson"
            }
            ]
    }
}