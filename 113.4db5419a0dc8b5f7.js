"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[113],{9113:(Q,l,n)=>{n.r(l),n.d(l,{LogModule:()=>S});var r=n(9808),c=n(6609),m=n(7445),g=n(5698),t=n(5e3),a=n(2313),p=n(8304),h=n(3094),u=n(5695),v=n(1441),d=n(1175);function f(i,s){if(1&i&&(t.TgZ(0,"div",16)(1,"div",17)(2,"div",18),t._UZ(3,"img",19),t.TgZ(4,"a",20),t._uU(5),t.qZA(),t._UZ(6,"br"),t.qZA(),t._UZ(7,"hr",21),t._uU(8),t.qZA()()),2&i){const e=s.$implicit;t.xp6(3),t.Q6J("src",e.user.avatar_url,t.LSH),t.xp6(1),t.Q6J("href",e.user.html_url,t.LSH),t.xp6(1),t.Oqu(e.user.login),t.xp6(3),t.hij(" ",e.body," ")}}function Z(i,s){if(1&i&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4),t._UZ(3,"img",5),t.qZA(),t.TgZ(4,"div",6)(5,"p"),t._uU(6),t.ALo(7,"date"),t.qZA(),t._UZ(8,"app-tweet-btn"),t.qZA(),t._UZ(9,"hr")(10,"div",7)(11,"hr",8),t.TgZ(12,"div",6)(13,"h3",9),t._uU(14,"comments"),t.qZA(),t._UZ(15,"app-tweet-btn"),t.qZA(),t.YNc(16,f,9,4,"div",10),t.TgZ(17,"p",11),t._uU(18," \u30b3\u30e1\u30f3\u30c8\u306f"),t.TgZ(19,"a",12),t._uU(20,"\u3053\u3061\u3089"),t._UZ(21,"i",13),t.qZA(),t._uU(22,"\u304b\u3089 "),t._UZ(23,"br"),t._uU(24," \u203b\u30ea\u30ea\u30fc\u30b9\u30bf\u30a4\u30df\u30f3\u30b0\u306e\u554f\u984c\u4e0a\u30da\u30fc\u30b8\u306b\u53cd\u6620\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u304c\u78ba\u8a8d\u3057\u3066\u307e\u3059\u3002 "),t.qZA()(),t.TgZ(25,"div",14),t._UZ(26,"app-ads",15),t.qZA()()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("src","/assets/images/"+e.article.id+".png",t.LSH)("alt",e.article.title)("title",e.article.title),t.xp6(3),t.Oqu(t.xi3(7,8,e.article.created_at,"yyyy.MM.dd hh:mm")),t.xp6(4),t.Q6J("innerHTML",e.html,t.oJD),t.xp6(6),t.Q6J("ngForOf",e.article.comments),t.xp6(3),t.Q6J("href",e.article.html_url,t.LSH),t.xp6(7),t.Q6J("count",e.adsLength)}}let L=(()=>{class i{constructor(e,o,w,J,M,O){this.titleService=e,this.route=o,this.breadcrumbService=w,this.markedService=J,this.sanitizer=M,this.articlesService=O,this.marked=this.markedService.marked,this.html="",this.comments=[]}get article(){return this._article}set article(e){e&&(this.titleService.setTitle(`${e.title} | Kemu Log`),this._article=e,this.breadcrumbService.breadcrumb=`/blog/${e.title}`,this.html=this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(e.body)),this.route.snapshot.fragment&&(0,m.F)(100).pipe((0,g.q)(1)).subscribe(o=>{window.location.replace(`${window.location.origin}${window.location.pathname}#${this.route.snapshot.fragment}`)}))}ngOnInit(){this.articlesService.get(`/assets/logs/${this.issueId}.json`).subscribe(e=>this.article=e),this.articlesService.getComments(`/assets/comments/${this.issueId}.json`).subscribe(e=>this.comments=e)}get issueId(){return this.route.snapshot.paramMap.get("id")}get adsLength(){return window.screen.width>=768?4:1}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(a.Dx),t.Y36(c.gz),t.Y36(p.p),t.Y36(h.$),t.Y36(a.H7),t.Y36(u.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-blog-detail"]],decls:2,vars:1,consts:[[1,"container-fluid"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-8"],[1,"d-flex","justify-content-center"],[1,"img-thumbnail","img-fluid","mb-2",3,"src","alt","title"],[1,"d-flex","justify-content-between"],[3,"innerHTML"],[1,"mt-5"],["id","comments"],["class","card",4,"ngFor","ngForOf"],[1,"mt-3"],[3,"href"],[1,"bi","bi-link-45deg"],[1,"col-md-4"],["type","box",3,"count"],[1,"card"],[1,"card-body"],[1,"row"],[2,"width","50px",3,"src"],[2,"display","contents",3,"href"],[1,"mt-0","mb-1"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Z,27,11,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.article))},directives:[r.O5,v.x,r.sg,d.F],pipes:[r.uU],styles:["[_nghost-%COMP%]     img{max-width:100%}[_nghost-%COMP%]     pre>code{border-radius:10px}"]}),i})();var b=n(6235);const x=function(i){return{"background-color":i}};function y(i,s){if(1&i&&(t.TgZ(0,"p",20),t._uU(1),t.qZA()),2&i){const e=s.$implicit;t.Q6J("ngStyle",t.VKq(2,x,"#"+e.color)),t.xp6(1),t.hij(" ",e.name," ")}}const A=function(i){return["/log",i]};function C(i,s){if(1&i&&(t.TgZ(0,"div")(1,"a",6)(2,"div",7)(3,"div",8),t._UZ(4,"img",9),t.qZA(),t.TgZ(5,"div",10)(6,"div",11)(7,"div",12)(8,"h3",13),t._uU(9),t.qZA(),t.TgZ(10,"div",14),t.YNc(11,y,2,4,"p",15),t.qZA()(),t._UZ(12,"hr",16),t.TgZ(13,"p",17),t._uU(14),t.ALo(15,"mdescape"),t.qZA()()()()(),t.TgZ(16,"div",18),t._UZ(17,"app-ads",19),t.qZA()()),2&i){const e=s.$implicit,o=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(7,A,e)),t.xp6(3),t.Q6J("src",o.articles[e].photo,t.LSH),t.xp6(5),t.hij(" ",o.articles[e].title," "),t.xp6(2),t.Q6J("ngForOf",o.getLabels(o.articles[e])),t.xp6(3),t.Oqu(t.lcZ(15,5,o.articles[e].body))}}const T=[{path:"",component:(()=>{class i{constructor(e,o){this.articleService=o,this.articles={},e.setTitle("Kemu Log")}ngOnInit(){this.articleService.getList("/assets/logs/list.json").subscribe(e=>this.articles=e)}get articleKeys(){return Object.keys(this.articles).sort((e,o)=>e>o?-1:1)}get adsLength(){return window.screen.width>=768&&Math.floor(Object.keys(this.articles).length/3)||1}getLabels(e){return e.labels.filter(o=>"log"!==o.name)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(a.Dx),t.Y36(u.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-blog-list"]],decls:6,vars:2,consts:[[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-8"],[4,"ngFor","ngForOf"],[1,"col-md-4"],["type","box",3,"count"],[1,"card","mt-1","text-decoration-none","text-muted",2,"cursor","pointer",3,"routerLink"],[1,"row","g-0"],[1,"col-3"],["alt","no image",1,"img-thumbnail","img-fluid",3,"src"],[1,"col-9"],[1,"card-body"],[1,"row"],[1,"col-9","card-link","text-black"],[1,"col-3","text-end"],["class","badge rounded-pill",3,"ngStyle",4,"ngFor","ngForOf"],[1,"mt-0"],[1,"card-text"],[1,"card","mt-1"],["type","auto"],[1,"badge","rounded-pill",3,"ngStyle"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,C,18,9,"div",3),t.qZA(),t.TgZ(4,"div",4),t._UZ(5,"app-ads",5),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngForOf",o.articleKeys),t.xp6(2),t.Q6J("count",o.adsLength))},directives:[r.sg,c.yS,r.PC,d.F],pipes:[b.G],encapsulation:2}),i})()},{path:":id",component:L}];let U=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.Bz.forChild(T)],c.Bz]}),i})();var F=n(4466);let S=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[r.ez,U,F.m]]}),i})()}}]);