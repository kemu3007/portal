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
                                            'data-target="#components-links-module-HomeModule-a6a7825cdba51010c35ba981175c9a518610ba5e8069b52c1d6dbf1bb726e4ecc99d858eaeddb4dac63a8829ffabf6662b75167a202d4e16437fc0609c0f4f72"' : 'data-target="#xs-components-links-module-HomeModule-a6a7825cdba51010c35ba981175c9a518610ba5e8069b52c1d6dbf1bb726e4ecc99d858eaeddb4dac63a8829ffabf6662b75167a202d4e16437fc0609c0f4f72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-a6a7825cdba51010c35ba981175c9a518610ba5e8069b52c1d6dbf1bb726e4ecc99d858eaeddb4dac63a8829ffabf6662b75167a202d4e16437fc0609c0f4f72"' :
                                            'id="xs-components-links-module-HomeModule-a6a7825cdba51010c35ba981175c9a518610ba5e8069b52c1d6dbf1bb726e4ecc99d858eaeddb4dac63a8829ffabf6662b75167a202d4e16437fc0609c0f4f72"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexComponent</a>
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
                                            'data-target="#components-links-module-SharedModule-280880f65a35b8b0e8099858eef9b369b25fa9d26f2e32bca2e2ee2897f0b4b839b7c2c1cff8794edd91907e9a7593d68cd5a90ae09827b92aadd3ce9228d20c"' : 'data-target="#xs-components-links-module-SharedModule-280880f65a35b8b0e8099858eef9b369b25fa9d26f2e32bca2e2ee2897f0b4b839b7c2c1cff8794edd91907e9a7593d68cd5a90ae09827b92aadd3ce9228d20c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-280880f65a35b8b0e8099858eef9b369b25fa9d26f2e32bca2e2ee2897f0b4b839b7c2c1cff8794edd91907e9a7593d68cd5a90ae09827b92aadd3ce9228d20c"' :
                                            'id="xs-components-links-module-SharedModule-280880f65a35b8b0e8099858eef9b369b25fa9d26f2e32bca2e2ee2897f0b4b839b7c2c1cff8794edd91907e9a7593d68cd5a90ae09827b92aadd3ce9228d20c"' }>
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
                            </li>
                            <li class="link">
                                <a href="modules/ToolsModule.html" data-type="entity-link" >ToolsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ToolsModule-0031a60054e9d07587a0b6dc482421e42553dc8d0a6ee9ab9d20e9967af50b9fe9771f55d615831c042bd9f25317384ecf1208a570f116ebc97a059cfe4c4c87"' : 'data-target="#xs-components-links-module-ToolsModule-0031a60054e9d07587a0b6dc482421e42553dc8d0a6ee9ab9d20e9967af50b9fe9771f55d615831c042bd9f25317384ecf1208a570f116ebc97a059cfe4c4c87"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ToolsModule-0031a60054e9d07587a0b6dc482421e42553dc8d0a6ee9ab9d20e9967af50b9fe9771f55d615831c042bd9f25317384ecf1208a570f116ebc97a059cfe4c4c87"' :
                                            'id="xs-components-links-module-ToolsModule-0031a60054e9d07587a0b6dc482421e42553dc8d0a6ee9ab9d20e9967af50b9fe9771f55d615831c042bd9f25317384ecf1208a570f116ebc97a059cfe4c4c87"' }>
                                            <li class="link">
                                                <a href="components/ToolsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolsListComponent</a>
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
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
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