import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-classification-bar',
  templateUrl: './menu-classification-bar.component.html',
  styleUrls: ['./menu-classification-bar.component.sass']
})
export class MenuClassificationBarComponent implements OnInit  {
@Input() isClassified: boolean;
classificationText: string;

    constructor() { 
    }

    ngOnInit() {
        this.classificationText = this.isClassified ? 'SECRET // NOFORN' : 'UNCLASSIFIED // FOUO';
    }
}
