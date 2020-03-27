// Продукция российского происхождения
import {TypeInterface} from './type-interface';

export interface Product {
  alcCode: string; // Код продукции согласно ЕГАИС
  fullName: string; // Наименование продукции полное
  alcVolume?: string; // Содержание этилового спирта, %
  unitType: string; // Признак фасованной/нефасованной продукции
  productVCode: string; // Код вида продукции (maxLength value="5")
}

// Объем спирта
export interface Volume {
  volume20C: number; // Объём при 20 градусах C, дал
  volumeAnhydrous: number; // Объём безводного спирта, дал
}

// Объём маркируемой АП
export interface VolumeMarkedProductType {
  sampleFSM?: string; // Образец ФСМ
  vidAP171fz: TypeInterface; // Вид АП
  volumeSpirit: number; // Содержание этилового спирта, %
  volumeMarkedAP: number; // Объём маркируемой АП, дал
  capacity: number; // Емкость потребительской тары для маркировки, литров
  amountFSM: number; // Количество ФСМ, шт.
  volumeAnhydrousSpirit: number; // Объём безводного спирта, дал.
}

// Объём сырья, находящегося на выдержке
export interface RawMaterials {
  typeRawMaterial?: string; // Вид сырья
  volumeSpirit: number; // Спирт,% об
  volumeRestOld: number; // Остаток сырья на дату предыдущего отчёта, дал
  volumeTransferred: number; // Объём сырья, переданный на выдержку, дал
  volumeReturned: number; // Объём сырья, возвращённый с выдержки, дал
  volumeRest: number; // Остаток сырья на дату заполнения расчета потребностей, дал
}

export interface GeneralType {
  raw: Product; // Наименование сырья
  volumeAnhydrousRest: number; // Объём остатка безводного спирта, указанный в предыдущем расчёте (дал)
  volumeProducedRaw: Volume; // Объём произведённого сырья с даты заполнения предыдущего расчёта
  volumeOutRaw: Volume; // Объём отгруженного сырья с даты заполнения предыдущего расчёта
  volumeReceivedRaw: { // Объём полученного сырья с даты предыдущего отчёта
    volumeFromAgingRaw: Volume;
    volumeBuyRaw: Volume;
    volumeConversionRaw: Volume;
  };
  volumeUsedRaw: { // Объём использованного сырья с даты предыдущего отчёта
    volumeToAgingRaw: Volume;
    volumeToProducedRaw: Volume;
  };
}

export interface SpiritType extends GeneralType {
  claimImportRawType: { // Извещение или справка по импортированному сырью
    claimNumber: string;
    claimDate: Date;
    sumAdvancePayment: number;
    volumeAnhydrousImp: number;
  };
  totalRaw: number; // Итого сырья для получения ФСМ, спирта безводного, дал
}

// АП из виноматериала
export interface WineMaterialType extends GeneralType {
  // Планируемый объём к закупке или производству сырья, который на дату получения ФСМ должен быть получен или произведён
  // и зафиксирован в ЕГАИС, спирта безводного, дал
  volumeEstimatedRest?: number;
  totalRaw: number; // Итого сырья для получения ФСМ, спирта безводного, дал
}

// Объём сырья, находящегося на выдержке
export interface RawAgedType {
  exposureOneYear: RawMaterials; // Выдержка 1 год
  exposureThreeYear: RawMaterials; // Выдержка 3 года
  exposureFiveYear: RawMaterials; // Выдержка 5 лет
  exposureSevenYear: RawMaterials; // Выдержка 7 лет
}

// Объём маркируемой АП
export interface MarkedAP {
  restFSM: VolumeMarkedProductType; // Остаток ФСМ
  requestFSM: VolumeMarkedProductType; // ФСМ, запрашиваемые по заявлению (с учётом заявленных ранее и не полученных)
  totalVolumeAnhydrousSpirit: number; // Итого, объём безводного спирта для маркировки, дал
  totalVolumeMarkedAP: number; // Итого, объём маркируемой продукции, дал
}

// Производственные мощности
export interface ProductiveCapacity {
  licensedActivity: string; // Лицензируемый вид деятельности в соответствии с реестром лицензий
  powerMainTE: number; // Мощность основного технологического оборудования, дал
  volumeMaxPeriod: number; // Максимальный объём производства за период действия обязательства об использовании, дал
}

// Объём полученного сырья для винодельческой АП
export interface WineMakingAP {
  raw: Product; // Наименование сырья
  volumeGrape: number; // Объём винограда. Всего
  volumeGrapeGeographical: number; // Объём винограда. Выращенного в граница географического объекта
  volumeGrapeRegion: number; // Объём винограда. Выращенного в границах субъекта РФ, в котором расположен объект
  volumeGrapeGrowing: number; // Объём винограда. Произрастающего и переработанного в границах географического объекта
  totalRaw: number; // Итого сырья, дал
}
