(self.webpackChunkangular_widget=self.webpackChunkangular_widget||[]).push([[518],{2518:(X,u,a)=>{a.r(u),a.d(u,{ReferenceBooksModule:()=>Z});var p=a(6823),R=a(5508),s=a(3929),k=a(9646);const g=[{id:1,code:"1",capacity:"0.1"},{id:2,code:"2",capacity:"0.2"},{id:3,code:"3",capacity:"0.3"},{id:4,code:"4",capacity:"0.4"},{id:6,code:"6",capacity:"0.6"},{id:7,code:"7",capacity:"0.7"},{id:8,code:"8",capacity:"0.8"}];var e=a(6386);let f=(()=>{class t{loadAllCourseLessonsSummary(n){return(0,k.of)(g)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();var B=a(1005),x=a(4004),i=a(7155);function S(t,o){1&t&&(e.\u0275\u0275elementStart(0,"th",7),e.\u0275\u0275text(1," No. "),e.\u0275\u0275elementEnd())}function T(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"td",8),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",n.code," ")}}function w(t,o){1&t&&(e.\u0275\u0275elementStart(0,"th",7),e.\u0275\u0275text(1," \u0415\u043c\u043a\u043e\u0441\u0442\u044c "),e.\u0275\u0275elementEnd())}function L(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"td",8),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",n.capacity," ")}}function E(t,o){1&t&&e.\u0275\u0275element(0,"tr",9)}function I(t,o){1&t&&e.\u0275\u0275element(0,"tr",10)}let F=(()=>{class t extends class D{export(){console.log(this.dataGrid)}}{constructor(n){super(),this.cdr=n,this.displayedColumns=["code","capacity"]}set dataSource(n){this._dataSource=n,this.cdr.detectChanges()}get dataSource(){return this._dataSource}add(){}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-capacity-reference-book"]],viewQuery:function(n,r){if(1&n&&e.\u0275\u0275viewQuery(i.BZ,5),2&n){let c;e.\u0275\u0275queryRefresh(c=e.\u0275\u0275loadQuery())&&(r.dataGrid=c.first)}},inputs:{dataSource:"dataSource"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:9,vars:3,consts:[["mat-table","",1,"capacity-table","mat-elevation-z8",3,"dataSource"],["matColumnDef","code"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","capacity"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,r){1&n&&(e.\u0275\u0275elementStart(0,"table",0),e.\u0275\u0275elementContainerStart(1,1),e.\u0275\u0275template(2,S,2,0,"th",2),e.\u0275\u0275template(3,T,2,1,"td",3),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(4,4),e.\u0275\u0275template(5,w,2,0,"th",2),e.\u0275\u0275template(6,L,2,1,"td",3),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275template(7,E,1,0,"tr",5),e.\u0275\u0275template(8,I,1,0,"tr",6),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275property("dataSource",r.dataSource),e.\u0275\u0275advance(7),e.\u0275\u0275property("matHeaderRowDef",r.displayedColumns),e.\u0275\u0275advance(1),e.\u0275\u0275property("matRowDefColumns",r.displayedColumns))},dependencies:[i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk],styles:[".capacity-table[_ngcontent-%COMP%]{width:100%;margin:16px 0}"],changeDetection:0}),t})(),y=(()=>{class t{constructor(n){this.referenceBookApi=n}resolve(n,r){const c=n.paramMap.get("referenceBookUrl");return this.referenceBookApi.loadAllCourseLessonsSummary(c).pipe((0,B.g)(3e3),(0,x.U)(l=>({type:F,data:l})))}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275inject(f))},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-reference-books-layout"]],inputs:{headerTitle:"headerTitle"},decls:6,vars:0,consts:[[1,"content"],[1,"box"],[1,"box-body"]],template:function(n,r){1&n&&(e.\u0275\u0275elementStart(0,"section",0)(1,"div",1)(2,"p"),e.\u0275\u0275text(3,"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0438"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",2),e.\u0275\u0275element(5,"router-outlet"),e.\u0275\u0275elementEnd()()())},dependencies:[s.RouterOutlet],styles:[".content[_ngcontent-%COMP%]{width:100%;height:100%}.box[_ngcontent-%COMP%]{background:transparent}.box-body[_ngcontent-%COMP%]{margin:0 24px}"]}),t})();var d=a(1576),j=a(6451),C=a(9300),h=a(9718),v=a(4633),O=a(1572);function A(t,o){1&t&&e.\u0275\u0275element(0,"mat-progress-spinner",3)}function $(t,o){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",1),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(n).$implicit,m=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(m.goToDetail(l))}),e.\u0275\u0275elementStart(1,"span"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,A,1,0,"mat-progress-spinner",2),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275elementEnd()}if(2&t){const n=o.$implicit,r=e.\u0275\u0275nextContext();e.\u0275\u0275property("disableRipple",!0),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.title),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(4,3,r.isLoading$)&&n.url===(null==r.activeLink?null:r.activeLink.url))}}let V=(()=>{class t{constructor(n,r){this.router=n,this.route=r}ngOnInit(){this._showLoaderEvents$=this.router.events.pipe((0,C.h)(n=>n instanceof s.ResolveStart),(0,h.h)(!0)),this._hideLoaderEvents$=this.router.events.pipe((0,C.h)(n=>n instanceof s.ResolveEnd),(0,h.h)(!1)),this.isLoading$=(0,j.T)(this._showLoaderEvents$,this._hideLoaderEvents$)}goToDetail(n){this.activeLink=n,this.router.navigate([n.url],{relativeTo:this.route})}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(s.Router),e.\u0275\u0275directiveInject(s.ActivatedRoute))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-reference-books-list"]],inputs:{links:"links"},decls:2,vars:1,consts:[["mat-list-item","","fxLayout","row",3,"disableRipple","click",4,"ngFor","ngForOf"],["mat-list-item","","fxLayout","row",3,"disableRipple","click"],["color","primary","mode","indeterminate","diameter","24",4,"ngIf"],["color","primary","mode","indeterminate","diameter","24"]],template:function(n,r){1&n&&(e.\u0275\u0275elementStart(0,"mat-nav-list"),e.\u0275\u0275template(1,$,5,5,"a",0),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",r.links))},dependencies:[p.NgForOf,p.NgIf,d.xw,v.Hk,v.Tg,O.Ou,p.AsyncPipe],styles:[".mat-list-base .mat-list-item .mat-list-item-content{width:100%!important}mat-progress-spinner{margin-left:auto!important}\n"],encapsulation:2}),t})(),Q=(()=>{class t{constructor(){this.title="\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u043e\u0432",this.administrationSectionLinks=[{title:"\u041e\u0431\u0449\u0435\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u0442\u0440\u0430\u043d \u043c\u0438\u0440\u0430 \u041e\u041a (\u041c\u041a (\u0418\u0421\u041e 3166) 004-97) 025-2001",url:"country"},{title:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438",url:"region"},{title:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a \u0435\u043c\u043a\u043e\u0441\u0442\u0438",url:"capacity"},{title:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a \u043a\u0440\u0435\u043f\u043e\u0441\u0442\u0438",url:"strength"}]}ngOnInit(){this.administrationSectionLinks=this.administrationSectionLinks.map((n,r)=>({...n,id:r+1}))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-reference-books-administration"]],decls:5,vars:2,consts:[[1,"administration"],["fxLayout","row",1,"title"],[3,"links"]],template:function(n,r){1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",0)(2,"div",1),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"app-reference-books-list",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),2&n&&(e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(r.title),e.\u0275\u0275advance(1),e.\u0275\u0275property("links",r.administrationSectionLinks))},dependencies:[d.xw,V],styles:[".administration[_ngcontent-%COMP%]{background:#fff;overflow:auto;height:100%}.administration[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{font-weight:500;font-size:18px;margin:16px 24px}"],changeDetection:0}),t})();var P=a(8505),H=a(2722),N=a(7579),_=a(4859);const U=["table"];let z=(()=>{class t{constructor(n){this.componentFactoryResolver=n}ngOnInit(){}ngAfterViewInit(){const{type:n}=this.tableDef,r=this.componentFactoryResolver.resolveComponentFactory(n);this.container.clear(),this.componentRef=this.container.createComponent(r),this.componentRef.instance.dataSource=this.tableDef.data}exportTableToExel(){this.componentRef.instance.export()}addNewItem(){this.componentRef.instance.add()}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(e.ComponentFactoryResolver))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-dynamic-table"]],viewQuery:function(n,r){if(1&n&&e.\u0275\u0275viewQuery(U,5,e.ViewContainerRef),2&n){let c;e.\u0275\u0275queryRefresh(c=e.\u0275\u0275loadQuery())&&(r.container=c.first)}},inputs:{tableDef:"tableDef"},decls:2,vars:0,consts:[["table",""]],template:function(n,r){1&n&&e.\u0275\u0275elementContainer(0,null,0)}}),t})();const G=[{path:"",redirectTo:"adm",pathMatch:"full"},{path:"adm",component:M,children:[{path:"",component:Q},{path:":referenceBookUrl",component:(()=>{class t{constructor(n){this.route=n,this.onDestroy$=new N.x}ngOnInit(){this.route.data.pipe((0,P.b)(n=>this.referenceBookDef=n?.referenceBookDef),(0,H.R)(this.onDestroy$)).subscribe()}ngOnDestroy(){this.onDestroy$.next(!0),this.onDestroy$.complete()}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(s.ActivatedRoute))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-reference-book-control"]],decls:9,vars:1,consts:[["fxLayout","column"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"],[3,"tableDef"],["dynamicTable",""]],template:function(n,r){if(1&n){const c=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"button",2),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(c);const m=e.\u0275\u0275reference(8);return e.\u0275\u0275resetView(m.addNewItem())}),e.\u0275\u0275text(3,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"button",3),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(c);const m=e.\u0275\u0275reference(8);return e.\u0275\u0275resetView(m.exportTableToExel())}),e.\u0275\u0275text(5,"\u042d\u043a\u0441\u043f\u043e\u0440\u0442"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"div"),e.\u0275\u0275element(7,"app-dynamic-table",4,5),e.\u0275\u0275elementEnd()()}2&n&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("tableDef",r.referenceBookDef))},dependencies:[d.xw,d.Wh,_.lW,z]}),t})(),resolve:{referenceBookDef:y}}]}];let W=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.RouterModule.forChild(G),s.RouterModule]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({providers:[y,f],imports:[p.CommonModule,R.m,W]}),t})()}}]);