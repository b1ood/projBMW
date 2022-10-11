import {Component, OnInit} from '@angular/core';
import {carData} from "../../interfaces/carData";
import {CarCharService} from "./carChar/car-char.service";

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.scss']
})
export class CharacteristicComponent implements OnInit {

  selectedIndex: number;
  carChars: carData[] = [];
  public shownChars: boolean;

  public checkOption() {
    this.shownChars = true;
    let select = document.getElementById('select') as HTMLSelectElement;
    this.selectedIndex = select.selectedIndex;
    return this.selectedIndex;
  }

  constructor(private carCharService: CarCharService) {
  }

  ngOnInit(): void {
    this.carCharService.getAll().subscribe(carChars => {
      this.carChars = carChars;
    })
  }
}


