var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"IndexComponent"},{"path":"contact","component":"ContactComponent"}],"kind":"module"}],"module":"HomeModule"}]},{"path":"blog","loadChildren":"./blog/blog.module#BlogModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/blog/blog-routing.module.ts","module":"BlogRoutingModule","children":[{"path":"","component":"BlogListComponent"},{"path":":id","component":"BlogDetailComponent"}],"kind":"module"}],"module":"BlogModule"}]},{"path":"log","loadChildren":"./log/log.module#LogModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/log/log-routing.module.ts","module":"LogRoutingModule","children":[{"path":"","component":"LogListComponent"},{"path":":id","component":"LogDetailComponent"}],"kind":"module"}],"module":"LogModule"}]},{"path":"tools","loadChildren":"./tools/tools.module#ToolsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tools/tools-routing.module.ts","module":"ToolsRoutingModule","children":[{"path":"","component":"ToolsListComponent"},{"path":"userInfo","component":"UserInfoComponent"},{"path":"amazonAssociate","component":"AmazonAssociateComponent"},{"path":"jsonTyper","component":"JsonTyperComponent"},{"path":"realtime","component":"RealtimeComponent"},{"path":"jsonFormatter","component":"JsonFormatterComponent"}],"kind":"module"}],"module":"ToolsModule"}]}],"kind":"module"}]}