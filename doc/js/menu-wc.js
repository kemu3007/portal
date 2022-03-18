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
                                            'data-target="#components-links-module-AppModule-c10384a71e4d6739a8fd7b8d925c439cfe7c3937a90996cb2ecb6d66f9fe0e6574f50ab743edec96798c4e5d89a873a528156bc1b3d6abafc4b164c2dca73cd3"' : 'data-target="#xs-components-links-module-AppModule-c10384a71e4d6739a8fd7b8d925c439cfe7c3937a90996cb2ecb6d66f9fe0e6574f50ab743edec96798c4e5d89a873a528156bc1b3d6abafc4b164c2dca73cd3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c10384a71e4d6739a8fd7b8d925c439cfe7c3937a90996cb2ecb6d66f9fe0e6574f50ab743edec96798c4e5d89a873a528156bc1b3d6abafc4b164c2dca73cd3"' :
                                            'id="xs-components-links-module-AppModule-c10384a71e4d6739a8fd7b8d925c439cfe7c3937a90996cb2ecb6d66f9fe0e6574f50ab743edec96798c4e5d89a873a528156bc1b3d6abafc4b164c2dca73cd3"' }>
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
                                            'data-target="#components-links-module-BlogModule-1ef6342dc629d5171d6c9ee57572e14d42c8d2f5c1ea0cfeceb90f3cb23c26f1f31bbdd7786dba0eb827e9adeb51fa46ca6bad0e78351eb8e44fb03197cea12f"' : 'data-target="#xs-components-links-module-BlogModule-1ef6342dc629d5171d6c9ee57572e14d42c8d2f5c1ea0cfeceb90f3cb23c26f1f31bbdd7786dba0eb827e9adeb51fa46ca6bad0e78351eb8e44fb03197cea12f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-1ef6342dc629d5171d6c9ee57572e14d42c8d2f5c1ea0cfeceb90f3cb23c26f1f31bbdd7786dba0eb827e9adeb51fa46ca6bad0e78351eb8e44fb03197cea12f"' :
                                            'id="xs-components-links-module-BlogModule-1ef6342dc629d5171d6c9ee57572e14d42c8d2f5c1ea0cfeceb90f3cb23c26f1f31bbdd7786dba0eb827e9adeb51fa46ca6bad0e78351eb8e44fb03197cea12f"' }>
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
                                            'data-target="#components-links-module-HomeModule-9634b939b10155647be3a0ec4a29c51121a9595963302cd6bcbce7a03db461cf3b60efbeb2b619b4fc2d4395f688f0d669ebd1f5ec93897cdf05ffaa84979639"' : 'data-target="#xs-components-links-module-HomeModule-9634b939b10155647be3a0ec4a29c51121a9595963302cd6bcbce7a03db461cf3b60efbeb2b619b4fc2d4395f688f0d669ebd1f5ec93897cdf05ffaa84979639"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-9634b939b10155647be3a0ec4a29c51121a9595963302cd6bcbce7a03db461cf3b60efbeb2b619b4fc2d4395f688f0d669ebd1f5ec93897cdf05ffaa84979639"' :
                                            'id="xs-components-links-module-HomeModule-9634b939b10155647be3a0ec4a29c51121a9595963302cd6bcbce7a03db461cf3b60efbeb2b619b4fc2d4395f688f0d669ebd1f5ec93897cdf05ffaa84979639"' }>
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
                                            'data-target="#components-links-module-LogModule-65e9bf7b588650f55eff133d5604669b997031a285a8b6466168dd2266512678d3be0e6159b0d88a601de2abf9c29642b2dd28a5db06ead83572179c2b231f83"' : 'data-target="#xs-components-links-module-LogModule-65e9bf7b588650f55eff133d5604669b997031a285a8b6466168dd2266512678d3be0e6159b0d88a601de2abf9c29642b2dd28a5db06ead83572179c2b231f83"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogModule-65e9bf7b588650f55eff133d5604669b997031a285a8b6466168dd2266512678d3be0e6159b0d88a601de2abf9c29642b2dd28a5db06ead83572179c2b231f83"' :
                                            'id="xs-components-links-module-LogModule-65e9bf7b588650f55eff133d5604669b997031a285a8b6466168dd2266512678d3be0e6159b0d88a601de2abf9c29642b2dd28a5db06ead83572179c2b231f83"' }>
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
                                            'data-target="#components-links-module-SharedModule-3096d7765c18bd8fc66e9da6d38f3d6eb881101e3c9ebfdd319d6fda60d24af48bae7b4193b6876cf7f1fc82004bf794de0116f23c194a479c7c6b1f4e707be6"' : 'data-target="#xs-components-links-module-SharedModule-3096d7765c18bd8fc66e9da6d38f3d6eb881101e3c9ebfdd319d6fda60d24af48bae7b4193b6876cf7f1fc82004bf794de0116f23c194a479c7c6b1f4e707be6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3096d7765c18bd8fc66e9da6d38f3d6eb881101e3c9ebfdd319d6fda60d24af48bae7b4193b6876cf7f1fc82004bf794de0116f23c194a479c7c6b1f4e707be6"' :
                                            'id="xs-components-links-module-SharedModule-3096d7765c18bd8fc66e9da6d38f3d6eb881101e3c9ebfdd319d6fda60d24af48bae7b4193b6876cf7f1fc82004bf794de0116f23c194a479c7c6b1f4e707be6"' }>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TweetBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TweetBtnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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