import {Component, OnInit} from '@angular/core';
import {CarCharService} from "../carChar/car-char.service";

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.scss']
})
export class CharacteristicComponent implements OnInit {

  public _charData;
  public carData: any;
  public engine: [string, string][] | undefined;
  public transmission: [string, string][] | undefined;
  public drive: [string, string][] | undefined;
  public brakes: [string, string][] | undefined;
  public dimensions: [string, string][] | undefined;
  public other: [string, string][] | undefined;

  public isShownChar: boolean = false;

  public checkOption() {
    let select = document.getElementById('select') as HTMLSelectElement;

    this.isShownChar = true;

    let index = select.selectedIndex;
    if (index === 0) {
      this.carData = this._charData.charList[index];
    } else {
      this.carData = this._charData.charList[index];
      this.engine = Object.entries(this.carData.engine);
      this.transmission = Object.entries(this.carData.transmission);
      this.drive = Object.entries(this.carData.drive);
      this.brakes = Object.entries(this.carData.brakes);
      this.dimensions = Object.entries(this.carData.dimensions);
      this.other = Object.entries(this.carData.other);
    }
  }

  constructor(charData: CarCharService) {
    this._charData = charData;
  }

  ngOnInit(): void {

  }

}
