"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[570],{4570:(Y,h,r)=>{r.r(h),r.d(h,{HomeModule:()=>L});var s=r(9808),l=r(6609),e=r(5e3),d=r(6827),f=r(9601),p=r(2313),g=r(9646),C=r(1135);const v=new e.OlP("recaptcha-language"),A=new e.OlP("recaptcha-base-url"),_=new e.OlP("recaptcha-nonce-tag"),E=new e.OlP("recaptcha-settings"),b=new e.OlP("recaptcha-v3-site-key"),x_loadScript=function B(o,n,t,u,i){window.ng2recaptchaloaded=()=>{n(grecaptcha)};const c=document.createElement("script");c.innerHTML="",c.src=`${u||"https://www.google.com/recaptcha/api.js"}?render=${o}&onload=ng2recaptchaloaded${t}`,i&&(c.nonce=i),c.async=!0,c.defer=!0,document.head.appendChild(c)};let m=(()=>{class o{constructor(t,u,i,c,a){this.platformId=t,this.language=u,this.baseUrl=i,this.nonce=c,this.v3SiteKey=a,this.init(),this.ready=(0,s.NF)(this.platformId)?o.ready.asObservable():(0,g.of)()}init(){if(!o.ready&&(0,s.NF)(this.platformId)){const t=new C.X(null);o.ready=t,x_loadScript(this.v3SiteKey||"explicit",c=>t.next(c),this.language?"&hl="+this.language:"",this.baseUrl,this.nonce)}}}return o.ready=null,o.\u0275fac=function(t){return new(t||o)(e.LFG(e.Lbi),e.LFG(v,8),e.LFG(A,8),e.LFG(_,8),e.LFG(b,8))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),y=0,R=(()=>{class o{constructor(t,u,i,c){this.elementRef=t,this.loader=u,this.zone=i,this.id="ngrecaptcha-"+y++,this.errorMode="default",this.resolved=new e.vpe,this.error=new e.vpe,c&&(this.siteKey=c.siteKey,this.theme=c.theme,this.type=c.type,this.size=c.size,this.badge=c.badge)}ngAfterViewInit(){this.subscription=this.loader.ready.subscribe(t=>{null!=t&&t.render instanceof Function&&(this.grecaptcha=t,this.renderRecaptcha())})}ngOnDestroy(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()}execute(){"invisible"===this.size&&(null!=this.widget?this.grecaptcha.execute(this.widget):this.executeRequested=!0)}reset(){null!=this.widget&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())}get __unsafe_widgetValue(){return null!=this.widget?this.grecaptcha.getResponse(this.widget):null}expired(){this.resolved.emit(null)}errored(t){this.error.emit(t)}captchaResponseCallback(t){this.resolved.emit(t)}grecaptchaReset(){null!=this.widget&&this.zone.runOutsideAngular(()=>this.grecaptcha.reset(this.widget))}renderRecaptcha(){const t={badge:this.badge,callback:u=>{this.zone.run(()=>this.captchaResponseCallback(u))},"expired-callback":()=>{this.zone.run(()=>this.expired())},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type};"handled"===this.errorMode&&(t["error-callback"]=(...u)=>{this.zone.run(()=>this.errored(u))}),this.widget=this.grecaptcha.render(this.elementRef.nativeElement,t),!0===this.executeRequested&&(this.executeRequested=!1,this.execute())}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(m),e.Y36(e.R0b),e.Y36(E,8))},o.\u0275cmp=e.Xpm({type:o,selectors:[["re-captcha"]],hostVars:1,hostBindings:function(t,u){2&t&&e.uIk("id",u.id)},inputs:{id:"id",siteKey:"siteKey",theme:"theme",type:"type",size:"size",tabIndex:"tabIndex",badge:"badge",errorMode:"errorMode"},outputs:{resolved:"resolved",error:"error"},exportAs:["reCaptcha"],decls:0,vars:0,template:function(t,u){},encapsulation:2}),o})(),F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({}),o})(),w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[m],imports:[[F]]}),o})();function D(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"re-captcha",10),e.NdJ("resolved",function(){return e.CHM(t),e.oxw(2).resolveReCaptcha()}),e.qZA()}}function M(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).copyAddress()}),e._uU(1," \u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc / copy email address "),e.qZA()}}function T(o,n){if(1&o&&(e.TgZ(0,"div",4)(1,"h4",5),e._uU(2,"Contact Address / \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),e.qZA()(),e.TgZ(3,"div",6)(4,"div",7),e.YNc(5,D,1,0,"re-captcha",8),e.YNc(6,M,2,0,"button",9),e.qZA()()),2&o){const t=e.oxw();e.xp6(5),e.Q6J("ngIf",!t.isShowed),e.xp6(1),e.Q6J("ngIf",t.isShowed)}}let Z=(()=>{class o{constructor(t,u,i){this.modalService=t,this.messageService=u,this.isShowed=!1,i.setTitle("kemu contact")}open(t){this.modalService.open(t,{centered:!0})}resolveReCaptcha(){this.isShowed=!0}copyAddress(){navigator.clipboard.writeText("kemu430113+portal@gmail.com").then(()=>this.messageService.pushMessage({type:"info",body:"copied email address to your clipboard (*\u309d\u03c9\u30fb)\uff89"})).catch(()=>this.messageService.pushMessage({type:"danger",body:"we can't access your clipboard (\u25c7\xb4\u0414\uff40\uff9f"})).finally(()=>this.modalService.dismissAll())}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.FF),e.Y36(f.e),e.Y36(p.Dx))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-contact"]],decls:17,vars:0,consts:[[1,"container","mt-3"],[1,"mt-3","d-flex","justify-content-center"],[1,"btn","btn-secondary","mt-3",3,"click"],["content",""],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],[1,"modal-body"],[1,"d-flex","justify-content-center"],["siteKey","6LeCx-4eAAAAAM4bOC4sVLZB0uYrfBNE59Rlvz52",3,"resolved",4,"ngIf"],["class","btn btn-secondary",3,"click",4,"ngIf"],["siteKey","6LeCx-4eAAAAAM4bOC4sVLZB0uYrfBNE59Rlvz52",3,"resolved"],[1,"btn","btn-secondary",3,"click"]],template:function(t,u){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Contact"),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"div"),e._uU(5,"\u4ed5\u4e8b\u306e\u4f9d\u983c\u306a\u3069\u306f\u4ee5\u4e0b\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),e._UZ(6,"br"),e._uU(7,"\u30bb\u30fc\u30eb\u30b9\u30e1\u30fc\u30eb\u306f\u304a\u63a7\u3048\u304f\u3060\u3055\u3044\u3002"),e.qZA(),e.TgZ(8,"div"),e._uU(9,"Please use the following e-mail address for work requests."),e._UZ(10,"br"),e._uU(11,"Please refrain from sales emails."),e.qZA(),e.TgZ(12,"div",1)(13,"button",2),e.NdJ("click",function(){e.CHM(i);const a=e.MAs(16);return u.open(a)}),e._uU(14,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u624b\u3059\u308b"),e.qZA()()(),e.YNc(15,T,7,2,"ng-template",null,3,e.W1O)}},directives:[s.O5,R],encapsulation:2}),o})();var S=r(2923);const j=function(){return["contact"]};function k(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",2)(1,"h4",3),e._uU(2,"\u8457\u8005\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb / author profile"),e.qZA()(),e.TgZ(3,"div",4),e._uU(4," 2017\u5e74\u304b\u3089C\u8a00\u8a9e/C++\u3092\u5229\u7528\u3057\u3066\u30de\u30a4\u30b3\u30f3\u958b\u767a\u3092\u30012018\u5e74\u9803\u304b\u3089Django, Angular\u3092\u7528\u3044\u305f\u958b\u767a\u3092\u884c\u3044\u5b9f\u52d9\u30a4\u30f3\u30bf\u30fc\u30f3\u306a\u3069\u306b\u53c2\u52a0\u3002 \u305d\u306e\u5f8c\u3001\u5927\u5b664\u5e74\u6b21\u306bK-tech\u3068\u3057\u3066\u500b\u4eba\u4e8b\u696d\u4e3b\u306b\u72ec\u7acb\u3002"),e._UZ(5,"br")(6,"br"),e._uU(7," \u5927\u5b664\u5e74\u6b21\u306bBeProud\u306b\u30a2\u30eb\u30d0\u30a4\u30c8\u3068\u3057\u3066\u5165\u793e\u3057\u5352\u696d\u6642\u306b\u6b63\u793e\u54e1\u306b\u79fb\u884c\u3001\u73fe\u5728\u306f\u500b\u4eba\u4e8b\u696d\u4e3b\u3092\u7d99\u7d9a\u3057\u306a\u304c\u3089\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u52e4\u52d9\u4e2d\u3002 "),e._UZ(8,"hr"),e.TgZ(9,"h5"),e._uU(10,"\u76e3\u4fee"),e.qZA(),e.TgZ(11,"ul",5)(12,"li",6)(13,"a",7),e._uU(14,"Python\u3075\u308a\u304c\u306a\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0 \u30d1\u30bf\u30fc\u30f3\u6587\u4f8b80 \u3075\u308a\u304c\u306a\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0"),e.qZA()(),e.TgZ(15,"li",6)(16,"a",8),e._uU(17,"\u30b9\u30e9\u30b9\u30e9\u8aad\u3081\u308b Python\u3075\u308a\u304c\u306a\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0 \u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u5165\u9580"),e.qZA()()(),e._UZ(18,"hr"),e._uU(19," \u4ed5\u4e8b\u4f9d\u983c/"),e.TgZ(20,"strong"),e._uU(21,"\u8ee2\u8077\u5148"),e.qZA(),e._uU(22,"\u306a\u3069\u52df\u96c6\u4e2d\u3067\u3059\u3002"),e.TgZ(23,"a",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().close()}),e._uU(24,"contact me"),e.qZA()()}2&o&&(e.xp6(23),e.Q6J("routerLink",e.DdM(1,j)))}let U=(()=>{class o{constructor(t){this.modalService=t}open(t){this.modalService.open(t,{size:"lg",centered:!0})}close(){this.modalService.dismissAll()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.FF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile"]],decls:4,vars:0,consts:[["content",""],[1,"btn","btn-sm","btn-secondary",3,"click"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],[1,"modal-body"],[1,"list-group"],[1,"list-group-item"],["href","https://amzn.to/3J8MBjn",1,"text-muted"],["href","https://amzn.to/3t84Hwr",1,"text-muted"],[3,"routerLink","click"]],template:function(t,u){if(1&t){const i=e.EpF();e.YNc(0,k,25,2,"ng-template",null,0,e.W1O),e.TgZ(2,"button",1),e.NdJ("click",function(){e.CHM(i);const a=e.MAs(1);return u.open(a)}),e._uU(3,"\u8457\u8005\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb / see author profile"),e.qZA()}},directives:[l.yS],encapsulation:2}),o})();var V=r(3996);function N(o,n){1&o&&(e.TgZ(0,"span",4),e._uU(1,"new!"),e.qZA())}const O=function(o){return["/blog",o]};function P(o,n){if(1&o&&(e.TgZ(0,"div")(1,"a",2),e.YNc(2,N,2,0,"span",3),e._uU(3),e.qZA()()),2&o){const t=n.$implicit,u=n.index;e.xp6(1),e.Q6J("routerLink",e.VKq(3,O,t.key)),e.xp6(1),e.Q6J("ngIf",0===u),e.xp6(1),e.Oqu(t.value.title)}}let I=(()=>{class o{constructor(t){this.keyValuePipe=t}get articles(){return this.keyValuePipe.transform(V).sort((t,u)=>Number(u.key)-Number(t.key))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(s.Nd))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-news"]],decls:2,vars:1,consts:[["id","news",1,"list-group"],[4,"ngFor","ngForOf"],[1,"list-group-item",3,"routerLink"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(t,u){1&t&&(e.TgZ(0,"div",0),e.YNc(1,P,4,5,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",u.articles))},directives:[s.sg,l.yS,s.O5],styles:["#news[_ngcontent-%COMP%]{overflow-y:scroll;max-height:400px}"]}),o})();function q(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"a",14),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().transitTool(c)}),e.TgZ(1,"div",10)(2,"div",11),e._uU(3),e.qZA(),e._uU(4),e.qZA()()}if(2&o){const t=n.$implicit;e.xp6(3),e.Oqu(t.label),e.xp6(1),e.hij(" ",t.description," ")}}const z=[{path:"",component:(()=>{class o{constructor(t,u,i){this.route=u,this.router=i,this.tools=S,t.setTitle("kemu portal")}ngOnInit(){const t=this.route.snapshot.queryParamMap.get("to");t&&this.router.navigate([t])}transitTool(t){t.external?window.location.href=t.link:this.router.navigate([t.link])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.Dx),e.Y36(l.gz),e.Y36(l.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-index"]],decls:28,vars:1,consts:[[1,"text-end"],[1,"container","text-center"],["src","/assets/images/weed.png",2,"max-width","100%"],[1,"row"],[1,"col-md-6"],[1,"border","border-light","rounded"],[1,"list-group"],["class","list-group-item d-flex",3,"click",4,"ngFor","ngForOf"],[1,"mt-2"],["href","https://kemu.site",1,"list-group-item","d-flex"],[1,"text-start"],[1,"fw-bold"],[1,"mt-5","d-flex","justify-content-center"],["src","https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=monthlydealevent&banner=0SN7PKM3ZXK5BW58WTR2&f=ifr&linkID=c4a78199505dd7da5dfc4016ee8728cc&t=kemu03-22&tracking_id=kemu03-22","width","728","height","90","scrolling","no","marginwidth","0","frameborder","0","sandbox","allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation",2,"border","none"],[1,"list-group-item","d-flex",3,"click"]],template:function(t,u){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-profile"),e.qZA(),e.TgZ(2,"div",1)(3,"div")(4,"h2"),e._uU(5,"Contributions"),e.qZA(),e._UZ(6,"img",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h2"),e._uU(10,"News"),e.qZA(),e.TgZ(11,"div",5),e._UZ(12,"app-news"),e.qZA()(),e.TgZ(13,"div",4)(14,"h2"),e._uU(15,"Tools"),e.qZA(),e.TgZ(16,"ol",6),e.YNc(17,q,5,2,"a",7),e.qZA(),e.TgZ(18,"h2",8),e._uU(19,"Links"),e.qZA(),e.TgZ(20,"ol",6)(21,"a",9)(22,"div",10)(23,"div",11),e._uU(24,"\u65e7\u30d6\u30ed\u30b0"),e.qZA(),e._uU(25," 2022-03\u4ee5\u524d\u306b\u7ba1\u7406\u3057\u3066\u3044\u305f\u30d6\u30ed\u30b0\u3001\u9803\u5408\u3044\u3092\u898b\u3066\u505c\u6b62\u4e88\u5b9a\u3067\u3059\u3002 "),e.qZA()()()()()(),e.TgZ(26,"div",12),e._UZ(27,"iframe",13),e.qZA()),2&t&&(e.xp6(17),e.Q6J("ngForOf",u.tools))},directives:[U,I,s.sg],encapsulation:2}),o})()},{path:"contact",component:Z}];let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.Bz.forChild(z)],l.Bz]}),o})(),L=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[s.Nd],imports:[[s.ez,H,d.IJ,w]]}),o})()}}]);