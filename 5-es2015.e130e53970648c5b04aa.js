(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9ed5":function(e,t,n){"use strict";n.r(t),n.d(t,"AnimationsModule",function(){return k});var a=n("qTtY"),o=n("tyNb"),r=n("fXoL"),i=n("XiUz"),c=n("bTqV");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-animations"]],decls:11,vars:0,consts:[["fxLayout","","fxLayoutGap","15px",1,"animation-nav"],["mat-stroked-button","","routerLink","./simple"],["mat-stroked-button","","routerLink","./keyframes"],["mat-stroked-button","","routerLink","./query"],[1,"main"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"h2"),r["\u0275\u0275text"](1,"ANIMATIONS"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"nav",0),r["\u0275\u0275elementStart"](3,"button",1),r["\u0275\u0275text"](4,"Simple animations"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"button",2),r["\u0275\u0275text"](6,"Animations with keyframes"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"button",3),r["\u0275\u0275text"](8,"Query animations"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"div",4),r["\u0275\u0275element"](10,"router-outlet"),r["\u0275\u0275elementEnd"]())},directives:[i.c,i.d,c.a,o.a,o.e],styles:[".animation-nav[_ngcontent-%COMP%]{padding:20px;border-bottom:1px solid rgba(0,0,0,.07)}.main[_ngcontent-%COMP%]{padding:20px}"]}),e})();var l=n("R0Ic");let m=(()=>{class e{constructor(){this.isOpen=!0}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-animations-with-keyframes"]],decls:4,vars:2,consts:[["mat-stroked-button","","type","button",3,"click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"button",0),r["\u0275\u0275listener"]("click",function(){return t.isOpen=!t.isOpen}),r["\u0275\u0275text"](3,"Trigger"),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275property"]("@openClose",t.isOpen?"open":"close"),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](t.isOpen?"open":"close"))},directives:[c.a],styles:[""],data:{animation:[Object(l.m)("openClose",[Object(l.j)("open",Object(l.k)({height:"200px",opacity:1,backgroundColor:"yellow"})),Object(l.j)("close",Object(l.k)({height:"100px",opacity:.5,backgroundColor:"green"})),Object(l.l)("* => *",[Object(l.e)("5s",Object(l.g)([Object(l.k)({opacity:.1,offset:.1}),Object(l.k)({opacity:.6,offset:.2}),Object(l.k)({opacity:1,offset:.5}),Object(l.k)({opacity:.2,offset:.7})]))])])]}}),e})();var p=n("ofXK"),d=n("Wp6s");let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-card-item"]],decls:16,vars:0,consts:[[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-card-image","","src","https://material.angular.io/assets/img/examples/shiba2.jpg","alt","Photo of a Shiba Inu"],["mat-button",""]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"mat-card",0),r["\u0275\u0275elementStart"](1,"mat-card-header"),r["\u0275\u0275element"](2,"div",1),r["\u0275\u0275elementStart"](3,"mat-card-title"),r["\u0275\u0275text"](4,"Shiba Inu"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"mat-card-subtitle"),r["\u0275\u0275text"](6,"Dog Breed"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](7,"img",2),r["\u0275\u0275elementStart"](8,"mat-card-content"),r["\u0275\u0275elementStart"](9,"p"),r["\u0275\u0275text"](10," The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"mat-card-actions"),r["\u0275\u0275elementStart"](12,"button",3),r["\u0275\u0275text"](13,"LIKE"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"button",3),r["\u0275\u0275text"](15,"SHARE"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())},directives:[d.a,d.e,d.c,d.i,d.h,d.f,d.d,d.b,c.a],styles:[""]}),e})();function f(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275element"](1,"app-card-item"),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275styleProp"]("margin-top","20px"),r["\u0275\u0275property"]("@fadeSlideInOut",void 0))}let b=(()=>{class e{constructor(){this.show=!1}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-simple-animations"]],decls:3,vars:1,consts:[["mat-stroked-button","",3,"click"],[3,"margin-top",4,"ngIf"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"button",0),r["\u0275\u0275listener"]("click",function(){return t.show=!t.show}),r["\u0275\u0275text"](1," Apply animation\n"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](2,f,2,3,"div",1)),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.show))},directives:[c.a,p.l,u],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"],data:{animation:[Object(l.m)("fadeSlideInOut",[Object(l.l)(":enter",[Object(l.k)({opacity:0,transform:"translateY(10px)"}),Object(l.e)("500ms",Object(l.k)({opacity:1,transform:"translateY(0)"}))]),Object(l.l)(":leave",[Object(l.e)("500ms",Object(l.k)({opacity:0,transform:"translateY(10px)"}))])])]},changeDetection:0}),e})();function g(e,t){1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275element"](1,"app-card-item",3),r["\u0275\u0275elementContainerEnd"]())}const h=function(){return[1,2,3,4]},O=[Object(l.k)({transform:"rotate(0)"}),Object(l.e)("0.1s",Object(l.k)({transform:"rotate(2deg)"})),Object(l.e)("0.1s",Object(l.k)({transform:"rotate(-4deg)"})),Object(l.e)("0.1s",Object(l.k)({transform:"rotate(4deg)"})),Object(l.e)("0.1s",Object(l.k)({transform:"rotate(0)"}))];let y=(()=>{class e{constructor(){this.show=""}ngOnInit(){}onDone(){this.show=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-query-animations"]],decls:6,vars:5,consts:[["mat-stroked-button","",3,"click"],["fxLayout","","fxLayoutGap","20px"],[4,"ngFor","ngForOf"],[1,"card"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"button",0),r["\u0275\u0275listener"]("click",function(){return t.show="default"}),r["\u0275\u0275text"](1,"Trigger default animation"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"button",0),r["\u0275\u0275listener"]("click",function(){return t.show="withLimit"}),r["\u0275\u0275text"](3,"Trigger limit animation"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",1),r["\u0275\u0275listener"]("@queryShake.done",function(){return t.onDone()}),r["\u0275\u0275template"](5,g,2,0,"ng-container",2),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](4),r["\u0275\u0275styleProp"]("margin-top","20px"),r["\u0275\u0275property"]("@queryShake",t.show),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",r["\u0275\u0275pureFunction0"](4,h)))},directives:[c.a,i.c,i.d,p.k,u],styles:[""],data:{animation:[Object(l.m)("queryShake",[Object(l.l)("* => default",[Object(l.h)(".card",O)]),Object(l.l)("* => withLimit",[Object(l.h)(".card",O,{limit:2})])])]},changeDetection:0}),e})(),k=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.a,o.d.forChild([{path:"",component:s,children:[{path:"keyframes",component:m},{path:"simple",component:b},{path:"query",component:y}]}])]]}),e})()}}]);