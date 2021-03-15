(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{piEK:function(e,t,a){"use strict";a.r(t),a.d(t,"BarcodeIssuanceModule",function(){return ae});var o=a("tyNb"),r=a("B/XX"),n=a("3Pt+"),c=a("fXoL");let i=(()=>{class e{constructor(){}validateAllFormFields(e){Object.keys(e.controls).forEach(t=>{const a=e.get(t);a instanceof n.f?a.markAsTouched({onlySelf:!0}):a instanceof n.h&&this.validateAllFormFields(a)})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=a("wd/R"),u=a.n(l);class s{static getInstance(){const e=u.a||l;return e.prototype.toJSON=function(){return this.format("YYYY-MM-DD")},e}}const d=s.getInstance();let m=(()=>{class e{constructor(e,t){this.fb=e,this.validatorsService=t,this.form=this.fb.group({claimNumber:this.fb.control(null,[n.u.required]),claimDate:this.fb.control(d(),[n.u.required]),codes:this.fb.array([]),declarerDetails:this.fb.group({clientRegId:["030000338925"],fullName:['\u0410\u041e "\u0426\u0435\u043d\u0442\u0440\u0418\u043d\u0444\u043e\u0440\u043c"'],inn:["7841051711"],kpp:["784105001"],address_ur:this.fb.group({description:["\u0443\u043b. \u041e\u0431\u0440\u0430\u0437\u0446\u043e\u0432\u0430, \u0434. 38"],country:["643"],regionCode:["77"]}),address:this.fb.group({description:["\u0443\u043b. \u041e\u0431\u0440\u0430\u0437\u0446\u043e\u0432\u0430, \u0434. 38"],country:["643"],regionCode:["77"]})}),calculationDemand:this.fb.group({spirit:this.createSpirit(),wineMaterial:this.createWine(),rawAged:this.fb.group({exposureOneYear:this.createRawMaterial(),exposureThreeYear:this.createRawMaterial(),exposureFiveYear:this.createRawMaterial(),exposureSevenYear:this.createRawMaterial()}),markedAP:this.fb.group({restFSM:this.createVolumeMarkedProduct(),requestFSM:this.createVolumeMarkedProduct(),totalVolumeAnhydrousSpirit:["48.708",n.u.required],totalVolumeMarkedAP:["91.12",n.u.required]}),productiveCapacity:this.fb.group({licensedActivity:["111",n.u.required],powerMainTE:["500.235",n.u.required],volumeMaxPeriod:["500.235",n.u.required]}),wineMakingAP:this.fb.group({raw:this.createProduct("wine"),volumeGrape:["1.0",n.u.required],volumeGrapeGeographical:["1.0",n.u.required],volumeGrapeRegion:["1.0",n.u.required],volumeGrapeGrowing:["1.0",n.u.required],totalRaw:["1.0",n.u.required]})})},{})}get codes(){return this.form.get("codes")}get isValid(){return!!this.form.valid||(this.validatorsService.validateAllFormFields(this.form),!1)}addBarcode(){const e=this.barcodeFormGroup();return e.setParent(this.codes),this.codes.controls.unshift(e),this.form.markAsDirty(),e}deleteBarcode(e){this.codes.removeAt(e),this.form.markAsDirty()}clearBarcode(e){this.codes.at(e).reset(),this.form.markAsDirty()}barcodeFormGroup(){return this.fb.group({sampleFSM:["\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u043b\u0438\u043a\u0435\u0440\u043d\u044b\u0435 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0414\u043e 1 \u043b"],alcPercent:[null,n.u.required],quantityDal:[null,n.u.required],capacity:[null,n.u.required],quantity:[null,n.u.required],vidAP171fz:[null,n.u.required],markType:[null,n.u.required]})}createSpirit(){return this.fb.group({raw:this.createProduct("spirit"),volumeProducedRaw:this.createVolume(),volumeAnhydrousRest:["12.000",n.u.required],volumeOutRaw:this.createVolume(),volumeReceivedRaw:this.fb.group({volumeFromAgingRaw:this.createVolume(),volumeBuyRaw:this.createVolume(),volumeConversionRaw:this.createVolume()}),volumeUsedRaw:this.fb.group({volumeToAgingRaw:this.createVolume(),volumeToProducedRaw:this.createVolume()}),claimImportRawType:this.fb.group({claimNumber:["234567",n.u.required],claimDate:["2020-01-10",n.u.required],sumAdvancePayment:["569.568",n.u.required],volumeAnhydrousImp:["56.587",n.u.required]}),totalRaw:["0.1",n.u.required]})}createWine(){return this.fb.group({raw:this.createProduct("wine"),volumeProducedRaw:this.createVolume(),volumeAnhydrousRest:["0.13",n.u.required],volumeOutRaw:this.createVolume(),volumeReceivedRaw:this.fb.group({volumeFromAgingRaw:this.createVolume(),volumeBuyRaw:this.createVolume(),volumeConversionRaw:this.createVolume()}),volumeUsedRaw:this.fb.group({volumeToAgingRaw:this.createVolume(),volumeToProducedRaw:this.createVolume()}),volumeEstimatedRest:["0.0"],totalRaw:["0.13",n.u.required]})}createProduct(e){return this.fb.group({alcCode:["spirit"===e?"0016970000001187666":"038265000001576625",n.u.required],fullName:["spirit"===e?'\u0421\u043f\u0438\u0440\u0442 \u044d\u0442\u0438\u043b\u043e\u0432\u044b\u0439 \u0440\u0435\u043a\u0442\u0438\u0444\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0438\u0437 \u043f\u0438\u0449\u0435\u0432\u043e\u0433\u043e \u0441\u044b\u0440\u044c\u044f "\u041b\u044e\u043a\u0441"':'\u0412\u0438\u043d\u043e\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0439 \u0441\u0442\u043e\u043b\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u0443\u0441\u043b\u0430\u0434\u043a\u0438\u0439 \u0440\u043e\u0437\u043e\u0432\u044b\u0439 "\u0421\u0442\u043e\u043b\u043e\u0432\u043e\u0435 \u0440\u043e\u0437\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0443\u0441\u043b\u0430\u0434\u043a\u043e\u0435"',n.u.required],alcVolume:["spirit"===e?"96.31":"11.00"],unitType:["Unpacked"],productVCode:["spirit"===e?"140":"321"]})}createVolume(){return this.fb.group({volume20C:["0.1",n.u.required],volumeAnhydrous:["0.1",n.u.required]})}createRawMaterial(){return this.fb.group({typeRawMaterial:"1111",volumeSpirit:["85.2368",n.u.required],volumeRestOld:["200.21",n.u.required],volumeTransferred:["50.258",n.u.required],volumeReturned:["120.368",n.u.required],volumeRest:["130.1",n.u.required]})}createVolumeMarkedProduct(){return this.fb.group({sampleFSM:"sampleFsm[0].name",vidAP171fz:["\u043b\u0438\u043a\u0435\u0440\u043d\u043e\u0435 \u0432\u0438\u043d\u043e",n.u.required],volumeSpirit:["23.568",n.u.required],volumeMarkedAP:["60.56",n.u.required],capacity:["0.235",n.u.required],amountFSM:["50",n.u.required],volumeAnhydrousSpirit:["24.354",n.u.required]})}}return e.\u0275fac=function(t){return new(t||e)(c.Yb(n.e),c.Yb(i))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=a("XiUz"),b=a("xHqg"),f=a("kmnG"),g=a("qFsG"),h=a("FKr1"),v=a("iadO");const w=s.getInstance(),C={parse:{dateInput:"DD.MM.YYYY"},display:{dateInput:"DD.MM.YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"MMM",monthYearA11yLabel:"YYYY"}};let y=(()=>{class e{constructor(){this._date=w(),this._isDisabled=!1}get date(){return this._date}set date(e){this._date=e,console.log("date stringify = "+JSON.stringify(this.date)),this.onChange(this._date)}onChange(e){}writeValue(e){console.log("writeValue begin = "+JSON.stringify(this.date)),e&&(console.log("date form = "+e),this.date=e),console.log("writeValue end = "+JSON.stringify(this.date))}change(e){this.date=e.value}registerOnChange(e){this.onChange=e}setDisabledState(e){this._isDisabled=e}registerOnTouched(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ib({type:e,selectors:[["app-date-picker"]],inputs:{ph:"ph",date:"date"},features:[c.Bb([{provide:h.c,useValue:C},{provide:n.n,useExisting:Object(c.V)(()=>e),multi:!0}])],decls:5,vars:6,consts:[["matInput","",3,"matDatepicker","placeholder","value","disabled","dateChange"],["matSuffix","",3,"for"],[3,"startAt"],["dp",""]],template:function(e,t){if(1&e&&(c.Ub(0,"mat-form-field"),c.Ub(1,"input",0),c.cc("dateChange",function(e){return t.change(e)}),c.Tb(),c.Pb(2,"mat-datepicker-toggle",1),c.Pb(3,"mat-datepicker",2,3),c.Tb()),2&e){const e=c.rc(4);c.Cb(1),c.lc("matDatepicker",e)("placeholder",t.ph)("value",t.date)("disabled",t._isDisabled),c.Cb(1),c.lc("for",e),c.Cb(1),c.lc("startAt",t.date)}},directives:[f.b,g.b,v.b,v.d,f.h,v.a],styles:[""]}),e})(),T=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ib({type:e,selectors:[["app-declarer-details"]],inputs:{group:"group"},decls:13,vars:3,consts:[["fxLayout","column",3,"formGroup"],["fxLayout","row","fxLayout.lt-md","column","fxLayoutGap","24px","add_circle_outline","","fxLayoutGap.lt-md","0px"],[1,"ci-full-width"],["matInput","","placeholder","\u0417\u0430\u044f\u0432\u0438\u0442\u0435\u043b\u044c","formControlName","fullName"],["matInput","","placeholder","\u0418\u041d\u041d","formControlName","inn"],["matInput","","placeholder","\u041a\u041f\u041f","formControlName","kpp"],["fxLayout","row","fxLayout.lt-md","column","fxLayoutGap","24px","fxLayoutGap.lt-md","0px"],[1,"ci-full-width",3,"formGroup"],["matInput","","placeholder","\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441","formControlName","description"],["matInput","","placeholder","\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441","formControlName","description"]],template:function(e,t){1&e&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"mat-form-field",2),c.Pb(3,"input",3),c.Tb(),c.Ub(4,"mat-form-field",2),c.Pb(5,"input",4),c.Tb(),c.Ub(6,"mat-form-field",2),c.Pb(7,"input",5),c.Tb(),c.Tb(),c.Ub(8,"div",6),c.Ub(9,"mat-form-field",7),c.Pb(10,"input",8),c.Tb(),c.Ub(11,"mat-form-field",7),c.Pb(12,"input",9),c.Tb(),c.Tb(),c.Tb()),2&e&&(c.lc("formGroup",t.group),c.Cb(9),c.lc("formGroup",t.group.get("address_ur")),c.Cb(2),c.lc("formGroup",t.group.get("address")))},directives:[p.c,n.q,n.i,p.d,f.b,g.b,n.c,n.p,n.g],styles:[""]}),e})();var x=a("NFeN"),U=a("7EHt"),B=a("ofXK"),P=a("Wp6s"),k=a("XNiG");const A=[{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u043b\u0438\u043a\u0435\u0440\u043d\u044b\u0435 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0414\u043e 1 \u043b"},{name:"\u0424\u0421\u041c. \u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f \u0441\u0432\u044b\u0448\u0435 9 \u0434\u043e 25%"},{name:"\u0424\u0421\u041c. \u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f \u0441\u0432\u044b\u0448\u0435 25%. \u0414\u043e 0.1 \u043b"},{name:"\u0424\u0421\u041c. \u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f \u0441\u0432\u044b\u0448\u0435 25%. \u0414\u043e 0.25 \u043b"},{name:"\u0424\u0421\u041c. \u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f \u0441\u0432\u044b\u0448\u0435 25%. \u0414\u043e 0.5 \u043b"},{name:"\u0424\u0421\u041c. \u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f \u0441\u0432\u044b\u0448\u0435 25%. \u0414\u043e 0.75 \u043b"},{name:"\u0424\u0421\u041c. \u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f \u0441\u0432\u044b\u0448\u0435 25%. \u0414\u043e 1 \u043b"},{name:"\u0424\u0421\u041c. \u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f \u0441\u0432\u044b\u0448\u0435 25%. \u0421\u0432\u044b\u0448\u0435 1 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0448\u0430\u043c\u043f\u0430\u043d\u0441\u043a\u0438\u0435 \u0438 \u0438\u0433\u0440\u0438\u0441\u0442\u044b\u0435"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0435"},{name:"\u0424\u0421\u041c. \u0421\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0434\u043e 9 %"},{name:"\u0424\u0421\u041c. \u0421\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0441\u0432\u044b\u0448\u0435 9 \u0434\u043e 25 %"},{name:"\u0424\u0421\u041c. \u041a\u0440\u0435\u043f\u043a\u0438\u0435 \u0441\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0434\u043e 0,5 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u0440\u0435\u043f\u043a\u0438\u0435 \u0441\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0434\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u0440\u0435\u043f\u043a\u0438\u0435 \u0441\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0434\u043e 1 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u0440\u0435\u043f\u043a\u0438\u0435 \u0441\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0441\u0432\u044b\u0448\u0435 1 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u043e\u0434\u043a\u0430 \u0434\u043e 0,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u043e\u0434\u043a\u0430 \u0434\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u043e\u0434\u043a\u0430 \u0434\u043e 1 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u043e\u0434\u043a\u0430 \u0441\u0432\u044b\u0448\u0435 1 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0438\u0433\u0440\u0438\u0441\u0442\u044b\u0435(\u0448\u0430\u043c\u043f\u0430\u043d\u0441\u043a\u0438\u0435) \u0434\u043e 0,375 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0438\u0433\u0440\u0438\u0441\u0442\u044b\u0435(\u0448\u0430\u043c\u043f\u0430\u043d\u0441\u043a\u0438\u0435) \u0434\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0438\u0433\u0440\u0438\u0441\u0442\u044b\u0435(\u0448\u0430\u043c\u043f\u0430\u043d\u0441\u043a\u0438\u0435) \u0434\u043e 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0438\u0433\u0440\u0438\u0441\u0442\u044b\u0435(\u0448\u0430\u043c\u043f\u0430\u043d\u0441\u043a\u0438\u0435) \u0441\u0432\u044b\u0448\u0435 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0435 \u0434\u043e 0,375 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0435 \u0434\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0435 \u0434\u043e 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0435 \u0441\u0432\u044b\u0448\u0435 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u043b\u0438\u043a\u0435\u0440\u043d\u044b\u0435 \u0434\u043e 0,375 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u043b\u0438\u043a\u0435\u0440\u043d\u044b\u0435 \u0434\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u043b\u0438\u043a\u0435\u0440\u043d\u044b\u0435 \u0434\u043e 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u043b\u0438\u043a\u0435\u0440\u043d\u044b\u0435 \u0441\u0432\u044b\u0448\u0435 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0444\u0440\u0443\u043a\u0442\u043e\u0432\u044b\u0435 \u0434\u043e 0,375 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0444\u0440\u0443\u043a\u0442\u043e\u0432\u044b\u0435 \u0434\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0444\u0440\u0443\u043a\u0442\u043e\u0432\u044b\u0435 \u0434\u043e 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0444\u0440\u0443\u043a\u0442\u043e\u0432\u044b\u0435 \u0441\u0432\u044b\u0448\u0435 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0434\u043e 0,375 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0434\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0434\u043e 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0441\u0432\u044b\u0448\u0435 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u0440\u0435\u043f\u043a\u0438\u0435 \u0441\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0434\u043e 0,1 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u0440\u0435\u043f\u043a\u0438\u0435 \u0441\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 0,25 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u043e\u0434\u043a\u0430 \u0434\u043e 0,1 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u043e\u0434\u043a\u0430 0,25 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u043e\u0434\u043a\u0430 0,375 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u043e\u0434\u043a\u0430 0,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u0431\u0435\u0437 \u044d\u0442\u0438\u043b\u043e\u0432\u043e\u0433\u043e \u0441\u043f\u0438\u0440\u0442\u0430) \u0434\u043e 0,375 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u0431\u0435\u0437 \u044d\u0442\u0438\u043b\u043e\u0432\u043e\u0433\u043e \u0441\u043f\u0438\u0440\u0442\u0430) \u0434\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u0431\u0435\u0437 \u044d\u0442\u0438\u043b\u043e\u0432\u043e\u0433\u043e \u0441\u043f\u0438\u0440\u0442\u0430) \u0434\u043e 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u0431\u0435\u0437 \u044d\u0442\u0438\u043b\u043e\u0432\u043e\u0433\u043e \u0441\u043f\u0438\u0440\u0442\u0430) \u0441\u0432\u044b\u0448\u0435 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u0441 \u044d\u0442\u0438\u043b\u043e\u0432\u044b\u043c \u0441\u043f\u0438\u0440\u0442\u043e\u043c) \u0434\u043e 0,375 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u0441 \u044d\u0442\u0438\u043b\u043e\u0432\u044b\u043c \u0441\u043f\u0438\u0440\u0442\u043e\u043c) \u0434\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u0441 \u044d\u0442\u0438\u043b\u043e\u0432\u044b\u043c \u0441\u043f\u0438\u0440\u0442\u043e\u043c) \u0434\u043e 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u0441 \u044d\u0442\u0438\u043b\u043e\u0432\u044b\u043c \u0441\u043f\u0438\u0440\u0442\u043e\u043c) \u0441\u0432\u044b\u0448\u0435 1,5 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a. \u0414\u043e 0,1 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a. 0,25 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a. \u0414\u043e 0,5 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a. \u0414\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a. \u0414\u043e 1 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a. \u0421\u0432\u044b\u0448\u0435 1 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a (\u043e\u0441\u043e\u0431\u044b\u0439). \u0414\u043e 0,1 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a (\u043e\u0441\u043e\u0431\u044b\u0439). 0,25 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a (\u043e\u0441\u043e\u0431\u044b\u0439). \u0414\u043e 0,5 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a (\u043e\u0441\u043e\u0431\u044b\u0439). \u0414\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a (\u043e\u0441\u043e\u0431\u044b\u0439). \u0414\u043e 1 \u043b"},{name:"\u0424\u0421\u041c. \u041a\u043e\u043d\u044c\u044f\u043a (\u043e\u0441\u043e\u0431\u044b\u0439). \u0421\u0432\u044b\u0448\u0435 1 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0435 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0414\u043e 1 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0435 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0421\u0432\u044b\u0448\u0435 1 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u043b\u0438\u043a\u0435\u0440\u043d\u044b\u0435 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0421\u0432\u044b\u0448\u0435 1 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0438\u0433\u0440\u0438\u0441\u0442\u044b\u0435 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0414\u043e 0,375 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0438\u0433\u0440\u0438\u0441\u0442\u044b\u0435 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0414\u043e 1 \u043b"},{name:"\u0424\u0421\u041c. \u0412\u0438\u043d\u0430 \u0438\u0433\u0440\u0438\u0441\u0442\u044b\u0435 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0421\u0432\u044b\u0448\u0435 1 \u043b"},{name:"\u0424\u0421\u041c. \u0421\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0414\u043e 0,1 \u043b"},{name:"\u0424\u0421\u041c. \u0421\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u043e\u0441\u043e\u0431\u044b\u0435). 0,25 \u043b"},{name:"\u0424\u0421\u041c. \u0421\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0414\u043e 0,5 \u043b"},{name:"\u0424\u0421\u041c. \u0421\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0414\u043e 0,75 \u043b"},{name:"\u0424\u0421\u041c. \u0421\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0414\u043e 1 \u043b"},{name:"\u0424\u0421\u041c. \u0421\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438 (\u043e\u0441\u043e\u0431\u044b\u0435). \u0421\u0432\u044b\u0448\u0435 1 \u043b"}],M=[{name:"\u0421\u043f\u0438\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438"},{name:"\u041a\u043e\u043d\u044c\u044f\u0447\u043d\u044b\u0439 \u0434\u0438\u0441\u0442\u0438\u043b\u043b\u044f\u0442"},{name:"\u041a\u0430\u043b\u044c\u0432\u0430\u0434\u043e\u0441\u043d\u044b\u0439 \u0434\u0438\u0441\u0442\u0438\u043b\u043b\u044f\u0442"},{name:"\u0412\u0438\u043d\u043d\u044b\u0439 \u0434\u0438\u0441\u0442\u0438\u043b\u043b\u044f\u0442"},{name:"\u0412\u0438\u043d\u043e\u0433\u0440\u0430\u0434\u043d\u044b\u0439 \u0434\u0438\u0441\u0442\u0438\u043b\u043b\u044f\u0442"},{name:"\u041f\u043b\u043e\u0434\u043e\u0432\u044b\u0439 \u0434\u0438\u0441\u0442\u0438\u043b\u043b\u044f\u0442"},{name:"\u0412\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0434\u0438\u0441\u0442\u0438\u043b\u043b\u044f\u0442"},{name:"\u0412\u043e\u0434\u043a\u0430"}];var I=a("d3UM");function q(e,t){if(1&e&&(c.Ub(0,"mat-option",15),c.Bc(1),c.Tb()),2&e){const e=t.$implicit;c.lc("value",e.name),c.Cb(1),c.Dc(" ",e.name," ")}}function S(e,t){if(1&e&&(c.Ub(0,"mat-option",15),c.Bc(1),c.Tb()),2&e){const e=t.$implicit;c.lc("value",e.name),c.Cb(1),c.Dc(" ",e.name," ")}}let F=(()=>{class e{constructor(){this.vidAP=M,this.types704=A,this.search_704Control=new n.f,this.onDestroy$=new k.a}ngOnInit(){this.group.controls.vidAP171fz.setValue(M[0])}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ib({type:e,selectors:[["app-barcode-item"]],inputs:{group:"group"},decls:23,vars:4,consts:[["fxLayout","column",3,"formGroup"],["fxLayout.gt-md","row","fxLayout.lt-lg","row wrap","fxLayout.lt-md","column","fxLayoutGap","12px","fxLayoutGap.lt-md","0px"],["floatLabel","always",1,"ci-full-width"],["placeholder","\u0422\u0438\u043f \u043c\u0430\u0440\u043a\u0438","formControlName","sampleFSM"],[3,"value",4,"ngFor","ngForOf"],["fxFlex.gt-md","20%","fxFlex.lt-lg","100%","floatLabel","always",1,"ci-full-width"],["matInput","","minlength","3","maxlength","3","placeholder","\u041a\u043e\u0434 \u043e\u0431\u0440\u0430\u0437\u0446\u0430","formControlName","markType","required",""],["code",""],["align","end"],["fxLayout.gt-md","row","fxLayout.lt-md","column","fxLayoutGap","12px","fxLayoutGap.lt-md","0px"],["matInput","","placeholder","\u0415\u043c\u043a\u043e\u0441\u0442\u044c, \u043f\u043e\u0434\u043b\u0435\u0436\u0430\u0449\u0430\u044f \u043c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0439 \u0442\u0430\u0440\u044b \u0410\u041f (\u043b)","formControlName","capacity","required",""],["matInput","","placeholder","\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0430\u0440\u043e\u043a","formControlName","quantity","required",""],["placeholder","\u0412\u0438\u0434 \u0410\u041f"],["matInput","","placeholder","\u041e\u0431\u044a\u0435\u043c \u043c\u0430\u0440\u043a\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u0410\u041f (\u0434\u0430\u043b)","formControlName","quantityDal","required",""],["matInput","","placeholder","\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u044d\u0442\u0438\u043b\u043e\u0432\u043e\u0433\u043e \u0441\u043f\u0438\u0440\u0442\u0430(%)","formControlName","alcPercent","required",""],[3,"value"]],template:function(e,t){if(1&e&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"mat-form-field",2),c.Ub(3,"mat-select",3),c.Ac(4,q,2,2,"mat-option",4),c.Tb(),c.Tb(),c.Ub(5,"mat-form-field",5),c.Pb(6,"input",6,7),c.Ub(8,"mat-hint",8),c.Bc(9),c.Tb(),c.Tb(),c.Tb(),c.Ub(10,"div",9),c.Ub(11,"mat-form-field",2),c.Pb(12,"input",10),c.Tb(),c.Ub(13,"mat-form-field",2),c.Pb(14,"input",11),c.Tb(),c.Tb(),c.Ub(15,"div",1),c.Ub(16,"mat-form-field",2),c.Ub(17,"mat-select",12),c.Ac(18,S,2,2,"mat-option",4),c.Tb(),c.Tb(),c.Ub(19,"mat-form-field",2),c.Pb(20,"input",13),c.Tb(),c.Ub(21,"mat-form-field",2),c.Pb(22,"input",14),c.Tb(),c.Tb(),c.Tb()),2&e){const e=c.rc(7);c.lc("formGroup",t.group),c.Cb(4),c.lc("ngForOf",t.types704),c.Cb(5),c.Dc("",(null==e.value?null:e.value.length)||0,"/3"),c.Cb(9),c.lc("ngForOf",t.vidAP)}},directives:[p.c,n.q,n.i,p.d,f.b,I.a,n.p,n.g,B.k,p.a,g.b,n.c,n.l,n.k,n.t,f.e,h.k],styles:[""]}),e})();var O=a("bTqV");function R(e,t){if(1&e){const e=c.Vb();c.Ub(0,"button",15),c.cc("click",function(){return c.tc(e),c.gc(3).prevStep()}),c.Bc(1,"\u041a \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 "),c.Tb()}}function D(e,t){if(1&e){const e=c.Vb();c.Ub(0,"button",15),c.cc("click",function(){return c.tc(e),c.gc(3).nextStep()}),c.Bc(1,"\u041a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 "),c.Tb()}}function V(e,t){if(1&e&&(c.Ub(0,"mat-action-row"),c.Ac(1,R,2,0,"button",14),c.Ac(2,D,2,0,"button",14),c.Tb()),2&e){const e=c.gc().index,t=c.gc();c.Cb(1),c.lc("ngIf",0!==e),c.Cb(1),c.lc("ngIf",e!==t.barcodes.length-1)}}function L(e,t){if(1&e){const e=c.Vb();c.Ub(0,"mat-expansion-panel",8),c.cc("opened",function(){c.tc(e);const a=t.index;return c.gc().setStep(a)}),c.Ub(1,"mat-expansion-panel-header"),c.Ub(2,"mat-panel-title"),c.Bc(3),c.Tb(),c.Ub(4,"mat-panel-description"),c.Bc(5),c.Tb(),c.Tb(),c.Ub(6,"mat-card",9),c.cc("click",function(){c.tc(e);const a=t.index;return c.gc().selectedBarcode.emit(a)}),c.Ub(7,"mat-card-content"),c.Pb(8,"app-barcode-item",10),c.Tb(),c.Ub(9,"mat-card-actions",11),c.Ub(10,"button",12),c.cc("click",function(a){c.tc(e);const o=t.index;return c.gc().clearBarcode.emit(o),a.stopPropagation()}),c.Bc(11,"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"),c.Tb(),c.Ub(12,"button",12),c.cc("click",function(a){c.tc(e);const o=t.index;return c.gc().deleteBarcode.emit(o),a.stopPropagation()}),c.Bc(13,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),c.Tb(),c.Tb(),c.Tb(),c.Ac(14,V,3,2,"mat-action-row",13),c.Tb()}if(2&e){const e=t.$implicit,a=t.index,o=c.gc();c.lc("expanded",o.step===a),c.Cb(3),c.Dc(" \u041f\u043e\u0437\u0438\u0446\u0438\u044f ",o.barcodes.length-a," "),c.Cb(2),c.Dc(" ",o.barcodes.controls[a].get("sampleFSM").value," "),c.Cb(3),c.lc("group",e),c.Cb(6),c.lc("ngIf",o.barcodes.length>1)}}let G=(()=>{class e{constructor(){this.step=0,this.addBarcode=new c.o,this.deleteBarcode=new c.o,this.clearBarcode=new c.o,this.selectedBarcode=new c.o}get barcodes(){return this.group.get("codes")}ngOnInit(){}setStep(e){this.step=e}nextStep(){this.step++}prevStep(){this.step--}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ib({type:e,selectors:[["app-barcodes-list"]],inputs:{group:"group"},outputs:{addBarcode:"addBarcode",deleteBarcode:"deleteBarcode",clearBarcode:"clearBarcode",selectedBarcode:"selectedBarcode"},decls:11,vars:2,consts:[[3,"formGroup"],[1,"ci-barcode-list"],["fxLayout","row","fxLayoutAlign","start center",1,"ci-barcode-list-control"],["fxFlex","auto","lass","ci-barcode-list-title"],["title","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0437\u0438\u0446\u0438\u044e",1,"ci-barcode-list-control--add",3,"click"],[1,"ci-barcode-list-control-icon"],["formArrayName","codes",1,"ci-barcode-list-content"],["class","mat-elevation-z0 ci-barcode-list-item",3,"expanded","opened",4,"ngFor","ngForOf"],[1,"mat-elevation-z0","ci-barcode-list-item",3,"expanded","opened"],[1,"mat-elevation-z0","ci-barcode-item-card",3,"click"],[3,"group"],["align","end"],["mat-button","",3,"click"],[4,"ngIf"],["mat-button","","color","primary",3,"click",4,"ngIf"],["mat-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"div",2),c.Ub(3,"div",3),c.Ub(4,"p"),c.Bc(5,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043e \u043c\u0430\u0440\u043a\u0430\u0445"),c.Tb(),c.Tb(),c.Ub(6,"div",4),c.cc("click",function(){return t.addBarcode.emit(),t.step=0}),c.Ub(7,"mat-icon",5),c.Bc(8,"add"),c.Tb(),c.Tb(),c.Tb(),c.Ub(9,"mat-accordion",6),c.Ac(10,L,15,5,"mat-expansion-panel",7),c.Tb(),c.Tb(),c.Tb()),2&e&&(c.lc("formGroup",t.group),c.Cb(10),c.lc("ngForOf",t.barcodes.controls))},directives:[n.q,n.i,p.c,p.b,p.a,x.a,U.a,n.d,B.k,U.c,U.f,U.g,U.e,P.a,P.d,F,P.b,O.a,B.l,U.d],styles:[".ci-barcode-list[_ngcontent-%COMP%]   .ci-barcode-list-control[_ngcontent-%COMP%]   .ci-barcode-list-control--add[_ngcontent-%COMP%]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ci-barcode-list[_ngcontent-%COMP%]   .ci-barcode-list-control[_ngcontent-%COMP%]   .ci-barcode-list-control--add[_ngcontent-%COMP%]:hover{cursor:pointer}.ci-barcode-list[_ngcontent-%COMP%]   .ci-barcode-list-control[_ngcontent-%COMP%]   .ci-barcode-list-control--add[_ngcontent-%COMP%]:hover   .ci-barcode-list-control-icon[_ngcontent-%COMP%]{color:#0b5ca6;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ci-barcode-list[_ngcontent-%COMP%]   .ci-barcode-list-control[_ngcontent-%COMP%]   .ci-barcode-list-control-icon[_ngcontent-%COMP%]{-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1);color:#b6b6b6}.ci-barcode-item-card[_ngcontent-%COMP%]{margin-bottom:24px}.mat-card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:auto}.mat-card-actions[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]{margin:0!important;padding:0!important}"]}),e})();const _=["stepper"];function N(e,t){1&e&&c.Bc(0,"\u0417\u0430\u044f\u0432\u0438\u0442\u0435\u043b\u044c")}function Y(e,t){if(1&e&&c.Bc(0),2&e){const e=c.gc(2).$implicit;c.Cc(e.label)}}function z(e,t){1&e&&(c.Ub(0,"div"),c.Bc(1,"spirit"),c.Tb())}function $(e,t){1&e&&(c.Ub(0,"div"),c.Bc(1,"wineMaterial"),c.Tb())}function E(e,t){1&e&&(c.Ub(0,"div"),c.Bc(1,"wineMaterial"),c.Tb())}function J(e,t){1&e&&(c.Ub(0,"div"),c.Bc(1,"wineMaterial"),c.Tb())}function j(e,t){1&e&&(c.Ub(0,"div"),c.Bc(1,"wineMaterial"),c.Tb())}function X(e,t){1&e&&(c.Ub(0,"div"),c.Bc(1,"wineMaterial"),c.Tb())}function K(e,t){if(1&e&&(c.Ub(0,"mat-step"),c.Ac(1,Y,1,1,"ng-template",5),c.Ub(2,"div",16),c.Ac(3,z,2,0,"div",17),c.Ac(4,$,2,0,"div",17),c.Ac(5,E,2,0,"div",17),c.Ac(6,J,2,0,"div",17),c.Ac(7,j,2,0,"div",17),c.Ac(8,X,2,0,"div",17),c.Tb(),c.Tb()),2&e){const e=c.gc().$implicit;c.Cb(2),c.lc("ngSwitch",e.id),c.Cb(1),c.lc("ngSwitchCase","spirit"),c.Cb(1),c.lc("ngSwitchCase","wineMaterial"),c.Cb(1),c.lc("ngSwitchCase","rawAged"),c.Cb(1),c.lc("ngSwitchCase","markedAP"),c.Cb(1),c.lc("ngSwitchCase","productiveCapacity"),c.Cb(1),c.lc("ngSwitchCase","wineMakingAP")}}function W(e,t){if(1&e&&(c.Sb(0),c.Ac(1,K,9,7,"mat-step",15),c.Rb()),2&e){const e=t.$implicit;c.Cb(1),c.lc("ngIf",e.checked)}}function H(e,t){1&e&&c.Bc(0,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430")}function Q(e,t){if(1&e){const e=c.Vb();c.Ub(0,"button",18),c.cc("click",function(){c.tc(e);const t=c.gc(),a=c.rc(3);return t.goBack(a)}),c.Bc(1,"\u041d\u0430\u0437\u0430\u0434 "),c.Tb()}}function Z(e,t){if(1&e){const e=c.Vb();c.Ub(0,"button",18),c.cc("click",function(){return c.tc(e),c.gc(),c.rc(3).next()}),c.Bc(1,"\u0414\u0430\u043b\u044c\u0448\u0435 "),c.Tb()}}let ee=(()=>{class e{constructor(e){this.codeIssuanceService=e,this.steps=[],this.calcList=[{label:"\u0410\u041f \u0438\u0437 \u0441\u043f\u0438\u0440\u0442\u0430",checked:!1,id:"spirit"},{label:"\u0410\u041f \u0438\u0437 \u0432\u0438\u043d\u043e\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430",checked:!1,id:"wineMaterial"},{label:"\u0421\u044b\u0440\u044c\u0451 \u043d\u0430 \u0432\u044b\u0434\u0435\u0440\u0436\u043a\u0435",checked:!1,id:"rawAged"},{label:"\u041c\u0430\u0440\u043a\u0438\u0440\u0443\u0435\u043c\u0430\u044f \u0410\u041f",checked:!1,id:"markedAP"},{label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u0438",checked:!1,id:"productiveCapacity"},{label:"\u0412\u0438\u043d\u043e\u0434\u0435\u043b\u044c\u0447\u0435\u0441\u043a\u0430\u044f \u0410\u041f",checked:!1,id:"wineMakingAP"}]}get codeIssuanceForm(){return this.codeIssuanceService.form}get calculationDemand(){return this.codeIssuanceForm.get("calculationDemand")}ngOnInit(){console.log("BarcodeIssuanceComponent ngOnInit"),console.log("claimDate"),console.log(this.codeIssuanceForm.get("claimDate")),this.onBarcodeAdd()}ngAfterViewInit(){this.totalStepsCount=this.matStepper._steps.length}stepChanged(e){}goBack(e){e.previous()}goForward(e){e.next()}setTotalStepsCount(e){this.totalStepsCount=e.checked?++this.totalStepsCount:--this.totalStepsCount}onBarcodeAdd(){this.matStepper&&!0===this.matStepper.selected.interacted&&this.stepChanged(this.matStepper),this.codeIssuanceService.addBarcode()}onBarcodeDelete(e){this.codeIssuanceService.deleteBarcode(e)}onBarcodeClear(e){this.codeIssuanceService.clearBarcode(e)}sendIssue(){const e=this.codeIssuanceForm.getRawValue(),t=JSON.stringify(e);console.log("form serializedObj"),console.log(t)}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(m))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-settings-page"]],viewQuery:function(e,t){if(1&e&&c.Fc(_,1),2&e){let e;c.qc(e=c.dc())&&(t.matStepper=e.first)}},features:[c.Bb([{provide:r.h,useValue:{showError:!0}}])],decls:23,vars:14,consts:[["fxLayout","row","fxLayoutAlign","start start"],[3,"formGroup","ngSubmit"],["linear","","labelPosition","bottom",3,"selectionChange"],["stepper",""],[3,"stepControl"],["matStepLabel",""],["fxLayout.gt-md","row","fxLayout.lt-md","column","fxLayoutGap","12px","fxLayoutGap.lt-md","0px",3,"formGroup"],["floatLabel","always",1,"ci-full-width"],["matInput","","placeholder","\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f","formControlName","claimNumber"],["ph","\u0414\u0430\u0442\u0430 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f","formControlName","claimDate"],[3,"group"],[3,"group","addBarcode","deleteBarcode","clearBarcode"],[4,"ngFor","ngForOf"],["mat-button","","type","submit"],["mat-button","","type","button",3,"click",4,"ngIf"],[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["mat-button","","type","button",3,"click"]],template:function(e,t){if(1&e){const e=c.Vb();c.Ub(0,"div",0),c.Ub(1,"form",1),c.cc("ngSubmit",function(){return t.sendIssue()}),c.Ub(2,"mat-horizontal-stepper",2,3),c.cc("selectionChange",function(){c.tc(e);const a=c.rc(3);return t.stepChanged(a)}),c.Ub(4,"mat-step",4),c.Ac(5,N,1,0,"ng-template",5),c.Ub(6,"div",6),c.Ub(7,"mat-form-field",7),c.Pb(8,"input",8),c.Tb(),c.Pb(9,"app-date-picker",9),c.Tb(),c.Pb(10,"app-declarer-details",10),c.Ub(11,"app-barcodes-list",11),c.cc("addBarcode",function(){return t.onBarcodeAdd()})("deleteBarcode",function(e){return t.onBarcodeDelete(e)})("clearBarcode",function(e){return t.onBarcodeClear(e)}),c.Tb(),c.Tb(),c.Ac(12,W,2,1,"ng-container",12),c.Ub(13,"mat-step"),c.Ac(14,H,1,0,"ng-template",5),c.Ub(15,"p"),c.Bc(16),c.hc(17,"json"),c.Tb(),c.Ub(18,"button",13),c.Bc(19,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),c.Tb(),c.Tb(),c.Tb(),c.Ub(20,"div"),c.Ac(21,Q,2,0,"button",14),c.Ac(22,Z,2,0,"button",14),c.Tb(),c.Tb(),c.Tb()}if(2&e){const e=c.rc(3);c.Cb(1),c.xc("width","100%"),c.lc("formGroup",t.codeIssuanceForm),c.Cb(3),c.lc("stepControl",t.codeIssuanceForm),c.Cb(2),c.lc("formGroup",t.codeIssuanceForm),c.Cb(4),c.lc("group",t.codeIssuanceForm.get("declarerDetails")),c.Cb(1),c.lc("group",t.codeIssuanceForm),c.Cb(1),c.lc("ngForOf",t.calcList),c.Cb(4),c.Ec("\u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u043c\u0435\u0440 ",t.codeIssuanceForm.controls.claimNumber.value," \u043e\u0442 ",c.ic(17,12,t.codeIssuanceForm.controls.claimDate.value)," \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u044c\u044e"),c.Cb(5),c.lc("ngIf",0!==e.selectedIndex),c.Cb(1),c.lc("ngIf",e.selectedIndex!==t.totalStepsCount-1)}},directives:[p.c,p.b,n.v,n.q,n.i,b.a,b.b,b.c,p.d,f.b,g.b,n.c,n.p,n.g,y,T,G,B.k,O.a,B.l,B.n,B.o],pipes:[B.f],styles:[".ci-side-menu-container[_ngcontent-%COMP%]{padding-left:25px}"]}),e})();var te=a("qTtY");let ae=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[te.a,o.d.forChild([{path:"",component:ee}])]]}),e})()}}]);