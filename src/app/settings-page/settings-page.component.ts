import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {Certificate, DbUtm, UTMInfo} from '../interfaces/utm.model';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  name1 = 'Основные параметры УТМ (flex-layout lib)';
  name2 = 'Основные параметры УТМ (flex in css)';
  name3 = 'flex-layout lib for container, flex in css for card';
  name4 = 'flex-layout lib for card, flex in css for container';
  name5 = 'flex-layout css for mat-card-content';
  info$;
  listitems = [];

  listitems2 = [
    {
      title: 'Версия ПО',
      description: 'version',
      icon: 'check'
    },
    {
      title: 'Тестовый контур',
      description: 'RSA сертификат test.pki.fsrar.ru соответствует контуру',
      icon: 'check'
    },
    {
      title: 'БД в актуальном состоянии',
      description: '16.10.2019 11:51:20',
      icon: 'check'
    },
    {
      title: 'Статус лицензии',
      description: 'Лицензия на вид деятельности действует',
      icon: 'check'
    },
    {
      title: 'Неотправленные чеки',
      description: 'Отсутствуют неотправленные чеки',
      icon: 'check'
    },
    {
      title: 'Период действия RSA',
      description: 'с 17.10.2019 16:50:29 по 17.10.2020 17:00:29 ',
      icon: 'check'
    },
    {
      title: 'Период действия GOST',
      description: 'с 17.10.2019 16:50:29 по 17.10.2020 17:00:29 ',
      icon: 'check'
    }
  ];
  utmInfo$: Observable<UTMInfo> = this.dataService.getFakeData();


  constructor(public dataService: DataService) {

  }

  ngOnInit() {
    this.info$ = this.utmInfo$.pipe(
      map((data) => {

        const oldVersion = false;

        this.listitems.push({
          title: 'Версия ПО',
          description: oldVersion ? `${data.version} - устаревшая версия` : data.version,
          icon: oldVersion ? 'clear' : 'check'
        });

        // RSA сертификат
        const rsaCert: Certificate = data.rsa;

        // Контур по ключу RSA
        const сontourByRSA = rsaCert.issuer === 'test.pki.fsrar.ru' ? 'test' : 'prod';

        this.listitems.push({
          title: data.contour === 'test' ? 'Тестовый контур' : 'Продуктивный контур',
          description: data.contour === сontourByRSA ?
            `RSA сертификат ${rsaCert.issuer} соответствует контуру` :
            `RSA сертификат ${rsaCert.issuer} не соответствует контуру`,
          icon: data.contour === сontourByRSA ? 'check' : 'clear'
        });

        // БД УТМ
        const dbUtm: DbUtm = data.db;
        const dbIsValid = dbUtm.ownerId === data.ownerId;

        this.listitems.push({
          title: dbIsValid ? 'БД в актуальном состоянии' : 'БД - несоответствие данных',
          description: dbIsValid ? dbUtm.createDate : `rsa БД - ${dbUtm.ownerId}\nrsa подразделения  - ${data.ownerId}`,
          icon: dbIsValid ? 'check' : 'clear'
        });

        // Информация о лицензии

        if (data.license) {
          this.listitems.push({
            title: 'Статус лицензии',
            description: data.license ? 'Лицензия на вид деятельности действует' : 'Лицензия на вид деятельности не действует',
            icon: data.license ? 'check' : 'clear'
          });
        }

        this.listitems.push({
          title: 'Неотправленные чеки',
          description: data.checkInfo !== null ? `Чеки не отправлялись с ${data.checkInfo}` : 'Отсутствуют неотправленные чеки',
          icon: data.checkInfo !== null ? 'clear' : 'check'
        });


        this.listitems.push({
          title: 'Период действия RSA',
          description: rsaCert.isValid === 'revoked' ? 'Отозван' : rsaCert.isValid === 'invalid' ? 'Недействителен' :
            rsaCert.startDate,
          icon: rsaCert.isValid === 'valid' ? 'check' : 'clear'
        });

        // ГОСТ сертификат

        const gostCert: Certificate = data.gost;

        const gostTime = `с ${gostCert.startDate} по ${gostCert.expireDate} \n`;


        this.listitems.push({
          title: 'Период действия ГОСТ',
          description: gostCert.isValid === 'invalid' ? 'Недействителен' : gostTime,
          icon: gostCert.isValid === 'valid' ? 'check' : 'clear'
        });

        return this.listitems;

      }));
  }


}
