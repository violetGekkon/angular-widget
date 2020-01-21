import {Injectable} from '@angular/core';
import xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() {
  }


  parseXml() {
    const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<ns:Documents Version="1.0"\n' +
      '           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
      '           xmlns:ns="http://fsrar.ru/WEGAIS/WB_DOC_SINGLE_01"\n' +
      '           xmlns:qp="http://fsrar.ru/WEGAIS/QueryParameters"\n' +
      '>\n' +
      '  <ns:Owner>\n' +
      '    <ns:FSRAR_ID>030000338925</ns:FSRAR_ID>\n' +
      '  </ns:Owner>\n' +
      '    <ns:Document>\n' +
      '    <ns:QueryClients_v2>\n' +
      '      <qp:Parameters>\n' +
      '        <qp:Parameter>\n' +
      '          <qp:Name>ИНН</qp:Name>\n' +
      '          <qp:Value>020000033154</qp:Value>\n' +
      '        </qp:Parameter>\n' +
      '      </qp:Parameters>\n' +
      '\t  </ns:QueryClients_v2>\n' +
      '\t  </ns:Document>\n' +
      '</ns:Documents>';
    let obj = {};

    xml2js.parseString(xml, {}, function(err, json) {
      if (err) {
        console.log(err);
      }
      obj = json;
      console.log(json);
    });

    const builder = new xml2js.Builder({'xmldec' : { 'version': '1.0', 'encoding': 'UTF-8' }});
    const xmlFromObj = builder.buildObject(obj);
    console.log('-------------------------------xml-----------------------------');
    console.log(xmlFromObj);

  }

  runTS() {
    const user = {
      name: 'John',
      age: 30,
      'likes birds': true  // имя свойства из нескольких слов должно быть в кавычках
    };

    console.log('is user likes birds = ' + user['likes birds']);
  }

  isEmpty(obj: Object) {

  }
}
