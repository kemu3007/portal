"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[601],{5601:(N,g,s)=>{s.r(g),s.d(g,{BlogModule:()=>E});var h=s(7445),v=s(5698),t=s(5e3),c=s(6609),f=s(8304),x=s(803),Z=s(2313),p=s(5695),l=s(9808),y=s(2209),b=s(1441),m=s(1175);function A(i,o){if(1&i&&(t.TgZ(0,"div",23)(1,"div",24)(2,"div",25),t._UZ(3,"img",26),t.TgZ(4,"a",27),t._uU(5),t.qZA(),t._UZ(6,"br"),t.qZA(),t._UZ(7,"hr",28),t._uU(8),t.qZA()()),2&i){const e=o.$implicit;t.xp6(3),t.Q6J("src",e.user.avatar_url,t.LSH),t.xp6(1),t.Q6J("href",e.user.html_url,t.LSH),t.xp6(1),t.Oqu(e.user.login),t.xp6(3),t.hij(" ",e.body," ")}}function _(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",23)(2,"div",29),t._uU(3,"\u6b21\u306e\u8a18\u4e8b"),t.qZA(),t.TgZ(4,"div",30)(5,"span",31),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return r.navigateByIssueId(r.nextArticleId)}),t._uU(6),t.qZA()()(),t.BQk()}if(2&i){const e=t.oxw(2);t.xp6(6),t.Oqu(e.articles[e.nextArticleId].title)}}function B(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",23)(2,"div",29),t._uU(3,"\u524d\u306e\u8a18\u4e8b"),t.qZA(),t.TgZ(4,"div",30)(5,"span",31),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return r.navigateByIssueId(r.pastArticleId)}),t._uU(6),t.qZA()()(),t.BQk()}if(2&i){const e=t.oxw(2);t.xp6(6),t.Oqu(e.articles[e.pastArticleId].title)}}function T(i,o){if(1&i&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),t._UZ(4,"app-lazy-img",6),t.qZA(),t.TgZ(5,"div",7)(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"p",8),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"p",9),t._uU(12),t.ALo(13,"date"),t.qZA(),t.TgZ(14,"div",10),t._UZ(15,"app-tweet-btn"),t.qZA()()(),t._UZ(16,"hr")(17,"div",11)(18,"hr",12),t.TgZ(19,"div",13)(20,"h2",14),t._uU(21,"Comments"),t.qZA(),t._UZ(22,"app-tweet-btn"),t.qZA(),t.YNc(23,A,9,4,"div",15),t.TgZ(24,"p",16),t._uU(25," \u30b3\u30e1\u30f3\u30c8\u306f"),t.TgZ(26,"a",17),t._uU(27,"\u3053\u3061\u3089"),t._UZ(28,"i",18),t.qZA(),t._uU(29,"\u304b\u3089 "),t._UZ(30,"br"),t._uU(31," \u203b\u30ea\u30ea\u30fc\u30b9\u30bf\u30a4\u30df\u30f3\u30b0\u306e\u554f\u984c\u4e0a\u30da\u30fc\u30b8\u306b\u53cd\u6620\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304c\u78ba\u8a8d\u3057\u3066\u307e\u3059\u3002 "),t.qZA(),t._UZ(32,"hr"),t.TgZ(33,"h3"),t._uU(34,"\u5225\u306e\u8a18\u4e8b\u3092\u898b\u308b"),t.qZA(),t.TgZ(35,"div",4)(36,"div",19),t.YNc(37,_,7,1,"ng-container",20),t.qZA(),t.TgZ(38,"div",19),t.YNc(39,B,7,1,"ng-container",20),t.qZA()()(),t.TgZ(40,"div",21),t._UZ(41,"app-ads",22),t.qZA()()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("src","/assets/images/"+e.article.id+".png")("alt",e.article.title)("title",e.article.title),t.xp6(3),t.Oqu(e.article.title),t.xp6(2),t.hij("\u767a\u884c\u65e5\u6642: ",t.xi3(10,12,e.article.created_at,"yyyy.MM.dd hh:mm"),""),t.xp6(3),t.hij("\u6700\u7d42\u66f4\u65b0\u65e5: ",t.xi3(13,15,e.article.updated_at,"yyyy.MM.dd hh:mm"),""),t.xp6(5),t.Q6J("innerHTML",e.html,t.oJD),t.xp6(6),t.Q6J("ngForOf",e.comments),t.xp6(3),t.Q6J("href",e.article.html_url,t.LSH),t.xp6(11),t.Q6J("ngIf",e.nextArticleId),t.xp6(2),t.Q6J("ngIf",e.pastArticleId),t.xp6(2),t.Q6J("count",e.adsLength)}}let C=(()=>{class i{constructor(e,n,r,d,a,u){this.route=e,this.breadcrumbService=n,this.markedService=r,this.sanitizer=d,this.articlesService=a,this.router=u,this.marked=this.markedService.marked,this.articles={},this.comments=[],this.html=""}get article(){return this._article}set article(e){e&&(this._article=e,this.breadcrumbService.breadcrumb=`/blog/${e.title}`,this.html=this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(e.body)),this.route.snapshot.fragment&&(0,h.F)(100).pipe((0,v.q)(1)).subscribe(n=>{window.location.replace(`${window.location.origin}${window.location.pathname}#${this.route.snapshot.fragment}`)}))}get issueId(){return this.route.snapshot.paramMap.get("id")}ngOnInit(){this.articlesService.getList("/assets/articles/list.json").subscribe(e=>this.articles=e),this.articlesService.get(`/assets/articles/${this.issueId}.json`).subscribe(e=>this.article=e),this.articlesService.getComments(`/assets/comments/${this.issueId}.json`).subscribe(e=>this.comments=e)}get adsLength(){return window.screen.width>=768?4:1}get articleIds(){return Object.keys(this.articles)}navigateByIssueId(e){this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.navigate(["/blog/",e])}get nextArticleId(){if(this.articleIds.length){const e=this.articleIds.map(n=>Number(n)).filter(n=>n>Number(this.issueId));return e.length?Math.min(...e).toString():null}return null}get pastArticleId(){if(this.articleIds.length){const e=this.articleIds.map(n=>Number(n)).filter(n=>n<Number(this.issueId));return e.length?Math.max(...e).toString():null}return null}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.gz),t.Y36(f.p),t.Y36(x.$),t.Y36(Z.H7),t.Y36(p.J),t.Y36(c.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-blog-detail"]],decls:2,vars:1,consts:[["id","container",1,"container-fluid"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-8","border-end","border-2"],[1,"row"],[1,"col-md-4"],[3,"src","alt","title"],[1,"col-md-8"],[1,"text-muted","mb-1"],[1,"text-muted"],[1,"d-flex","justify-content-end"],[3,"innerHTML"],[1,"mt-5"],[1,"d-flex","justify-content-between"],["id","comments"],["class","card",4,"ngFor","ngForOf"],[1,"mt-3"],[3,"href"],[1,"bi","bi-link-45deg"],[1,"col-md-6"],[4,"ngIf"],[1,"col-md-4","bg-light"],["type","box",3,"count"],[1,"card"],[1,"card-body","pt-1","ps-1"],[1,"d-flex"],["width","24",3,"src"],[1,"ms-2",3,"href"],[1,"mt-1","mb-1"],[1,"card-header"],[1,"card-body"],[1,"link-primary",2,"cursor","pointer",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,T,42,18,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.article))},directives:[l.O5,y.U,b.x,l.sg,m.F],pipes:[l.uU],styles:["[_nghost-%COMP%]     img{max-width:100%;box-shadow:0 .125rem .25rem #00000014!important}[_nghost-%COMP%]     pre{background-color:#2d2d2d;border-radius:5px;padding:10px}[_nghost-%COMP%]     ul{padding-left:15px}[_nghost-%COMP%]     li{list-style-type:circle}[_nghost-%COMP%]     pre>code>ol>li{list-style-type:decimal;width:100%}[_nghost-%COMP%]     pre>code>ol>li::marker{color:gray}[_nghost-%COMP%]     pre>code>ol{display:grid}[_nghost-%COMP%]     .codespan{color:#f39c12;font-style:oblique;font-weight:bolder}"]}),i})();var I=s(8372),U=s(1884),M=s(4004),L=s(7569),F=s(5682);const S=function(i){return{"background-color":i}};function w(i,o){if(1&i&&(t.TgZ(0,"p",20),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("ngStyle",t.VKq(2,S,"#"+e.color)),t.xp6(1),t.hij(" ",e.name," ")}}function J(i,o){1&i&&(t.TgZ(0,"div",21),t._UZ(1,"app-ads",22),t.qZA())}const O=function(i){return["/blog",i]};function q(i,o){if(1&i&&(t.TgZ(0,"div")(1,"a",10)(2,"div",11)(3,"div",12)(4,"h3",13),t._uU(5),t.qZA(),t.TgZ(6,"div",14),t.YNc(7,w,2,4,"p",15),t.qZA(),t.TgZ(8,"div",16),t._uU(9),t.ALo(10,"date"),t.qZA()(),t._UZ(11,"hr",17),t.TgZ(12,"p",18),t._uU(13),t.qZA()()(),t.YNc(14,J,2,0,"div",19),t.qZA()),2&i){const e=o.$implicit,n=o.index,r=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(9,O,e)),t.xp6(4),t.hij(" ",r.articles[e].title," "),t.xp6(2),t.Q6J("ngForOf",r.getLabels(r.articles[e])),t.xp6(2),t.Oqu(t.xi3(10,6,r.articles[e].created_at,"yyyy.MM.dd")),t.xp6(4),t.Oqu(r.articles[e].body),t.xp6(1),t.Q6J("ngIf",(n+1)%3==0)}}const Q=[{path:"",component:(()=>{class i{constructor(e,n,r){this.router=e,this.articleService=n,this.route=r,this.articles={},this.pageSize=10,this.pageIndex=0,this.search=d=>d.pipe((0,I.b)(200),(0,U.x)()).pipe((0,M.U)(a=>Object.keys(this.searchData).filter(u=>u.toLowerCase().includes(a.toLowerCase()))))}ngOnInit(){this.articleService.getList("/assets/articles/list.json").subscribe(n=>this.articles=n);const e=this.route.snapshot.queryParamMap.get("page");e&&(this.pageIndex=Number(e))}get articleKeys(){return Object.keys(this.articles).sort((e,n)=>e>n?-1:1)}get searchData(){const e={};return Object.keys(this.articles).forEach(n=>{const r=`${this.articles[n].title} | ${this.getLabels(this.articles[n])[0].name}`;e[r]=n}),e}get adsLength(){return window.screen.width>=768?5:1}getLabels(e){return e.labels.filter(n=>"article"!==n.name)}selectArticle(e){this.router.navigate(["/blog",this.searchData[e.item]])}switchPage(e){this.pageIndex=e.pageIndex,this.router.navigate([],{queryParams:{page:this.pageIndex}})}get displayArticles(){const e=this.pageIndex*this.pageSize;return this.articleKeys.slice(e,e+this.pageSize)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.F0),t.Y36(p.J),t.Y36(c.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-blog-list"]],decls:12,vars:9,consts:[[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-8","border-end","border-2"],["placeholder","search","NgbTypeahead","",1,"form-control",3,"ngbTypeahead","selectItem","blur"],["instance","ngbTypeahead"],[1,"d-flex","justify-content-center"],["hidePageSize","","showFirstLastButtons","",3,"length","pageSize","pageIndex","page"],[4,"ngFor","ngForOf"],[1,"col-md-4","bg-light"],["type","box",3,"count"],[1,"card","shadow","mt-1","text-decoration-none","text-muted",2,"cursor","pointer",3,"routerLink"],[1,"card-body"],[1,"row"],[1,"col-9","card-link","text-black","mb-0"],[1,"col-3","d-flex","align-items-start","justify-content-end"],["class","badge rounded-pill",3,"ngStyle",4,"ngFor","ngForOf"],[1,"col-12"],[1,"mt-0"],[1,"card-text"],["class","card shadow mt-1",4,"ngIf"],[1,"badge","rounded-pill",3,"ngStyle"],[1,"card","shadow","mt-1"],["type","auto"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"input",3,4),t.NdJ("selectItem",function(a){return n.selectArticle(a)})("blur",function(){return t.CHM(r),t.MAs(4).dismissPopup()}),t.qZA(),t.TgZ(5,"div",5)(6,"mat-paginator",6),t.NdJ("page",function(a){return n.switchPage(a)}),t.qZA()(),t.YNc(7,q,15,11,"div",7),t.TgZ(8,"div",5)(9,"mat-paginator",6),t.NdJ("page",function(a){return n.switchPage(a)}),t.qZA()()(),t.TgZ(10,"div",8),t._UZ(11,"app-ads",9),t.qZA()()()}2&e&&(t.xp6(3),t.Q6J("ngbTypeahead",n.search),t.xp6(3),t.Q6J("length",n.articleKeys.length)("pageSize",10)("pageIndex",n.pageIndex),t.xp6(1),t.Q6J("ngForOf",n.displayArticles),t.xp6(2),t.Q6J("length",n.articleKeys.length)("pageSize",10)("pageIndex",n.pageIndex),t.xp6(2),t.Q6J("count",n.adsLength))},directives:[L.dR,F.NW,l.sg,c.yS,l.PC,l.O5,m.F],pipes:[l.uU],encapsulation:2}),i})()},{path:":id",component:C}];let D=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.Bz.forChild(Q)],c.Bz]}),i})();var j=s(4466);let E=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.ez,D,j.m]]}),i})()}}]);