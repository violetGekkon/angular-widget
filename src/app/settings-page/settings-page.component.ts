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

  name = 'Основные параметры УТМ';
  info$;
  listitems = [];
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
