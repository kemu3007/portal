(self.webpackChunkportal=self.webpackChunkportal||[]).push([[113],{9113:(g,p,i)=>{"use strict";i.r(p),i.d(p,{LogModule:()=>k});var r=i(9808),a=i(2956),c=i(8645),u=i(7225),t=i(1223),d=i(2313),y=i(7822),m=i(3892);function L(o,n){if(1&o&&(t.TgZ(0,"div",11)(1,"div",12)(2,"div",13),t._UZ(3,"img",14),t.TgZ(4,"a",15),t._uU(5),t.qZA(),t._UZ(6,"br"),t.qZA(),t._UZ(7,"hr"),t._uU(8),t.qZA()()),2&o){const e=n.$implicit;t.xp6(3),t.Q6J("src",e.user.avatar_url,t.LSH),t.xp6(1),t.Q6J("href",e.user.html_url,t.LSH),t.xp6(1),t.Oqu(e.user.login),t.xp6(3),t.hij(" ",e.body," ")}}function Z(o,n){1&o&&t._UZ(0,"ng2-adsense",16)}const x=function(){return[]};function F(o,n){if(1&o&&(t.TgZ(0,"div",3)(1,"div",4)(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"date"),t.qZA(),t._UZ(7,"hr")(8,"div",5)(9,"hr",6),t.TgZ(10,"h3"),t._uU(11,"comments"),t.qZA(),t.YNc(12,L,9,4,"div",7),t.TgZ(13,"p"),t._uU(14," \u30b3\u30e1\u30f3\u30c8\u306f\u3053\u3061\u3089\u304b\u3089 "),t.TgZ(15,"a",8),t._uU(16),t.qZA(),t._UZ(17,"br"),t._uU(18," \u203b\u30ea\u30ea\u30fc\u30b9\u30bf\u30a4\u30df\u30f3\u30b0\u306e\u554f\u984c\u4e0a\u30da\u30fc\u30b8\u306b\u53cd\u6620\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304c\u78ba\u8a8d\u3057\u3066\u307e\u3059\u3002 "),t.qZA()(),t.TgZ(19,"div",9),t.YNc(20,Z,1,0,"ng2-adsense",10),t.qZA()()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.article.title),t.xp6(2),t.Oqu(t.xi3(6,7,e.article.created_at,"yyyy.MM.dd hh:mm")),t.xp6(3),t.Q6J("innerHTML",e.marked.parse(e.article.body),t.oJD),t.xp6(4),t.Q6J("ngForOf",e.article.comments),t.xp6(3),t.Q6J("href",e.article.html_url,t.LSH),t.xp6(1),t.Oqu(e.article.html_url),t.xp6(4),t.Q6J("ngForOf",t.DdM(10,x).constructor(e.adsLength))}}let C=(()=>{class o{constructor(e,s,l,h){this.titleService=e,this.route=s,this.router=l,this.messageService=h,this.marked=c.TU,c.TU.setOptions({highlight:function(f,v){const J=u.Z.getLanguage(v)?v:"plaintext";return u.Z.highlight(f,{language:J}).value},langPrefix:"hljs language-",gfm:!0,breaks:!0})}ngOnInit(){this.article$.then(e=>{this.titleService.setTitle(`kemu tech blog | ${e.title}`),this.article=e})}get article$(){return i(6738)(`./${this.route.snapshot.paramMap.get("id")}.json`).catch(e=>this.router.navigate(["/log"]).then(s=>this.messageService.messages.push({type:"warning",body:"\u8a18\u4e8b\u304c\u5b58\u5728\u3057\u3066\u3044\u307e\u305b\u3093"})))}get adsLength(){return window.screen.width>=768?4:1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.Dx),t.Y36(a.gz),t.Y36(a.F0),t.Y36(y.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-detail"]],decls:3,vars:1,consts:[["rel","stylesheet","href","//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/styles/default.min.css"],[1,"container-fluid"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-8"],[3,"innerHTML"],[1,"mt-5"],["class","card",4,"ngFor","ngForOf"],[3,"href"],[1,"col-md-4"],["style","display: block","adFormat","fluid","slot","9091938102","layoutKey","-ef+6k-30-ac+ty",4,"ngFor","ngForOf"],[1,"card"],[1,"card-body"],[1,"row"],[2,"width","50px",3,"src"],[2,"display","contents",3,"href"],["adFormat","fluid","slot","9091938102","layoutKey","-ef+6k-30-ac+ty",2,"display","block"]],template:function(e,s){1&e&&(t._UZ(0,"link",0),t.TgZ(1,"div",1),t.YNc(2,F,21,11,"div",2),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",s.article))},directives:[r.O5,r.sg,m.nq],pipes:[r.uU],styles:["[_nghost-%COMP%]     img{max-width:100%}"]}),o})();var T=i(3031);const _=function(o){return{"background-color":o}};function A(o,n){if(1&o&&(t.TgZ(0,"p",19),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("ngStyle",t.VKq(2,_,"#"+e.color)),t.xp6(1),t.hij(" ",e.name," ")}}function O(o,n){1&o&&t._UZ(0,"ng-adsense",20)}function U(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div",6),t.NdJ("click",function(){const h=t.CHM(e).$implicit;return t.oxw().transitToDetail(h)}),t.TgZ(2,"div",7)(3,"div",8),t._UZ(4,"img",9),t.qZA(),t.TgZ(5,"div",10)(6,"div",11)(7,"div",12)(8,"h5",13),t._uU(9),t.qZA(),t.TgZ(10,"div",14),t.YNc(11,A,2,4,"p",15),t.qZA()(),t._UZ(12,"hr",16),t.TgZ(13,"p",17),t._uU(14),t.qZA()()()()(),t.YNc(15,O,1,0,"ng-adsense",18),t.qZA()}if(2&o){const e=n.$implicit,s=n.index,l=t.oxw();t.xp6(4),t.Q6J("src",l.articles[e].photo,t.LSH),t.xp6(5),t.Oqu(l.articles[e].title),t.xp6(2),t.Q6J("ngForOf",l.getLabels(l.articles[e])),t.xp6(3),t.hij("",l.articles[e].body,"..."),t.xp6(1),t.Q6J("ngIf",(s+1)%3==0)}}function b(o,n){1&o&&t._UZ(0,"ng2-adsense",21)}const w=function(){return[]},M=[{path:"",component:(()=>{class o{constructor(e,s){this.router=s,e.setTitle("kemu logs")}get articles(){return T}get articleKeys(){return Object.keys(this.articles).sort((e,s)=>e>s?-1:1)}get adsLength(){return window.screen.width>=768?Math.floor(Object.keys(this.articles).length/3):1}getLabels(e){return e.labels.filter(s=>"log"!==s.name)}transitToDetail(e){this.router.navigate(["/log",e])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.Dx),t.Y36(a.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-list"]],decls:6,vars:3,consts:[[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-8"],[4,"ngFor","ngForOf"],[1,"col-md-4"],["style","display: block","adFormat","fluid","slot","9091938102","layoutKey","-ef+6k-30-ac+ty",4,"ngFor","ngForOf"],[1,"card","mt-1",2,"cursor","pointer",3,"click"],[1,"row","g-0"],[1,"col-3"],["alt","no image",2,"max-width","100%",3,"src"],[1,"col-9"],[1,"card-body"],[1,"row"],[1,"col-9","card-link"],[1,"col-3","text-end"],["class","badge rounded-pill",3,"ngStyle",4,"ngFor","ngForOf"],[1,"mt-0"],[1,"card-text"],["adFormat","horizontal",4,"ngIf"],[1,"badge","rounded-pill",3,"ngStyle"],["adFormat","horizontal"],["adFormat","fluid","slot","9091938102","layoutKey","-ef+6k-30-ac+ty",2,"display","block"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,U,16,5,"div",3),t.qZA(),t.TgZ(4,"div",4),t.YNc(5,b,1,0,"ng2-adsense",5),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngForOf",s.articleKeys),t.xp6(2),t.Q6J("ngForOf",t.DdM(2,w).constructor(s.adsLength)))},directives:[r.sg,r.PC,r.O5,m.nq],encapsulation:2}),o})()},{path:":id",component:C}];let D=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(M)],a.Bz]}),o})(),k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.ez,D,m.ih.forRoot({adClient:"ca-pub-6219032039771696"})]]}),o})()},6738:(g,p,i)=>{var r={"./1168270695.json":[379,379],"./list.json":[3031]};function a(c){if(!i.o(r,c))return Promise.resolve().then(()=>{var d=new Error("Cannot find module '"+c+"'");throw d.code="MODULE_NOT_FOUND",d});var u=r[c],t=u[0];return Promise.all(u.slice(1).map(i.e)).then(()=>i.t(t,19))}a.keys=()=>Object.keys(r),a.id=6738,g.exports=a},3031:g=>{"use strict";g.exports=JSON.parse('{"1168270695":{"title":"2021-12-31 ~ 2022-01-02 \u6de1\u8def\u5cf6\u65c5\u884c","body":"[\u30db\u30c6\u30eb&\u30ea\u30be\u30fc\u30c4\u6de1\u8def\u5cf6](https://www.daiwaresort.jp/awaji/index.html)\u306b\u884c\u3063\u3066\u304d\u305f\u306e\u3067\u8a18\u9332\u3002 2021-12-31\u7a93\u304b\u3089\u306e\u666f\u8272\u3001\u6d77\u306e\u8fd1\u304f\u306a\u306e\u3067\u3068\u3066\u3082\u3044\u3044\u611f","labels":[{"name":"log","color":"F9846C"}],"photo":"https://user-images.githubusercontent.com/29157528/158165173-d086ce6a-02c0-4eea-8e4c-289dd814a8cb.png"}}')}}]);