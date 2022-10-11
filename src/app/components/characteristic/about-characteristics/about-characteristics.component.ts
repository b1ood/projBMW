import {Component, Input, OnInit} from '@angular/core';
import {carData} from "../../../interfaces/carData";

@Component({
  selector: 'app-about-characteristics',
  templateUrl: './about-characteristics.component.html',
  styleUrls: ['./about-characteristics.component.scss']
})
export class AboutCharacteristicsComponent implements OnInit {

  @Input() chars: carData[];
  @Input() selectedIndex: number;

  public name: string;
  public engine: [string, string][];
  public drive: [string, string][];
  public transmission: [string, string][];
  public brakes: [string, string][];
  public dimensions: [string, string][];
  public other: [string, string][];

  showChar() {
    let lastIndex = this.selectedIndex;
    let currentIndex = this.selectedIndex - 1;
    if (this.selectedIndex === 0) {
      this.selectedIndex = lastIndex;
    } else {
      this.name = this.chars[currentIndex].name;
      this.engine = Object.entries(this.chars[currentIndex].engine);
      this.drive = Object.entries(this.chars[currentIndex].drive);
      this.transmission = Object.entries(this.chars[currentIndex].transmission);
      this.brakes = Object.entries(this.chars[currentIndex].brakes);
      this.dimensions = Object.entries(this.chars[currentIndex].dimensions);
      this.other = Object.entries(this.chars[currentIndex].other);
    }
  }

  constructor() {  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.showChar();
  }
}
