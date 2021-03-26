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
                    <a href="index.html" data-type="index-link">Indoor-Climate-App documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f73d85f53ded1766c7b6d073446e48b8"' : 'data-target="#xs-components-links-module-AppModule-f73d85f53ded1766c7b6d073446e48b8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f73d85f53ded1766c7b6d073446e48b8"' :
                                            'id="xs-components-links-module-AppModule-f73d85f53ded1766c7b6d073446e48b8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' : 'data-target="#xs-components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' :
                                            'id="xs-components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link">HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LastquestionPageModule.html" data-type="entity-link">LastquestionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LastquestionPageModule-1365d54967b2deea5ee7f99d28fa2ace"' : 'data-target="#xs-components-links-module-LastquestionPageModule-1365d54967b2deea5ee7f99d28fa2ace"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LastquestionPageModule-1365d54967b2deea5ee7f99d28fa2ace"' :
                                            'id="xs-components-links-module-LastquestionPageModule-1365d54967b2deea5ee7f99d28fa2ace"' }>
                                            <li class="link">
                                                <a href="components/LastquestionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LastquestionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LastquestionPageRoutingModule.html" data-type="entity-link">LastquestionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/QrcodePageModule.html" data-type="entity-link">QrcodePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QrcodePageModule-0932634141e0c9ccb9141e177b258627"' : 'data-target="#xs-components-links-module-QrcodePageModule-0932634141e0c9ccb9141e177b258627"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QrcodePageModule-0932634141e0c9ccb9141e177b258627"' :
                                            'id="xs-components-links-module-QrcodePageModule-0932634141e0c9ccb9141e177b258627"' }>
                                            <li class="link">
                                                <a href="components/QrcodePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QrcodePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QrcodePageRoutingModule.html" data-type="entity-link">QrcodePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Question1PageModule.html" data-type="entity-link">Question1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Question1PageModule-093dd6d3d1a08eb08007c2c5cf5b202f"' : 'data-target="#xs-components-links-module-Question1PageModule-093dd6d3d1a08eb08007c2c5cf5b202f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Question1PageModule-093dd6d3d1a08eb08007c2c5cf5b202f"' :
                                            'id="xs-components-links-module-Question1PageModule-093dd6d3d1a08eb08007c2c5cf5b202f"' }>
                                            <li class="link">
                                                <a href="components/Question1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Question1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Question1PageRoutingModule.html" data-type="entity-link">Question1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Question2PageModule.html" data-type="entity-link">Question2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Question2PageModule-9bd3c063cc16c6ab0399ae5a724f81d1"' : 'data-target="#xs-components-links-module-Question2PageModule-9bd3c063cc16c6ab0399ae5a724f81d1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Question2PageModule-9bd3c063cc16c6ab0399ae5a724f81d1"' :
                                            'id="xs-components-links-module-Question2PageModule-9bd3c063cc16c6ab0399ae5a724f81d1"' }>
                                            <li class="link">
                                                <a href="components/Question2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Question2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Question2PageRoutingModule.html" data-type="entity-link">Question2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SetupPageModule.html" data-type="entity-link">SetupPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SetupPageModule-8f8c4a8cb75362f4843451c7fe334546"' : 'data-target="#xs-components-links-module-SetupPageModule-8f8c4a8cb75362f4843451c7fe334546"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SetupPageModule-8f8c4a8cb75362f4843451c7fe334546"' :
                                            'id="xs-components-links-module-SetupPageModule-8f8c4a8cb75362f4843451c7fe334546"' }>
                                            <li class="link">
                                                <a href="components/SetupPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SetupPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SetupPageRoutingModule.html" data-type="entity-link">SetupPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomePageModule.html" data-type="entity-link">WelcomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WelcomePageModule-f464784cc5ba50c3d6a7dca5ef103eef"' : 'data-target="#xs-components-links-module-WelcomePageModule-f464784cc5ba50c3d6a7dca5ef103eef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomePageModule-f464784cc5ba50c3d6a7dca5ef103eef"' :
                                            'id="xs-components-links-module-WelcomePageModule-f464784cc5ba50c3d6a7dca5ef103eef"' }>
                                            <li class="link">
                                                <a href="components/WelcomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WelcomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomePageRoutingModule.html" data-type="entity-link">WelcomePageRoutingModule</a>
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
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
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