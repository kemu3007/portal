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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b1bd5e678601099a0fd20c09b7470329855a7cfaca8ee9fdcdee3b0cc71b81653df38f4415ce0e4030c23499b580c412ffc787b122d334509067012913969e4c"' : 'data-target="#xs-components-links-module-AppModule-b1bd5e678601099a0fd20c09b7470329855a7cfaca8ee9fdcdee3b0cc71b81653df38f4415ce0e4030c23499b580c412ffc787b122d334509067012913969e4c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b1bd5e678601099a0fd20c09b7470329855a7cfaca8ee9fdcdee3b0cc71b81653df38f4415ce0e4030c23499b580c412ffc787b122d334509067012913969e4c"' :
                                            'id="xs-components-links-module-AppModule-b1bd5e678601099a0fd20c09b7470329855a7cfaca8ee9fdcdee3b0cc71b81653df38f4415ce0e4030c23499b580c412ffc787b122d334509067012913969e4c"' }>
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
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogModule-cfc856cc975e9b10c84727c65df46e51f9f0d70456a105a55ace48f03d7de7c71283e59f2a233ad9949f19089bda2727b869fc396fda5420cea6593cb255ffdd"' : 'data-target="#xs-components-links-module-BlogModule-cfc856cc975e9b10c84727c65df46e51f9f0d70456a105a55ace48f03d7de7c71283e59f2a233ad9949f19089bda2727b869fc396fda5420cea6593cb255ffdd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-cfc856cc975e9b10c84727c65df46e51f9f0d70456a105a55ace48f03d7de7c71283e59f2a233ad9949f19089bda2727b869fc396fda5420cea6593cb255ffdd"' :
                                            'id="xs-components-links-module-BlogModule-cfc856cc975e9b10c84727c65df46e51f9f0d70456a105a55ace48f03d7de7c71283e59f2a233ad9949f19089bda2727b869fc396fda5420cea6593cb255ffdd"' }>
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
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-3a5335e45aab7c087c33f4cd1668bd9facbc9e1b71c24109983cb78e1a8e963ef2638d44f8d6606e5c533f2b7529d880072506f2953d55bc2b71e9e6f922694b"' : 'data-target="#xs-components-links-module-HomeModule-3a5335e45aab7c087c33f4cd1668bd9facbc9e1b71c24109983cb78e1a8e963ef2638d44f8d6606e5c533f2b7529d880072506f2953d55bc2b71e9e6f922694b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-3a5335e45aab7c087c33f4cd1668bd9facbc9e1b71c24109983cb78e1a8e963ef2638d44f8d6606e5c533f2b7529d880072506f2953d55bc2b71e9e6f922694b"' :
                                            'id="xs-components-links-module-HomeModule-3a5335e45aab7c087c33f4cd1668bd9facbc9e1b71c24109983cb78e1a8e963ef2638d44f8d6606e5c533f2b7529d880072506f2953d55bc2b71e9e6f922694b"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LogModule.html" data-type="entity-link" >LogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LogModule-ec0b05c4aca38d695ff1a0b8d71bda633238c1660346aa70e3b89d5df6e5ad0fad3ded27224052edde677e962133adb38de55dd681e393a8cfcaf7d869caca70"' : 'data-target="#xs-components-links-module-LogModule-ec0b05c4aca38d695ff1a0b8d71bda633238c1660346aa70e3b89d5df6e5ad0fad3ded27224052edde677e962133adb38de55dd681e393a8cfcaf7d869caca70"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogModule-ec0b05c4aca38d695ff1a0b8d71bda633238c1660346aa70e3b89d5df6e5ad0fad3ded27224052edde677e962133adb38de55dd681e393a8cfcaf7d869caca70"' :
                                            'id="xs-components-links-module-LogModule-ec0b05c4aca38d695ff1a0b8d71bda633238c1660346aa70e3b89d5df6e5ad0fad3ded27224052edde677e962133adb38de55dd681e393a8cfcaf7d869caca70"' }>
                                            <li class="link">
                                                <a href="components/LogDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogRoutingModule.html" data-type="entity-link" >LogRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-603c447712142647cfab4ce8e2b386bfeab38ecd6c7f087555df7335ce92ce17ae743c91391665c9e0c8c02bc8878ad9d8dd1bfeee3ccbe9d31aae7694f8e6bf"' : 'data-target="#xs-components-links-module-SharedModule-603c447712142647cfab4ce8e2b386bfeab38ecd6c7f087555df7335ce92ce17ae743c91391665c9e0c8c02bc8878ad9d8dd1bfeee3ccbe9d31aae7694f8e6bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-603c447712142647cfab4ce8e2b386bfeab38ecd6c7f087555df7335ce92ce17ae743c91391665c9e0c8c02bc8878ad9d8dd1bfeee3ccbe9d31aae7694f8e6bf"' :
                                            'id="xs-components-links-module-SharedModule-603c447712142647cfab4ce8e2b386bfeab38ecd6c7f087555df7335ce92ce17ae743c91391665c9e0c8c02bc8878ad9d8dd1bfeee3ccbe9d31aae7694f8e6bf"' }>
                                            <li class="link">
                                                <a href="components/AmazonAdsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmazonAdsComponent</a>
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
                                                <a href="components/TweetBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TweetBtnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-603c447712142647cfab4ce8e2b386bfeab38ecd6c7f087555df7335ce92ce17ae743c91391665c9e0c8c02bc8878ad9d8dd1bfeee3ccbe9d31aae7694f8e6bf"' : 'data-target="#xs-pipes-links-module-SharedModule-603c447712142647cfab4ce8e2b386bfeab38ecd6c7f087555df7335ce92ce17ae743c91391665c9e0c8c02bc8878ad9d8dd1bfeee3ccbe9d31aae7694f8e6bf"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-603c447712142647cfab4ce8e2b386bfeab38ecd6c7f087555df7335ce92ce17ae743c91391665c9e0c8c02bc8878ad9d8dd1bfeee3ccbe9d31aae7694f8e6bf"' :
                                            'id="xs-pipes-links-module-SharedModule-603c447712142647cfab4ce8e2b386bfeab38ecd6c7f087555df7335ce92ce17ae743c91391665c9e0c8c02bc8878ad9d8dd1bfeee3ccbe9d31aae7694f8e6bf"' }>
                                            <li class="link">
                                                <a href="pipes/MdescapePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MdescapePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToolsModule.html" data-type="entity-link" >ToolsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ToolsModule-134e8f62b7d8bb806eb2301d1bda2faac84b6eeeb0af54263711e17e30b5a1fa3c080a85fa747d133b075b81a56d35f11a2958cd75382a780d1b7b31d97ff86e"' : 'data-target="#xs-components-links-module-ToolsModule-134e8f62b7d8bb806eb2301d1bda2faac84b6eeeb0af54263711e17e30b5a1fa3c080a85fa747d133b075b81a56d35f11a2958cd75382a780d1b7b31d97ff86e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ToolsModule-134e8f62b7d8bb806eb2301d1bda2faac84b6eeeb0af54263711e17e30b5a1fa3c080a85fa747d133b075b81a56d35f11a2958cd75382a780d1b7b31d97ff86e"' :
                                            'id="xs-components-links-module-ToolsModule-134e8f62b7d8bb806eb2301d1bda2faac84b6eeeb0af54263711e17e30b5a1fa3c080a85fa747d133b075b81a56d35f11a2958cd75382a780d1b7b31d97ff86e"' }>
                                            <li class="link">
                                                <a href="components/AmazonAssociateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmazonAssociateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JsonFormatterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JsonFormatterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JsonTyperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JsonTyperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RealtimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RealtimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInfoComponent</a>
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
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/UserInfoState.html" data-type="entity-link" >UserInfoState</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BreadcrumbService.html" data-type="entity-link" >BreadcrumbService</a>
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
                                    <a href="injectables/UserInfoService.html" data-type="entity-link" >UserInfoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
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
                                <a href="interfaces/Headers.html" data-type="entity-link" >Headers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Http.html" data-type="entity-link" >Http</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Label.html" data-type="entity-link" >Label</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Label-1.html" data-type="entity-link" >Label</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LabelDetail.html" data-type="entity-link" >LabelDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LabelDetail-1.html" data-type="entity-link" >LabelDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Log.html" data-type="entity-link" >Log</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogDetail.html" data-type="entity-link" >LogDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reactions.html" data-type="entity-link" >Reactions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reactions-1.html" data-type="entity-link" >Reactions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestContext.html" data-type="entity-link" >RequestContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/state.html" data-type="entity-link" >state</a>
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
                            <li class="link">
                                <a href="interfaces/UserInfo.html" data-type="entity-link" >UserInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});