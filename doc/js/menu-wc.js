'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">portal documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-1b5c2a27f6f9db73bd061e87d89696c92cef007823ee538c76ce99d981609ea37ed290a23f6079f92aab5f5d2631501a05b7c619eb3cbe3334c25e9ccc43989e"' : 'data-bs-target="#xs-components-links-module-AppModule-1b5c2a27f6f9db73bd061e87d89696c92cef007823ee538c76ce99d981609ea37ed290a23f6079f92aab5f5d2631501a05b7c619eb3cbe3334c25e9ccc43989e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1b5c2a27f6f9db73bd061e87d89696c92cef007823ee538c76ce99d981609ea37ed290a23f6079f92aab5f5d2631501a05b7c619eb3cbe3334c25e9ccc43989e"' :
                                            'id="xs-components-links-module-AppModule-1b5c2a27f6f9db73bd061e87d89696c92cef007823ee538c76ce99d981609ea37ed290a23f6079f92aab5f5d2631501a05b7c619eb3cbe3334c25e9ccc43989e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link" >BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BlogModule-64ef4a7e855209236e43a8d60af77613d05af11531de3c43408b6a07c15e198c9c590bd9a1172a9e6adac65f02754f7b5da24d21f9c1196e3bf455d8a4f0304b"' : 'data-bs-target="#xs-components-links-module-BlogModule-64ef4a7e855209236e43a8d60af77613d05af11531de3c43408b6a07c15e198c9c590bd9a1172a9e6adac65f02754f7b5da24d21f9c1196e3bf455d8a4f0304b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-64ef4a7e855209236e43a8d60af77613d05af11531de3c43408b6a07c15e198c9c590bd9a1172a9e6adac65f02754f7b5da24d21f9c1196e3bf455d8a4f0304b"' :
                                            'id="xs-components-links-module-BlogModule-64ef4a7e855209236e43a8d60af77613d05af11531de3c43408b6a07c15e198c9c590bd9a1172a9e6adac65f02754f7b5da24d21f9c1196e3bf455d8a4f0304b"' }>
                                            <li class="link">
                                                <a href="components/BlogDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogRoutingModule.html" data-type="entity-link" >BlogRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-3c282d58f566dcdfcda27620fd5fc7f01aa3584abebed6ea1a0bcf5b2bf6d6533c29f7a686dafeee208139c14401e88fae63f3249b4f822dc16aeb6d923d92ea"' : 'data-bs-target="#xs-components-links-module-HomeModule-3c282d58f566dcdfcda27620fd5fc7f01aa3584abebed6ea1a0bcf5b2bf6d6533c29f7a686dafeee208139c14401e88fae63f3249b4f822dc16aeb6d923d92ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-3c282d58f566dcdfcda27620fd5fc7f01aa3584abebed6ea1a0bcf5b2bf6d6533c29f7a686dafeee208139c14401e88fae63f3249b4f822dc16aeb6d923d92ea"' :
                                            'id="xs-components-links-module-HomeModule-3c282d58f566dcdfcda27620fd5fc7f01aa3584abebed6ea1a0bcf5b2bf6d6533c29f7a686dafeee208139c14401e88fae63f3249b4f822dc16aeb6d923d92ea"' }>
                                            <li class="link">
                                                <a href="components/IndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-ca0a332aaeeec38522915df7ba1e4ea2cdf5c149c3b65ab34a640bd9d6e8e284a144e86279c6863c9cbe317f2a985e01d53c4d404b768b58ce18745e2f221cfc"' : 'data-bs-target="#xs-components-links-module-SharedModule-ca0a332aaeeec38522915df7ba1e4ea2cdf5c149c3b65ab34a640bd9d6e8e284a144e86279c6863c9cbe317f2a985e01d53c4d404b768b58ce18745e2f221cfc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-ca0a332aaeeec38522915df7ba1e4ea2cdf5c149c3b65ab34a640bd9d6e8e284a144e86279c6863c9cbe317f2a985e01d53c4d404b768b58ce18745e2f221cfc"' :
                                            'id="xs-components-links-module-SharedModule-ca0a332aaeeec38522915df7ba1e4ea2cdf5c149c3b65ab34a640bd9d6e8e284a144e86279c6863c9cbe317f2a985e01d53c4d404b768b58ce18745e2f221cfc"' }>
                                            <li class="link">
                                                <a href="components/AdsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdsModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdsModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AmazonAdsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmazonAdsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LazyImgComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LazyImgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TweetBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TweetBtnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-ca0a332aaeeec38522915df7ba1e4ea2cdf5c149c3b65ab34a640bd9d6e8e284a144e86279c6863c9cbe317f2a985e01d53c4d404b768b58ce18745e2f221cfc"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-ca0a332aaeeec38522915df7ba1e4ea2cdf5c149c3b65ab34a640bd9d6e8e284a144e86279c6863c9cbe317f2a985e01d53c4d404b768b58ce18745e2f221cfc"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-ca0a332aaeeec38522915df7ba1e4ea2cdf5c149c3b65ab34a640bd9d6e8e284a144e86279c6863c9cbe317f2a985e01d53c4d404b768b58ce18745e2f221cfc"' :
                                            'id="xs-pipes-links-module-SharedModule-ca0a332aaeeec38522915df7ba1e4ea2cdf5c149c3b65ab34a640bd9d6e8e284a144e86279c6863c9cbe317f2a985e01d53c4d404b768b58ce18745e2f221cfc"' }>
                                            <li class="link">
                                                <a href="pipes/MdescapePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MdescapePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/YearPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YearPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SnippetModule.html" data-type="entity-link" >SnippetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SnippetModule-89381208e9079c341805347d6c6e5e38b6c948d3eafbf3e5d8f8a543133b13446a75035674ac2886e6132a1556dde563c93b7a6d1b52aec267683bfe91deec20"' : 'data-bs-target="#xs-components-links-module-SnippetModule-89381208e9079c341805347d6c6e5e38b6c948d3eafbf3e5d8f8a543133b13446a75035674ac2886e6132a1556dde563c93b7a6d1b52aec267683bfe91deec20"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SnippetModule-89381208e9079c341805347d6c6e5e38b6c948d3eafbf3e5d8f8a543133b13446a75035674ac2886e6132a1556dde563c93b7a6d1b52aec267683bfe91deec20"' :
                                            'id="xs-components-links-module-SnippetModule-89381208e9079c341805347d6c6e5e38b6c948d3eafbf3e5d8f8a543133b13446a75035674ac2886e6132a1556dde563c93b7a6d1b52aec267683bfe91deec20"' }>
                                            <li class="link">
                                                <a href="components/SnippetListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SnippetListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SnippetRoutingModule.html" data-type="entity-link" >SnippetRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ToolsModule.html" data-type="entity-link" >ToolsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ToolsModule-6c1a04e543a69c8edd4c6dd17d336273525945cbc99d377d8ecd881af12aac11d2348204247ecaf18313cf14bdd35ed0dd1628fcd00dd7329a0484848f16117c"' : 'data-bs-target="#xs-components-links-module-ToolsModule-6c1a04e543a69c8edd4c6dd17d336273525945cbc99d377d8ecd881af12aac11d2348204247ecaf18313cf14bdd35ed0dd1628fcd00dd7329a0484848f16117c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ToolsModule-6c1a04e543a69c8edd4c6dd17d336273525945cbc99d377d8ecd881af12aac11d2348204247ecaf18313cf14bdd35ed0dd1628fcd00dd7329a0484848f16117c"' :
                                            'id="xs-components-links-module-ToolsModule-6c1a04e543a69c8edd4c6dd17d336273525945cbc99d377d8ecd881af12aac11d2348204247ecaf18313cf14bdd35ed0dd1628fcd00dd7329a0484848f16117c"' }>
                                            <li class="link">
                                                <a href="components/Base64Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Base64Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FxCalcComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FxCalcComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JsonFormatterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JsonFormatterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JsonTyperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JsonTyperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MdwriterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MdwriterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MermaidComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MermaidComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpenapiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenapiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RealtimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RealtimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StarNoteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StarNoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YearCheckComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YearCheckComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToolsRoutingModule.html" data-type="entity-link" >ToolsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ToolsListComponent-1.html" data-type="entity-link" >ToolsListComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdsModalService.html" data-type="entity-link" >AdsModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArticlesService.html" data-type="entity-link" >ArticlesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link" >LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarkedService.html" data-type="entity-link" >MarkedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterService.html" data-type="entity-link" >RouterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnippetService.html" data-type="entity-link" >SnippetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToolsService.html" data-type="entity-link" >ToolsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AlertMessage.html" data-type="entity-link" >AlertMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Article.html" data-type="entity-link" >Article</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArticleDetail.html" data-type="entity-link" >ArticleDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Env.html" data-type="entity-link" >Env</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Label.html" data-type="entity-link" >Label</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LabelDetail.html" data-type="entity-link" >LabelDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reactions.html" data-type="entity-link" >Reactions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reactions-1.html" data-type="entity-link" >Reactions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Snippet.html" data-type="entity-link" >Snippet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tool.html" data-type="entity-link" >Tool</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});