export interface Name {
  latin: string;
  russian: string;
}


export interface Flower {
  id?: string;
  // Наименование
  fullName: Name;
  // Вид растения
  type: string;
  sort?: string;
  // Семейство
  family: Name;
  // Род
  genus: string;
}

export const FLOWERS: Array<Flower> = [
  {
    id: '1',
    fullName: {
      latin: 'Ficus benjamina',
      russian: 'Фикус Бенджамина'
    },
    genus: 'Фикус',
    type: 'декоративно-лиственное',
    sort: 'Анастасия',
    family: {
      latin: 'Moraceae',
      russian: 'Тутовые'
    },
  },
  {
    id: '1',
    fullName: {
      latin: 'Ficus benjamina',
      russian: 'Фикус Бенджамина'
    },
    genus: 'Фикус',
    type: 'декоративно-лиственное',
    sort: 'Моник',
    family: {
      latin: 'Moraceae',
      russian: 'Тутовые'
    },
  },
  {
    id: '1',
    fullName: {
      latin: 'Ficus benjamina',
      russian: 'Фикус Бенджамина'
    },
    genus: 'Фикус',
    type: 'декоративно-лиственное',
    sort: 'Экзотика',
    family: {
      latin: 'Moraceae',
      russian: 'Тутовые'
    },
  },
  {
    id: '1',
    fullName: {
      latin: 'Ficus benjamina',
      russian: 'Фикус Бенджамина'
    },
    genus: 'Фикус',
    type: 'декоративно-лиственное',
    sort: 'Даниэль',
    family: {
      latin: 'Moraceae',
      russian: 'Тутовые'
    },
  },
];
export const COUNTERPARTIES = [
  {
    fsrarId: '030000334465',
    fullName: 'Organization 1',
    inn: '7799060060',
    kpp: '7799060101',
    firmType: 'импортер оптовик',
  },
  {
    fsrarId: '030000333524',
    fullName: 'Organization 2',
    inn: '7799060060',
    kpp: '7799060101',
    firmType: 'оптовик производитель',
  },
  {
    fsrarId: '030000338867',
    fullName: 'Organization 3',
    inn: '7799060060',
    kpp: '7799060101',
    firmType: 'оптовик перевозчик',
  },
  {
    fsrarId: '030000330907',
    fullName: 'Organization 4',
    inn: '7799060060',
    kpp: '7799060101',
    firmType: 'общепит',
  },
];

export const LIC_FILTER = [
  {id: 0, title: 'ПХП', count: '0'},
  {id: 1, title: 'РПА', count: '0'},
  {id: 2, title: 'РПО', count: '0'},
  {id: 3, title: 'ЗХП', count: '0'},
];
