import { Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appSomeSpecialDir]'
})
export class SomeSpecialDirDirective {

  @HostBinding('style.color') myColor: string | undefined;

  constructor() {
    setInterval(() => {
      this.myColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    }, 1000)
  }

}
