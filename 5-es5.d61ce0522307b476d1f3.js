!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9ed5":function(e,a,o){"use strict";o.r(a),o.d(a,"AnimationsModule",function(){return B});var c,i,r,s=o("qTtY"),b=o("tyNb"),u=o("fXoL"),p=o("XiUz"),l=o("bTqV"),m=((c=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||c)},c.\u0275cmp=u.Ib({type:c,selectors:[["app-animations"]],decls:11,vars:0,consts:[["fxLayout","","fxLayoutGap","15px",1,"animation-nav"],["mat-stroked-button","","routerLink","./simple"],["mat-stroked-button","","routerLink","./keyframes"],["mat-stroked-button","","routerLink","./query"],[1,"main"]],template:function(t,e){1&t&&(u.Ub(0,"h2"),u.Bc(1,"ANIMATIONS"),u.Tb(),u.Ub(2,"nav",0),u.Ub(3,"button",1),u.Bc(4,"Simple animations"),u.Tb(),u.Ub(5,"button",2),u.Bc(6,"Animations with keyframes"),u.Tb(),u.Ub(7,"button",3),u.Bc(8,"Query animations"),u.Tb(),u.Tb(),u.Ub(9,"div",4),u.Pb(10,"router-outlet"),u.Tb())},directives:[p.c,p.d,l.a,b.a,b.e],styles:[".animation-nav[_ngcontent-%COMP%]{padding:20px;border-bottom:1px solid rgba(0,0,0,.07)}.main[_ngcontent-%COMP%]{padding:20px}"]}),c),f=o("R0Ic"),d=((i=function(){function e(){t(this,e),this.isOpen=!0}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u.Ib({type:i,selectors:[["app-animations-with-keyframes"]],decls:4,vars:2,consts:[["mat-stroked-button","","type","button",3,"click"]],template:function(t,e){1&t&&(u.Ub(0,"p"),u.Bc(1),u.Tb(),u.Ub(2,"button",0),u.cc("click",function(){return e.isOpen=!e.isOpen}),u.Bc(3,"Trigger"),u.Tb()),2&t&&(u.lc("@openClose",e.isOpen?"open":"close"),u.Cb(1),u.Cc(e.isOpen?"open":"close"))},directives:[l.a],styles:[""],data:{animation:[Object(f.m)("openClose",[Object(f.j)("open",Object(f.k)({height:"200px",opacity:1,backgroundColor:"yellow"})),Object(f.j)("close",Object(f.k)({height:"100px",opacity:.5,backgroundColor:"green"})),Object(f.l)("* => *",[Object(f.e)("5s",Object(f.g)([Object(f.k)({opacity:.1,offset:.1}),Object(f.k)({opacity:.6,offset:.2}),Object(f.k)({opacity:1,offset:.5}),Object(f.k)({opacity:.2,offset:.7})]))])])]}}),i),h=o("ofXK"),g=o("Wp6s"),O=((r=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=u.Ib({type:r,selectors:[["app-card-item"]],decls:16,vars:0,consts:[[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-card-image","","src","https://material.angular.io/assets/img/examples/shiba2.jpg","alt","Photo of a Shiba Inu"],["mat-button",""]],template:function(t,e){1&t&&(u.Ub(0,"mat-card",0),u.Ub(1,"mat-card-header"),u.Pb(2,"div",1),u.Ub(3,"mat-card-title"),u.Bc(4,"Shiba Inu"),u.Tb(),u.Ub(5,"mat-card-subtitle"),u.Bc(6,"Dog Breed"),u.Tb(),u.Tb(),u.Pb(7,"img",2),u.Ub(8,"mat-card-content"),u.Ub(9,"p"),u.Bc(10," The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. "),u.Tb(),u.Tb(),u.Ub(11,"mat-card-actions"),u.Ub(12,"button",3),u.Bc(13,"LIKE"),u.Tb(),u.Ub(14,"button",3),u.Bc(15,"SHARE"),u.Tb(),u.Tb(),u.Tb())},directives:[g.a,g.e,g.c,g.i,g.h,g.f,g.d,g.b,l.a],styles:[""]}),r);function y(t,e){1&t&&(u.Ub(0,"div"),u.Pb(1,"app-card-item"),u.Tb()),2&t&&(u.xc("margin-top","20px"),u.lc("@fadeSlideInOut",void 0))}var k,j=((k=function(){function e(){t(this,e),this.show=!1}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||k)},k.\u0275cmp=u.Ib({type:k,selectors:[["app-simple-animations"]],decls:3,vars:1,consts:[["mat-stroked-button","",3,"click"],[3,"margin-top",4,"ngIf"]],template:function(t,e){1&t&&(u.Ub(0,"button",0),u.cc("click",function(){return e.show=!e.show}),u.Bc(1," Apply animation\n"),u.Tb(),u.Ac(2,y,2,3,"div",1)),2&t&&(u.Cb(2),u.lc("ngIf",e.show))},directives:[l.a,h.l,O],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"],data:{animation:[Object(f.m)("fadeSlideInOut",[Object(f.l)(":enter",[Object(f.k)({opacity:0,transform:"translateY(10px)"}),Object(f.e)("500ms",Object(f.k)({opacity:1,transform:"translateY(0)"}))]),Object(f.l)(":leave",[Object(f.e)("500ms",Object(f.k)({opacity:0,transform:"translateY(10px)"}))])])]},changeDetection:0}),k);function v(t,e){1&t&&(u.Sb(0),u.Pb(1,"app-card-item",3),u.Rb())}var w,T,x=function(){return[1,2,3,4]},U=[Object(f.k)({transform:"rotate(0)"}),Object(f.e)("0.1s",Object(f.k)({transform:"rotate(2deg)"})),Object(f.e)("0.1s",Object(f.k)({transform:"rotate(-4deg)"})),Object(f.e)("0.1s",Object(f.k)({transform:"rotate(4deg)"})),Object(f.e)("0.1s",Object(f.k)({transform:"rotate(0)"}))],I=((T=function(){function e(){t(this,e),this.show=""}return n(e,[{key:"ngOnInit",value:function(){}},{key:"onDone",value:function(){this.show=""}}]),e}()).\u0275fac=function(t){return new(t||T)},T.\u0275cmp=u.Ib({type:T,selectors:[["app-query-animations"]],decls:6,vars:5,consts:[["mat-stroked-button","",3,"click"],["fxLayout","","fxLayoutGap","20px"],[4,"ngFor","ngForOf"],[1,"card"]],template:function(t,e){1&t&&(u.Ub(0,"button",0),u.cc("click",function(){return e.show="default"}),u.Bc(1,"Trigger default animation"),u.Tb(),u.Ub(2,"button",0),u.cc("click",function(){return e.show="withLimit"}),u.Bc(3,"Trigger limit animation"),u.Tb(),u.Ub(4,"div",1),u.cc("@queryShake.done",function(){return e.onDone()}),u.Ac(5,v,2,0,"ng-container",2),u.Tb()),2&t&&(u.Cb(4),u.xc("margin-top","20px"),u.lc("@queryShake",e.show),u.Cb(1),u.lc("ngForOf",u.nc(4,x)))},directives:[l.a,p.c,p.d,h.k,O],styles:[""],data:{animation:[Object(f.m)("queryShake",[Object(f.l)("* => default",[Object(f.h)(".card",U)]),Object(f.l)("* => withLimit",[Object(f.h)(".card",U,{limit:2})])])]},changeDetection:0}),T),B=((w=function e(){t(this,e)}).\u0275mod=u.Mb({type:w}),w.\u0275inj=u.Lb({factory:function(t){return new(t||w)},imports:[[s.a,b.d.forChild([{path:"",component:m,children:[{path:"keyframes",component:d},{path:"simple",component:j},{path:"query",component:I}]}])]]}),w)}}])}();