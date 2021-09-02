export interface IMarketParticipant {
  fsrarId: string;
  fullName: string;
  inn: string;
  kpp: string;
  firmType: string;
}

export const firmTypeMap = new Map([
  ['производитель', 'maker'],
  ['импортер производитель', 'maker-importer'],
  ['производитель розница', 'maker-retailer'],
  ['импортер оптовик производитель', 'maker-importer-wholesaler'],
  ['оптовик', 'wholesaler'],
  ['импортер оптовик', 'wholesaler-importer'],
  ['оптовик производитель', 'maker-wholesaler'],
  ['оптовик перевозчик', 'wholesaler-carrier'],
  ['общепит', 'catering'],
  ['общепит розница', 'catering-retailer'],
  ['перевозчик', 'carrier'],
])
