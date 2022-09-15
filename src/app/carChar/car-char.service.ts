import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarCharService {

  public E30_Coupe = {
    engine: {
      'Объем двигателя, куб. см.': '2302',
      'Клапанов на цилиндр:': '4',
      'Наддув:': 'нет',
      'Мощность, л.с.:': '215',
      'Достигается при об. в мин.:': '6750',
      'Крутящий момент, Нм/об. в мин.:': '230/4600',
      'Максимальная скорость, км/ч:': '241',
      'Время разгона до 100 км/ч, сек.:': '6.7',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '8.8',
      'Система питания:': 'инжектор',
      'Система газораспределения:': 'ohc',
      'Диaметр цилиндра, мм:': '93.4',
      'Ход поршня, мм:': '84',
      'Коэффициент сжатия:': '10.5',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '5',
    },
    brakes: {
      'Передние': 'дисковые',
      'Задние': 'дисковые',
    },
    dimensions: {
      'Длина, мм': '4340',
      'Ширина, мм': '1680',
      'Высота, мм': '1370',
      'Колесная база, мм': '2560',
    },
    other: {
      'Размер шин:': '205/55ZR15',
      'Снаряженная масса, кг:': '1200',
      'Допустимая масса, кг:': '1200',
      'Объем топливного бака, л:': '70',
      'Диаметр разворота, м:': '10.5',
      'Гарантия от коррозии, лет:': '6',
    }
  }

  public E30_Cabrio = {
    engine: {
      'Объем двигателя, куб. см.': '202',
      'Клапанов на цилиндр:': '4',
      'Наддув:': 'нет',
      'Мощность, л.с.:': '215',
      'Достигается при об. в мин.:': '6750',
      'Крутящий момент, Нм/об. в мин.:': '230/4600',
      'Максимальная скорость, км/ч:': '241',
      'Время разгона до 100 км/ч, сек.:': '6.7',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '8.8',
      'Система питания:': 'инжектор',
      'Система газораспределения:': 'ohc',
      'Диaметр цилиндра, мм:': '93.4',
      'Ход поршня, мм:': '84',
      'Коэффициент сжатия:': '10.5',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '5',
    },
    brakes: {
      'Передние': 'дисковые',
      'Задние': 'дисковые',
    },
    dimensions: {
      'Длина, мм': '4340',
      'Ширина, мм': '1680',
      'Высота, мм': '1370',
      'Колесная база, мм': '2560',
    },
    other: {
      'Размер шин:': '205/55ZR15',
      'Снаряженная масса, кг:': '1200',
      'Допустимая масса, кг:': '1200',
      'Объем топливного бака, л:': '70',
      'Диаметр разворота, м:': '10.5',
      'Гарантия от коррозии, лет:': '6',
    }
  }

  public E36_Sedan = {
    engine: {
      'Тип двигателя:': 'L6',
      'Объем двигателя, куб. см.': '3201',
      'Клапанов на цилиндр:': '4',
      'Наддув:': 'нет',
      'Мощность, л.с.:': '321',
      'Достигается при об. в мин.:': '7400',
      'Крутящий момент, Нм/об. в мин.:': '350/3250',
      'Максимальная скорость, км/ч:': '250',
      'Время разгона до 100 км/ч, сек.:': '5.5',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '11',
      'Расход топлива (в городе), л. на 100 км.:': '16.9',
      'Расход топлива (за городом), л. на 100 км.:': '7.6',
      'Система питания:': 'инжектор',
      'Система газораспределения:': 'dohc',
      'Диaметр цилиндра, мм:': '86.4',
      'Ход поршня, мм:': '91',
      'Коэффициент сжатия:': '11.3',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '5',
    },
    brakes: {
      'Передние': 'дисковые',
      'Задние': 'дисковые',
    },
    dimensions: {
      'Длина, мм': '4430',
      'Ширина, мм': '1710',
      'Высота, мм': '1360',
      'Колесная база, мм': '2710',
    },
    other: {
      'Размер шин:': '245/40ZR17',
      'Снаряженная масса, кг:': '1460',
      'Объем топливного бака, л': '65',
      'Диаметр разворота, м:': '11.6',
      'Гарантия от коррозии, лет:': '6',
    }
  }

  public E36_Coupe = {
    engine: {
      'Тип двигателя:': 'L6',
      'Объем двигателя, куб. см.': '3201',
      'Клапанов на цилиндр:': '4',
      'Наддув:': 'нет',
      'Мощность, л.с.:': '321',
      'Достигается при об. в мин.:': '7400',
      'Крутящий момент, Нм/об. в мин.:': '350/3250',
      'Максимальная скорость, км/ч:': '250',
      'Время разгона до 100 км/ч, сек.:': '5.5',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '11',
      'Расход топлива (в городе), л. на 100 км.:': '16.9',
      'Расход топлива (за городом), л. на 100 км.:': '7.6',
      'Система питания:': 'инжектор',
      'Система газораспределения:': 'dohc',
      'Диaметр цилиндра, мм:': '86.4',
      'Ход поршня, мм:': '91',
      'Коэффициент сжатия:': '11.3',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '6',
    },
    brakes: {
      'Передние': 'дисковые',
      'Задние': 'дисковые',
    },
    dimensions: {
      'Длина, мм': '4430',
      'Ширина, мм': '1710',
      'Высота, мм': '1340',
      'Колесная база, мм': '2710',
    },
    other: {
      'Размер шин:': '245/40ZR17',
      'Снаряженная масса, кг:': '1460',
      'Объем топливного бака, л': '65',
      'Диаметр разворота, м:': '11.6',
      'Гарантия от коррозии, лет:': '6',
    }
  }

  public E36_Cabrio = {
    engine: {
      'Тип двигателя:': 'L6',
      'Объем двигателя, куб. см.': '3201',
      'Клапанов на цилиндр:': '4',
      'Наддув:': 'нет',
      'Мощность, л.с.:': '321',
      'Достигается при об. в мин.:': '7400',
      'Крутящий момент, Нм/об. в мин.:': '350/3250',
      'Максимальная скорость, км/ч:': '250',
      'Время разгона до 100 км/ч, сек.:': '5.6',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '11.1',
      'Расход топлива (в городе), л. на 100 км.:': '17',
      'Расход топлива (за городом), л. на 100 км.:': '7.7',
      'Система питания:': 'инжектор',
      'Система газораспределения:': 'dohc',
      'Диaметр цилиндра, мм:': '86.4',
      'Ход поршня, мм:': '91',
      'Выхлоп CO2, г/км:': '270',
      'Коэффициент сжатия:': '11.3',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '6',
    },
    brakes: {
      'Передние': 'дисковые, 315 мм',
      'Задние': 'дисковые, 312 мм',
    },
    dimensions: {
      'Длина, мм': '4430',
      'Ширина, мм': '1710',
      'Высота, мм': '1340',
      'Колесная база, мм': '2710',
    },
    other: {
      'Размер шин:': '245/40ZR17',
      'Снаряженная масса, кг:': '1560',
      'Объем топливного бака, л': '65',
      'Диаметр разворота, м:': '11.6',
      'Гарантия от коррозии, лет:': '6',
    }
  }

  public E46_Coupe = {
    engine: {
      'Тип двигателя:': 'L6',
      'Объем двигателя, куб. см.': '3246',
      'Клапанов на цилиндр:': '4',
      'Наддув:': 'нет',
      'Мощность, л.с.:': '343',
      'Достигается при об. в мин.:': '7900',
      'Крутящий момент, Нм/об. в мин.:': '365/4900',
      'Максимальная скорость, км/ч:': '250',
      'Время разгона до 100 км/ч, сек.:': '5.2',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '11.9',
      'Расход топлива (в городе), л. на 100 км.:': '17.8',
      'Расход топлива (за городом), л. на 100 км.:': '8.4',
      'Система питания:': 'инжектор',
      'Система газораспределения:': 'dohc',
      'Диaметр цилиндра, мм:': '87',
      'Ход поршня, мм:': '91',
      'Выхлоп CO2, г/км:': '287',
      'Коэффициент сжатия:': '11.5',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '6',
    },
    brakes: {
      'Передние': 'дисковые, 325 мм',
      'Задние': 'дисковые, 328 мм',
    },
    dimensions: {
      'Длина, мм': '4490',
      'Ширина, мм': '1780',
      'Высота, мм': '1370',
      'Колесная база, мм': '2730',
    },
    other: {
      'Размер шин:': '255/40ZR18',
      'Снаряженная масса, кг:': '1470',
      'Объем топливного бака, л': '63',
      'Диаметр разворота, м:': '11',
      'Гарантия от коррозии, лет:': '6',
    }
  }

  public E46_Cabrio = {
    engine: {
      'Тип двигателя:': 'L6',
      'Объем двигателя, куб. см.': '3246',
      'Клапанов на цилиндр:': '4',
      'Наддув:': 'нет',
      'Мощность, л.с.:': '343',
      'Достигается при об. в мин.:': '7900',
      'Крутящий момент, Нм/об. в мин.:': '365/4900',
      'Максимальная скорость, км/ч:': '250',
      'Время разгона до 100 км/ч, сек.:': '5.5',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '12.1',
      'Система питания:': 'инжектор',
      'Система газораспределения:': 'dohc',
      'Диaметр цилиндра, мм:': '87',
      'Ход поршня, мм:': '91',
      'Выхлоп CO2, г/км:': '292',
      'Коэффициент сжатия:': '11.5',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '6',
    },
    brakes: {
      'Передние': 'дисковые, 325 мм',
      'Задние': 'дисковые, 328 мм',
    },
    dimensions: {
      'Длина, мм': '4490',
      'Ширина, мм': '1780',
      'Высота, мм': '1360',
      'Колесная база, мм': '2730',
    },
    other: {
      'Размер шин:': '255/40ZR18',
      'Снаряженная масса, кг:': '1630',
      'Объем топливного бака, л': '63',
      'Диаметр разворота, м:': '11',
      'Гарантия от коррозии, лет:': '6',
    }
  }

  public E90 = {
    engine: {
      'Тип двигателя:': 'V8',
      'Объем двигателя, куб. см.': '3999',
      'Клапанов на цилиндр:': '4',
      'Мощность, л.с.:': '420',
      'Достигается при об. в мин.:': '8300',
      'Крутящий момент, Нм/об. в мин.:': '400/3900',
      'Максимальная скорость, км/ч:': '250',
      'Время разгона до 100 км/ч, сек.:': '4.9',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '12.4',
      'Расход топлива (в городе), л. на 100 км.:': '17.9',
      'Расход топлива (за городом), л. на 100 км.:': '9.2',
      'Компоновка двигателя': 'спереди, продольно',
      'Система питания:': 'распределенный впрыск',
      'Система газораспределения:': 'dohc',
      'Диaметр цилиндра, мм:': '92',
      'Ход поршня, мм:': '75.2',
      'Выхлоп CO2, г/км:': '295',
      'Коэффициент сжатия:': '12',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '6',
    },
    brakes: {
      'Передние': 'дисковые, вентилируемые',
      'Задние': 'дисковые, вентилируемые',
    },
    dimensions: {
      'Длина, мм': '4480',
      'Ширина, мм': '1800',
      'Высота, мм': '1450',
      'Колесная база, мм.': '2760',
      'Колея колес спереди, мм:': '1540',
      'Колея колес сади, мм:': '1540',
    },
    other: {
      'Размер шин:': '265/40R18',
      'Снаряженная масса, кг:': '1460',
      'Объем багажника, л.': '210',
      'Объем топливного бака, л': '63',
      'Диаметр разворота, м:': '11',
      'Гарантия от коррозии, лет:': '6',
    }
  }

  public E92 = {
    engine: {
      'Тип двигателя:': 'V8',
      'Объем двигателя, куб. см.': '3999',
      'Клапанов на цилиндр:': '4',
      'Мощность, л.с.:': '420',
      'Достигается при об. в мин.:': '8300',
      'Крутящий момент, Нм/об. в мин.:': '400/3900',
      'Максимальная скорость, км/ч:': '250',
      'Время разгона до 100 км/ч, сек.:': '4.8',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '12.4',
      'Расход топлива (в городе), л. на 100 км.:': '17.9',
      'Расход топлива (за городом), л. на 100 км.:': '9.2',
      'Компоновка двигателя': 'спереди, продольно',
      'Система питания:': 'распределенный впрыск',
      'Система газораспределения:': 'dohc',
      'Диaметр цилиндра, мм:': '92',
      'Ход поршня, мм:': '75.2',
      'Выхлоп CO2, г/км:': '295',
      'Коэффициент сжатия:': '12',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '6',
    },
    brakes: {
      'Передние': 'дисковые, вентилируемые',
      'Задние': 'дисковые, вентилируемые',
    },
    dimensions: {
      'Длина, мм': '4620',
      'Ширина, мм': '1800',
      'Высота, мм': '1420',
      'Колесная база, мм.': '2760',
      'Колея колес спереди, мм:': '1540',
      'Колея колес сади, мм:': '1540',
    },
    other: {
      'Размер шин:': '265/40R18',
      'Снаряженная масса, кг:': '1555',
      'Объем багажника, л.': '210',
      'Объем топливного бака, л': '63',
      'Диаметр разворота, м:': '11',
      'Гарантия от коррозии, лет:': '6',
    }
  }

  public E93 = {
    engine: {
      'Тип двигателя:': 'V8',
      'Объем двигателя, куб. см.': '3999',
      'Клапанов на цилиндр:': '4',
      'Мощность, л.с.:': '420',
      'Достигается при об. в мин.:': '8300',
      'Крутящий момент, Нм/об. в мин.:': '400/3900',
      'Максимальная скорость, км/ч:': '250',
      'Время разгона до 100 км/ч, сек.:': '5.3',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '12.9',
      'Расход топлива (в городе), л. на 100 км.:': '18.7',
      'Расход топлива (за городом), л. на 100 км.:': '9.6',
      'Компоновка двигателя': 'спереди, продольно',
      'Система питания:': 'распределенный впрыск',
      'Система газораспределения:': 'dohc',
      'Диaметр цилиндра, мм:': '92',
      'Ход поршня, мм:': '75.2',
      'Выхлоп CO2, г/км:': '309',
      'Коэффициент сжатия:': '12',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '6',
    },
    brakes: {
      'Передние': 'дисковые, вентилируемые',
      'Задние': 'дисковые, вентилируемые',
    },
    dimensions: {
      'Длина, мм': '4580',
      'Ширина, мм': '1780',
      'Высота, мм': '1380',
      'Колесная база, мм.': '2760',
      'Колея колес спереди, мм:': '1500',
      'Колея колес сади, мм:': '1510',
    },
    other: {
      'Размер шин:': '255/40R17',
      'Снаряженная масса, кг:': '1785',
      'Объем багажника, л.': '210',
      'Объем топливного бака, л': '63',
      'Диаметр разворота, м:': '11',
      'Гарантия от коррозии, лет:': '6',
    }
  }

  public F80 = {
    engine: {
      'Тип двигателя:': 'L6',
      'Объем двигателя, куб. см.': '2979',
      'Клапанов на цилиндр:': '4',
      'Мощность, л.с.:': '431',
      'Крутящий момент, Нм/об. в мин.:': '550/5500',
      'Максимальная скорость, км/ч:': '250',
      'Время разгона до 100 км/ч, сек.:': '4.3',
      'Расход топлива (смешанный цикл), л. на 100 км.:': '8.8',
      'Расход топлива (в городе), л. на 100 км.:': '12',
      'Расход топлива (за городом), л. на 100 км.:': '6.9',
      'Компоновка двигателя': 'спереди, продольно',
      'Система питания:': 'непосредственный впрыск',
      'Диaметр цилиндра, мм:': '84',
      'Ход поршня, мм:': '89.6',
      'Выхлоп CO2, г/км:': '204',
      'Коэффициент сжатия:': '10.2',
    },
    drive: {
      'Привод:': 'задний',
    },
    transmission: {
      'Коробка передач:': 'МКПП',
      'Количество ступеней:': '6',
    },
    brakes: {
      'Передние': 'дисковые, вентилируемые',
      'Задние': 'дисковые, вентилируемые',
    },
    dimensions: {
      'Длина, мм': '4671',
      'Ширина, мм': '1877',
      'Высота, мм': '1424',
      'Колесная база, мм.': '2812',
      'Колея колес спереди, мм:': '1579',
      'Колея колес сади, мм:': '1603',
    },
    other: {
      'Размер шин:': '255/40ZR18; 275/40ZR18',
      'Снаряженная масса, кг:': '1520',
      'Объем багажника, л.': '428',
      'Объем топливного бака, л': '60',
      'Диаметр разворота, м:': '12.2',
    }
  }

  public charList = [null,
    this.E30_Coupe,
    this.E30_Cabrio,
    this.E36_Sedan,
    this.E36_Coupe,
    this.E36_Cabrio,
    this.E46_Coupe,
    this.E46_Cabrio,
    this.E90,
    this.E92,
    this.E93,
    this.F80,
  ]

  constructor() {
  }
}