import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public isShownGens = false;

  constructor() { }

  showGens() {
    let genBtn: any = document.getElementById('fourthGen');

    if (genBtn.innerHTML === 'Скрыть') {
      genBtn.innerHTML = 'Узнать больше';
    } else {
      genBtn.innerHTML = 'Скрыть';
    }

    this.isShownGens = !this.isShownGens;
  }

  ngOnInit(): void {
  }
}
