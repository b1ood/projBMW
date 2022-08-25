import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  movingMenu() {
    let hamburgerMenu: any = document.getElementById('menu')
    let checkInp: any = document.getElementById('menu__toggle');

    checkInp.addEventListener('click', () => {
      if (checkInp.checked) {
        hamburgerMenu.style.left = '-8%';
        hamburgerMenu.style.transition = '0.5s'
      } else {
        hamburgerMenu.style.left = '25px';
        hamburgerMenu.style.transition = '0.5s'
      }
    })
  }

}

