"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[601],{5601:(k,m,s)=>{s.r(m),s.d(m,{BlogModule:()=>D});var x=s(8653),t=s(3184),d=s(5711),Z=s(9612),_=s(318),v=s(5695),f=s(4128),c=s(6362),g=s(1915),b=s(2209),T=s(1441),y=s(1175);function A(i,o){1&i&&(t.ynx(0),t.TgZ(1,"div",17)(2,"p",16),t._uU(3,"This page is translated by deepl."),t.qZA()(),t.BQk())}function I(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",26)(2,"div",27),t._uU(3,"\u6b21\u306e\u8a18\u4e8b"),t.qZA(),t.TgZ(4,"div",28)(5,"span",29),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return a.navigateByIssueId(a.nextArticleId)}),t._uU(6),t.qZA()()(),t.BQk()}if(2&i){const e=t.oxw(2);t.xp6(6),t.Oqu(e.articles[e.nextArticleId].title)}}function B(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",26)(2,"div",27),t._uU(3,"\u524d\u306e\u8a18\u4e8b"),t.qZA(),t.TgZ(4,"div",28)(5,"span",29),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return a.navigateByIssueId(a.pastArticleId)}),t._uU(6),t.qZA()()(),t.BQk()}if(2&i){const e=t.oxw(2);t.xp6(6),t.Oqu(e.articles[e.pastArticleId].title)}}function C(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"select",4,5),t.NdJ("change",function(){t.CHM(e);const a=t.MAs(3);return t.oxw().routeLangPage(a.value)}),t.TgZ(4,"option",6),t._uU(5,"Select Your Language (ja, en, zh)"),t.qZA(),t.TgZ(6,"option",7),t._uU(7,"Japanese"),t.qZA(),t.TgZ(8,"option",8),t._uU(9,"English"),t.qZA(),t.TgZ(10,"option",9),t._uU(11,"Chinese"),t.qZA()(),t.YNc(12,A,4,0,"ng-container",10),t.TgZ(13,"div",11)(14,"div",12),t._UZ(15,"app-lazy-img",13),t.qZA(),t.TgZ(16,"div",14)(17,"h2"),t._uU(18),t.qZA(),t.TgZ(19,"p",15),t._uU(20),t.ALo(21,"date"),t.qZA(),t.TgZ(22,"p",16),t._uU(23),t.ALo(24,"date"),t.qZA(),t.TgZ(25,"div",17),t._UZ(26,"app-tweet-btn"),t.qZA()()(),t._UZ(27,"hr")(28,"div",18)(29,"hr",19),t.TgZ(30,"p",20),t._uU(31," \u30b3\u30e1\u30f3\u30c8\u306f"),t.TgZ(32,"a",21),t._uU(33,"\u3053\u3061\u3089"),t._UZ(34,"i",22),t.qZA(),t._uU(35,"\u304b\u3089 "),t._UZ(36,"br"),t.qZA(),t._UZ(37,"hr"),t.TgZ(38,"h3"),t._uU(39,"\u5225\u306e\u8a18\u4e8b\u3092\u898b\u308b"),t.qZA(),t.TgZ(40,"div",2)(41,"div",23),t.YNc(42,I,7,1,"ng-container",10),t.qZA(),t.TgZ(43,"div",23),t.YNc(44,B,7,1,"ng-container",10),t.qZA()()(),t.TgZ(45,"div",24),t._UZ(46,"app-ads",25),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(2),t.Q6J("value",e.langage),t.xp6(10),t.Q6J("ngIf",e.isTranslated),t.xp6(3),t.Q6J("src",e.imageUrl)("alt",e.article.title)("title",e.article.title),t.xp6(3),t.Oqu(e.article.title),t.xp6(2),t.hij("\u767a\u884c\u65e5\u6642: ",t.xi3(21,13,e.article.created_at,"yyyy.MM.dd hh:mm"),""),t.xp6(3),t.hij("\u6700\u7d42\u66f4\u65b0\u65e5: ",t.xi3(24,16,e.article.updated_at,"yyyy.MM.dd hh:mm"),""),t.xp6(5),t.Q6J("innerHTML",e.html,t.oJD),t.xp6(4),t.Q6J("href",e.article.html_url,t.LSH),t.xp6(10),t.Q6J("ngIf",e.nextArticleId),t.xp6(2),t.Q6J("ngIf",e.pastArticleId),t.xp6(2),t.Q6J("count",e.adsLength)}}let u=(()=>{class i{constructor(e,n,a,l,r,h){this.route=e,this.markedService=n,this.sanitizer=a,this.articlesService=l,this.router=r,this.loadingService=h,this.url="/assets/articles/",this.marked=this.markedService.marked,this.articles={},this.html="",this.isTranslated&&(this.url=this.url+this.route.snapshot.data.lang+"/")}get isTranslated(){return"ja"!==this.route.snapshot.data.lang}get imageUrl(){return this.isTranslated?`/assets/images/en/${this.issueId}.png`:`/assets/images/${this.issueId}.png`}get originalUrl(){return["/blog",this.issueId]}get article(){return this._article}set article(e){e&&(this._article=e,this.html=this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(e.body)))}get issueId(){return this.route.snapshot.paramMap.get("id")}get langage(){return this.route.snapshot.data.lang}routeLangPage(e){this.router.navigate("ja"===e?["/blog",this.issueId]:["/blog",e,this.issueId])}ngOnInit(){this.loadingService.loading=!0,this.articlesService.getList(`${this.url}list.json`).subscribe(e=>{this.articles=e,(0,x.F)(100).subscribe(n=>this.loadingService.loading=!1)}),this.articlesService.get(`${this.url}${this.issueId}.json`).subscribe(e=>this.article=e)}get adsLength(){return window.screen.width>=768?4:1}get articleIds(){return Object.keys(this.articles)}navigateByIssueId(e){this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.navigate(["../",e],{relativeTo:this.route})}get nextArticleId(){if(this.articleIds.length){const e=this.articleIds.map(n=>Number(n)).filter(n=>n>Number(this.issueId));return e.length?Math.min(...e).toString():null}return null}get pastArticleId(){if(this.articleIds.length){const e=this.articleIds.map(n=>Number(n)).filter(n=>n<Number(this.issueId));return e.length?Math.max(...e).toString():null}return null}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.gz),t.Y36(Z.$),t.Y36(_.H7),t.Y36(v.J),t.Y36(d.F0),t.Y36(f.b))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-blog-detail"]],decls:2,vars:1,consts:[["id","container",1,"container-fluid"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-8","border-end","border-2","pb-5"],[1,"mt-1","form-select",3,"value","change"],["select",""],["disabled","","selected",""],["value","ja"],["value","en"],["value","zh"],[4,"ngIf"],[1,"row","mt-3"],[1,"col-md-4"],[3,"src","alt","title"],[1,"col-md-8"],[1,"text-muted","mb-1"],[1,"text-muted"],[1,"d-flex","justify-content-end"],[3,"innerHTML"],[1,"mt-5"],[1,"mt-3"],[3,"href"],[1,"bi","bi-link-45deg"],[1,"col-md-6"],[1,"col-md-4","bg-light"],["type","box",3,"count"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"link-primary",2,"cursor","pointer",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,C,47,19,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.article))},directives:[c.O5,g.YN,g.Kr,b.U,T.x,y.F],pipes:[c.uU],styles:["[_nghost-%COMP%]  img{max-width:100%;box-shadow:0 .125rem .25rem #00000014!important}[_nghost-%COMP%]  pre{background-color:#2d2d2d;border-radius:5px;padding:10px}[_nghost-%COMP%]  ul{padding-left:15px}[_nghost-%COMP%]  li{list-style-type:circle}[_nghost-%COMP%]  pre>code>ol>li{list-style-type:decimal;width:100%}[_nghost-%COMP%]  pre>code>ol>li::marker{color:gray}[_nghost-%COMP%]  pre>code>ol{display:grid}[_nghost-%COMP%]  .codespan{color:#f39c12;font-style:oblique;font-weight:bolder}  .modal-body>img{max-width:100%;box-shadow:0 .125rem .25rem #00000014!important}  .modal-body>pre{background-color:#2d2d2d;border-radius:5px;padding:10px}  .modal-body>ul{padding-left:15px}  .modal-body>li{list-style-type:circle}  .modal-body>pre>code>ol>li{list-style-type:decimal;width:100%}  .modal-body>pre>code>ol>li::marker{color:gray}  .modal-body>pre>code>ol{display:grid}  .modal-body>.codespan{color:#f39c12;font-style:oblique;font-weight:bolder}"]}),i})();var U=s(1989),M=s(8977),L=s(635),S=s(5524),J=s(1318),j=s(6361);function q(i,o){1&i&&(t.ynx(0),t.TgZ(1,"div",17)(2,"p",18),t._uU(3,"This page is translated by deepl."),t.qZA()(),t.BQk())}const O=function(i){return{"background-color":i}};function z(i,o){if(1&i&&(t.TgZ(0,"p",28),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("ngStyle",t.VKq(2,O,"#"+e.color)),t.xp6(1),t.hij(" ",e.name," ")}}function F(i,o){1&i&&(t.TgZ(0,"div",29),t._UZ(1,"app-ads",30),t.qZA())}const N=function(i){return[i]};function Q(i,o){if(1&i&&(t.TgZ(0,"div")(1,"a",19)(2,"div",20)(3,"div",1)(4,"h3",21),t._uU(5),t.qZA(),t.TgZ(6,"div",22),t.YNc(7,z,2,4,"p",23),t.qZA(),t.TgZ(8,"div",24),t._uU(9),t.ALo(10,"date"),t.qZA()(),t._UZ(11,"hr",25),t.TgZ(12,"p",26),t._uU(13),t.qZA()()(),t.YNc(14,F,2,0,"div",27),t.qZA()),2&i){const e=o.$implicit,n=o.index,a=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(9,N,e)),t.xp6(4),t.hij(" ",a.articles[e].title," "),t.xp6(2),t.Q6J("ngForOf",a.getLabels(a.articles[e])),t.xp6(2),t.Oqu(t.xi3(10,6,a.articles[e].created_at,"yyyy.MM.dd")),t.xp6(4),t.Oqu(a.articles[e].body),t.xp6(1),t.Q6J("ngIf",(n+1)%3==0)}}let p=(()=>{class i{constructor(e,n,a,l){this.router=e,this.articleService=n,this.route=a,this.loadingService=l,this.url="/assets/articles/list.json",this.articles={},this.pageSize=10,this.pageIndex=0,this.search=r=>r.pipe((0,U.b)(200),(0,M.x)()).pipe((0,L.U)(h=>Object.keys(this.searchData).filter(E=>E.toLowerCase().includes(h.toLowerCase())))),"ja"!==a.snapshot.data.lang&&(this.url=`/assets/articles/${a.snapshot.data.lang}/list.json`)}ngOnInit(){this.loadingService.loading=!0,this.articleService.getList(this.url).subscribe(n=>{this.articles=n,(0,S.H)(100).subscribe(a=>this.loadingService.loading=!1)});const e=this.route.snapshot.queryParamMap.get("page");e&&(this.pageIndex=Number(e))}get isTranslated(){return"ja"!==this.route.snapshot.data.lang}get langage(){return this.route.snapshot.data.lang}routeLangPage(e){this.router.navigate("ja"===e?["/blog"]:["/blog",e])}get articleKeys(){return Object.keys(this.articles).sort((e,n)=>e>n?-1:1)}get searchData(){const e={};return Object.keys(this.articles).forEach(n=>{const a=`${this.articles[n].title} | ${this.getLabels(this.articles[n])[0].name}`;e[a]=n}),e}get adsLength(){return window.screen.width>=768?5:1}getLabels(e){return e.labels.filter(n=>"article"!==n.name)}selectArticle(e){this.router.navigate([this.searchData[e.item]])}switchPage(e){this.pageIndex=e.pageIndex,this.router.navigate([],{queryParams:{page:this.pageIndex}})}get displayArticles(){const e=this.pageIndex*this.pageSize;return this.articleKeys.slice(e,e+this.pageSize)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.F0),t.Y36(v.J),t.Y36(d.gz),t.Y36(f.b))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-blog-list"]],decls:21,vars:8,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-8","border-end","border-2"],[1,"mt-1","form-select",3,"value","change"],["select",""],["disabled","","selected",""],["value","ja"],["value","en"],["value","zh"],[4,"ngIf"],["placeholder","Search...","NgbTypeahead","",1,"form-control","mb-1","mt-3",3,"ngbTypeahead","selectItem","blur"],["instance","ngbTypeahead"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["hidePageSize","","showFirstLastButtons","",3,"length","pageSize","pageIndex","page"],[1,"col-md-4","bg-light"],["type","box",3,"count"],[1,"d-flex","justify-content-end"],[1,"text-muted"],[1,"card","shadow","mt-1","text-decoration-none","text-muted",2,"cursor","pointer",3,"routerLink"],[1,"card-body"],[1,"col-9","card-link","text-black","mb-0"],[1,"col-3","d-flex","align-items-start","justify-content-end"],["class","badge rounded-pill",3,"ngStyle",4,"ngFor","ngForOf"],[1,"col-12"],[1,"mt-0"],[1,"card-text"],["class","card shadow mt-1",4,"ngIf"],[1,"badge","rounded-pill",3,"ngStyle"],[1,"card","shadow","mt-1"],["type","auto"]],template:function(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"select",3,4),t.NdJ("change",function(){t.CHM(a);const r=t.MAs(4);return n.routeLangPage(r.value)}),t.TgZ(5,"option",5),t._uU(6,"Select Your Language (ja, en, zh)"),t.qZA(),t.TgZ(7,"option",6),t._uU(8,"Japanese"),t.qZA(),t.TgZ(9,"option",7),t._uU(10,"English"),t.qZA(),t.TgZ(11,"option",8),t._uU(12,"Chinese"),t.qZA()(),t.YNc(13,q,4,0,"ng-container",9),t.TgZ(14,"input",10,11),t.NdJ("selectItem",function(r){return n.selectArticle(r)})("blur",function(){return t.CHM(a),t.MAs(15).dismissPopup()}),t.qZA(),t.YNc(16,Q,15,11,"div",12),t.TgZ(17,"div",13)(18,"mat-paginator",14),t.NdJ("page",function(r){return n.switchPage(r)}),t.qZA()()(),t.TgZ(19,"div",15),t._UZ(20,"app-ads",16),t.qZA()()()}2&e&&(t.xp6(3),t.Q6J("value",n.langage),t.xp6(10),t.Q6J("ngIf",n.isTranslated),t.xp6(1),t.Q6J("ngbTypeahead",n.search),t.xp6(2),t.Q6J("ngForOf",n.displayArticles),t.xp6(2),t.Q6J("length",n.articleKeys.length)("pageSize",10)("pageIndex",n.pageIndex),t.xp6(2),t.Q6J("count",n.adsLength))},directives:[g.YN,g.Kr,c.O5,J.dR,c.sg,d.yS,c.PC,y.F,j.NW],pipes:[c.uU],encapsulation:2}),i})();const w=[{path:"",component:p,data:{lang:"ja"}},{path:"en",component:p,data:{lang:"en"}},{path:"zh",component:p,data:{lang:"zh"}},{path:":id",component:u,data:{lang:"ja"}},{path:"en/:id",component:u,data:{lang:"en"}},{path:"zh/:id",component:u,data:{lang:"zh"}}];let Y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.Bz.forChild(w)],d.Bz]}),i})();var P=s(4466);let D=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,Y,P.m]]}),i})()}}]);
//# sourceMappingURL=601.6169694572afd2a5.js.map