"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[113],{9113:(O,c,r)=>{r.r(c),r.d(c,{LogModule:()=>w});var n=r(9808),a=r(6609),l=r(7445),d=r(5698),t=r(5e3),h=r(8304),v=r(803),f=r(2313),u=r(5695),m=r(2209),b=r(1441),g=r(1175);function y(o,s){if(1&o&&(t.TgZ(0,"div",19)(1,"div",20)(2,"div",4),t._UZ(3,"img",21),t.TgZ(4,"a",22),t._uU(5),t.qZA(),t._UZ(6,"br"),t.qZA(),t._UZ(7,"hr",23),t._uU(8),t.qZA()()),2&o){const e=s.$implicit;t.xp6(3),t.Q6J("src",e.user.avatar_url,t.LSH),t.xp6(1),t.Q6J("href",e.user.html_url,t.LSH),t.xp6(1),t.Oqu(e.user.login),t.xp6(3),t.hij(" ",e.body," ")}}function Z(o,s){if(1&o&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),t._UZ(4,"app-lazy-img",6),t.qZA(),t.TgZ(5,"div",7)(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"div",8)(9,"p",9),t._uU(10),t.ALo(11,"date"),t.qZA(),t._UZ(12,"app-tweet-btn"),t.qZA(),t.TgZ(13,"p",9),t._uU(14),t.ALo(15,"date"),t.qZA()()(),t._UZ(16,"hr")(17,"div",10)(18,"hr",11),t.TgZ(19,"div",8)(20,"h3",12),t._uU(21,"comments"),t.qZA(),t._UZ(22,"app-tweet-btn"),t.qZA(),t.YNc(23,y,9,4,"div",13),t.TgZ(24,"p",14),t._uU(25," \u30b3\u30e1\u30f3\u30c8\u306f"),t.TgZ(26,"a",15),t._uU(27,"\u3053\u3061\u3089"),t._UZ(28,"i",16),t.qZA(),t._uU(29,"\u304b\u3089 "),t._UZ(30,"br"),t._uU(31," \u203b\u30ea\u30ea\u30fc\u30b9\u30bf\u30a4\u30df\u30f3\u30b0\u306e\u554f\u984c\u4e0a\u30da\u30fc\u30b8\u306b\u53cd\u6620\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304c\u78ba\u8a8d\u3057\u3066\u307e\u3059\u3002 "),t.qZA()(),t.TgZ(32,"div",17),t._UZ(33,"app-ads",18),t.qZA()()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("src","/assets/images/"+e.article.id+".png")("alt",e.article.title)("title",e.article.title),t.xp6(3),t.Oqu(e.article.title),t.xp6(3),t.hij("\u4f5c\u6210\u65e5: ",t.xi3(11,10,e.article.created_at,"yyyy.MM.dd hh:mm"),""),t.xp6(4),t.hij("\u6700\u7d42\u66f4\u65b0\u65e5: ",t.xi3(15,13,e.article.updated_at,"yyyy.MM.dd hh:mm"),""),t.xp6(3),t.Q6J("innerHTML",e.html,t.oJD),t.xp6(6),t.Q6J("ngForOf",e.article.comments),t.xp6(3),t.Q6J("href",e.article.html_url,t.LSH),t.xp6(7),t.Q6J("count",e.adsLength)}}let x=(()=>{class o{constructor(e,i,p,F,T){this.route=e,this.breadcrumbService=i,this.markedService=p,this.sanitizer=F,this.articlesService=T,this.marked=this.markedService.marked,this.html="",this.comments=[]}get article(){return this._article}set article(e){e&&(this._article=e,this.breadcrumbService.breadcrumb=`/log/${e.title}`,this.html=this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(e.body)),this.route.snapshot.fragment&&(0,l.F)(100).pipe((0,d.q)(1)).subscribe(i=>{window.location.replace(`${window.location.origin}${window.location.pathname}#${this.route.snapshot.fragment}`)}))}ngOnInit(){this.articlesService.get(`/assets/logs/${this.issueId}.json`).subscribe(e=>this.article=e),this.articlesService.getComments(`/assets/comments/${this.issueId}.json`).subscribe(e=>this.comments=e)}ngAfterViewInit(){(0,l.F)(500).pipe((0,d.q)(1)).subscribe(e=>{const i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js",document.getElementById("container").insertAdjacentElement("afterend",i)})}get issueId(){return this.route.snapshot.paramMap.get("id")}get adsLength(){return window.screen.width>=768?4:1}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.gz),t.Y36(h.p),t.Y36(v.$),t.Y36(f.H7),t.Y36(u.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-detail"]],decls:2,vars:1,consts:[[1,"container-fluid"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-8","border-end","border-2"],[1,"row"],[1,"col-md-4"],[1,"img-thumbnail","img-fluid","mb-2",3,"src","alt","title"],[1,"col-md-8"],[1,"d-flex","justify-content-between"],[1,"text-muted"],[3,"innerHTML"],[1,"mt-5"],["id","comments"],["class","card",4,"ngFor","ngForOf"],[1,"mt-3"],[3,"href"],[1,"bi","bi-link-45deg"],[1,"col-md-4","bg-light"],["type","box",3,"count"],[1,"card"],[1,"card-body"],[2,"width","50px",3,"src"],[2,"display","contents",3,"href"],[1,"mt-0","mb-1"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Z,34,16,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",i.article))},directives:[n.O5,m.U,b.x,n.sg,g.F],pipes:[n.uU],styles:["[_nghost-%COMP%]     img{max-width:100%;box-shadow:0 .125rem .25rem #00000014!important}[_nghost-%COMP%]     pre{border:solid 1px grey;background-color:#000;border-radius:.25rem;box-shadow:0 .125rem .25rem #00000014!important;padding-bottom:10px}[_nghost-%COMP%]     ul{padding-left:15px}[_nghost-%COMP%]     pre>code>ol>li{list-style-type:decimal;width:100%}[_nghost-%COMP%]     pre>code>ol>li::marker{color:gray}[_nghost-%COMP%]     pre>code>ol{display:grid}[_nghost-%COMP%]     .codespan{color:#f39c12;font-style:oblique;font-weight:bolder}"]}),o})();const L=function(o){return["/log",o]};function A(o,s){if(1&o&&(t.TgZ(0,"div",6)(1,"a",7)(2,"div",8),t._UZ(3,"app-lazy-img",9),t.qZA(),t.TgZ(4,"div",10)(5,"div",11)(6,"h3",12),t._uU(7),t.qZA(),t.TgZ(8,"p",13),t._uU(9),t.qZA()()()()()),2&o){const e=s.$implicit,i=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(4,L,e)),t.xp6(2),t.Q6J("src",i.articles[e].photo),t.xp6(4),t.hij(" ",i.articles[e].title," "),t.xp6(2),t.Oqu(i.articles[e].body)}}const C=[{path:"",component:(()=>{class o{constructor(e){this.articleService=e,this.articles={}}ngOnInit(){this.articleService.getList("/assets/logs/list.json").subscribe(e=>this.articles=e)}get articleKeys(){return Object.keys(this.articles).sort((e,i)=>e>i?-1:1)}get adsLength(){return window.screen.width>=768&&Math.floor(Object.keys(this.articles).length/3)||1}getLabels(e){return e.labels.filter(i=>"log"!==i.name)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-list"]],decls:6,vars:2,consts:[[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-9","row","mx-0","border-end","border-2"],["class","col-md-4 bg-light px-0 mx-0",4,"ngFor","ngForOf"],[1,"col-md-3"],["type","box",3,"count"],[1,"col-md-4","bg-light","px-0","mx-0"],[1,"card","shadow","mt-1","text-decoration-none","text-muted","h-100",2,"cursor","pointer",3,"routerLink"],["id","thumbnail",1,"img-thumbnail"],["alt","no image",3,"src"],[1,"card-body"],[1,"row"],[1,"card-title","text-black"],[1,"card-text"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,A,10,6,"div",3),t.qZA(),t.TgZ(4,"div",4),t._UZ(5,"app-ads",5),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngForOf",i.articleKeys),t.xp6(2),t.Q6J("count",i.adsLength))},directives:[n.sg,a.yS,m.U,g.F],styles:["#thumbnail[_ngcontent-%COMP%]{height:200px;overflow-y:hidden}"]}),o})()},{path:":id",component:x}];let M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(C)],a.Bz]}),o})();var U=r(4466);let w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,M,U.m]]}),o})()}}]);