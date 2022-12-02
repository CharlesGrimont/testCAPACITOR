(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





var routes = [//  { path: '', redirectTo: 'home', pathMatch: 'full' },
//  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
{
  path: '',
  redirectTo: 'path-to-xfirst',
  pathMatch: 'full'
}, {
  path: 'path-to-xfirst',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_pages_page_page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/page/page.module */ 7311)).then(function (m) {
      return m.PageModule;
    });
  }
}];
var AppRoutingModule = /*#__PURE__*/(0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};

AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get.js */ 4756);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js */ 265);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 4582);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var c8ocaf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! c8ocaf */ 5911);
/* harmony import */ var c8osdkangular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! c8osdkangular */ 8129);
/* harmony import */ var _services_actionbeans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/actionbeans.service */ 9663);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/events.service */ 106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6362);








 //import { C8oRoute, C8oRouteOptions, C8oRouteListener}       from 'c8ocaf'















var _c0 = function _c0(a0) {
  return [a0];
};

function AppComponent_ion_item_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    var p_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("selected", ctx_r0.selectedPath.startsWith("/" + p_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", !p_r1.includedInAutoMenu)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c0, p_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("slot", p_r1.icon != "" && p_r1.iconPos == "" ? "start" : p_r1.iconPos)("ios", p_r1.icon + (p_r1.icon == "" ? "" : "-outline"))("md", p_r1.icon + (p_r1.icon == "" ? "" : "-sharp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 8, p_r1.titleKey));
  }
}
/*
    You can customize your application class by writing code between the :

        Begin_c8o_XXXX and
        End_c8o_XXXX
        
    Comments.
    
    Any code placed outside these these comments will be lost when the application is generated
*/

/*Begin_c8o_AppImport*/

/*End_c8o_AppImport*/


var AppComponent = /*#__PURE__*/function (_C8oPageBase) {
  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(AppComponent, _C8oPageBase);

  var _super = (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(AppComponent);

  /*Begin_c8o_AppDeclaration*/

  /*End_c8o_AppDeclaration*/
  //  	constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
  function AppComponent(platform, splashScreen, statusBar, routerProvider, route, angularRouter, loadingCtrl, sanitizer, ref, injector, menuCtrl, translate) {
    var _this;

    (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    _this = _super.call(this, injector, routerProvider, loadingCtrl, ref);
    _this.platform = platform;
    _this.splashScreen = splashScreen;
    _this.statusBar = statusBar;
    _this.route = route;
    _this.angularRouter = angularRouter;
    _this.translate = translate;
    _this.rootPage = 'Page';
    _this.subscriptions = {};
    _this.selectedPath = '';
    _this.appInit = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    _this.events = _this.getInstance(_services_events_service__WEBPACK_IMPORTED_MODULE_7__.Events);
    _this.actionBeans = _this.getInstance(_services_actionbeans_service__WEBPACK_IMPORTED_MODULE_6__.ActionBeans);

    try {
      // for PopoverController, ModalController
      _this.navParams = new _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavParams(_this.getInstance(_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavParams).data);
    } catch (e) {
      // for NavController (based on angular router)
      var params = {};

      _this.merge(params, _this.route.snapshot.params);

      _this.merge(params, _this.route.snapshot.queryParams);

      _this.navParams = new _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavParams(params);
    }

    _this.angularRouter.events.subscribe(function (event) {
      if (event && event.urlAfterRedirects) {
        _this.selectedPath = event.urlAfterRedirects;
      }
    });

    _this.appPages = [{
      title: "First page",
      titleKey: "First_page",
      url: "path-to-xfirst",
      icon: "",
      iconPos: "",
      name: "Page",
      includedInAutoMenu: true
    }];
    _this.pagesKeyValue = {
      Page: _this.rootPage
    };
    _this.routerProvider.pagesArray = _this.appPages;
    _this.routerProvider.pagesKeyValue = _this.pagesKeyValue;
    /**
     *  Define a C8oSettings Object in order to declare settings to be used in the C8oInit method
     */

    var settings = new c8osdkangular__WEBPACK_IMPORTED_MODULE_13__.C8oSettings();
    settings.setLogRemote(true).setLogC8o(true).setLogLevelLocal(c8osdkangular__WEBPACK_IMPORTED_MODULE_13__.C8oLogLevel.DEBUG).setKeepSessionAlive(true);
    /*Begin_c8o_AppSettings*/

    /*End_c8o_AppSettings*/

    /**
     * Then we assign C8oSettings to our c8o Object with the init method
     */

    settings.addHeader("x-convertigo-mb", "8.1.0");

    _this.c8o.init(settings);

    if (window.location.hostname == "localhost") {
      var nc = _this.getInstance(_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController);

      window['_c8o_changePage'] = function (segment) {
        nc.navigateRoot(segment);
        return "done";
      };
    }
    /* ============================================================================================================
         End of Convertigo Angular Framework (CAF) initialization...
       ============================================================================================================*/

    /*Begin_c8o_AppConstructor*/

    /*End_c8o_AppConstructor*/


    _this.platform.ready().then(function () {
      _this.statusBar.styleDefault();

      _this.splashScreen.hide();
      /**
       * Then we finalize initialization
       */


      _this.c8o.finalizeInit().then(function () {
        _this.resetImageCache();
        /*Begin_c8o_AppInitialization*/

        /* Uncomment the following lines to enable the i18n feature.
         * You should add a json per language in the assets/i18n folder. */


        translate.setDefaultLang('en');
        translate.use(translate.getBrowserLang());
        /* Uncomment the following lines to enable the custom status bar color. */
        // statusBar.overlaysWebView(false);
        // statusBar.backgroundColorByHexString("#000000");
        // statusBar.styleBlackOpaque();

        /* Uncomment the following lines to enable the Service Worker Update. */

        /*let updates = this.getInstance(SwUpdate);
        let alertCtrl = this.getInstance(AlertController);
        let fu = ()=>{
           this.c8o.log._debug("[SW] checking for updates each 60000 ms")
           updates.checkForUpdate()
          .then((res)=>{
              this.c8o.log._debug("[SW] updates checked")
          })
          .catch((e)=>{
              this.c8o.log._error("[SW] updates error")
              console.log(JSON.stringify(e));
          });
        }
        fu()
        setInterval(fu, 60000)
        
        updates.available.subscribe(event => {
           this.c8o.log._debug("[SW] update available");
           this.c8o.log._debug("new version is "+ event.current);
           const prompt = alertCtrl.create({
              title: "Convertigo Update Service",
              message: "A new version is available for for your app.",
              buttons: [
              {
                 text: "Restart app",
                 handler: data => {
                     this.c8o.log._debug("update available we will reload app");
                     updates.activateUpdate().then(() => document.location.reload());
                 }
              }
             ]
           });
           prompt.present();
        });*/

        /*End_c8o_AppInitialization*/

        _this.appInit.next();
      });
    });

    return _this;
  }

  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "instance",
    value: function instance() {
      return this;
    }
  }, {
    key: "merge",
    value: function merge(firstObj, secondObj) {
      return Object.assign(firstObj, secondObj);
    }
  }, {
    key: "log",
    value: function log(val) {
      console.log(val);
    }
  }, {
    key: "navigate",
    value: function navigate(url, data) {
      this.angularRouter.navigate([url], {
        queryParams: data
      });
    }
  }, {
    key: "navigateByUrl",
    value: function navigateByUrl(url) {
      this.angularRouter.navigateByUrl(url);
    }
    /*Begin_c8o_AppFunction*/

    /*End_c8o_AppFunction*/

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.subscriptions = {};

      (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AppComponent.prototype), "ngOnDestroy", this).call(this);
    }
  }]);

  return AppComponent;
}(c8ocaf__WEBPACK_IMPORTED_MODULE_14__.C8oPageBase);

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__.SplashScreen), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__.StatusBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](c8ocaf__WEBPACK_IMPORTED_MODULE_14__.C8oRouter), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 10,
  vars: 1,
  consts: [["swipeGesture", "true", "side", "start", "disabled", "true", "menu-id", "Menu", "content-id", "main-content", 1, "class1500890597895"], ["translucent", "false", 1, "class1500890727582"], [1, "class1500890731485"], [1, "class1500890752959"], ["forceOverscroll", "false", "scrollEvents", "false", "scrollY", "true", "scrollX", "false", "fullscreen", "false", 1, "ion-padding", "class1500890742326"], ["inset", "inset", 1, "class1501343197007"], ["class", "class1500890605250", "routerDirection", "root", "lines", "none", "detail", "false", 3, "hidden", "routerLink", "selected", 4, "ngFor", "ngForOf"], ["id", "main-content"], ["routerDirection", "root", "lines", "none", "detail", "false", 1, "class1500890605250", 3, "hidden", "routerLink"], [3, "slot", "ios", "md"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-app")(1, "ion-menu", 0)(2, "ion-header", 1)(3, "ion-toolbar", 2)(4, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\nMy Menu\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-content", 4)(7, "ion-list", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AppComponent_ion_item_8_Template, 5, 12, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "ion-router-outlet", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.appPages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
  styles: ["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #616e7e;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n\n[_ngcontent-%COMP%]:root {\n  \n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  \n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  \n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  \n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  \n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  \n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  \n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  \n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  \n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n\n@media (prefers-color-scheme: dark) {\n  \n  body[_ngcontent-%COMP%] {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n  \n  .ios[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-toolbar-background: #0d0d0d;\n    --ion-item-background: #000000;\n  }\n  \n  .md[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n  }\n  ion-title.title-large[_ngcontent-%COMP%] {\n    --color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QTtJQUNBLGlDQUFBO0lBQ0EsaUNBQUE7RUF3QkU7RUF0QkY7SUFDQSxjQUFBO0VBd0JFO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi4vcGFnZXMvcGFnZS9wYWdlLnNjc3NcIjtcblxuaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4tLXBhZGRpbmctZW5kOiA4cHg7XG4tLXBhZGRpbmctdG9wOiAyMHB4O1xuLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbnBhZGRpbmc6IDIwcHggMDtcbn1cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbm1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG5wYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuZm9udC1zaXplOiAyMnB4O1xuZm9udC13ZWlnaHQ6IDYwMDtcbm1pbi1oZWlnaHQ6IDIwcHg7XG59XG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuZm9udC1zaXplOiAxNnB4O1xubWFyZ2luLWJvdHRvbTogMThweDtcbmNvbG9yOiAjNzU3NTc1O1xubWluLWhlaWdodDogMjZweDtcbn1cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbi0tcGFkZGluZy1zdGFydDogMTBweDtcbi0tcGFkZGluZy1lbmQ6IDEwcHg7XG5ib3JkZXItcmFkaXVzOiA0cHg7XG59XG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4tLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG5jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuY29sb3I6ICM2MTZlN2U7XG59XG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4tLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbnBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xubGluZS1oZWlnaHQ6IDI0cHg7XG5tYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbi0tcGFkZGluZy1zdGFydDogMTZweDtcbi0tcGFkZGluZy1lbmQ6IDE2cHg7XG4tLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG5mb250LXNpemU6IDI0cHg7XG5jb2xvcjogIzczODQ5YTtcbn1cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xubWFyZ2luLWJvdHRvbTogOHB4O1xufVxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG5wYWRkaW5nLWxlZnQ6IDE2cHg7XG5wYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbm1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1ub3RlIHtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbmZvbnQtc2l6ZTogMTZweDtcbmNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbi0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpyb290IHtcbi8qKiBwcmltYXJ5ICoqL1xuLS1pb24tY29sb3ItcHJpbWFyeTogIzM4ODBmZjtcbi0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4tLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4tLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuLyoqIHNlY29uZGFyeSAqKi9cbi0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbi0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbi0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbi0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4tLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4tLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcbi8qKiB0ZXJ0aWFyeSAqKi9cbi0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbi0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4tLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuLyoqIHN1Y2Nlc3MgKiovXG4tLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbi0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4tLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbi0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4tLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG4vKiogd2FybmluZyAqKi9cbi0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4tLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4tLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4tLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuLyoqIGRhbmdlciAqKi9cbi0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbi0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbi0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0Zjtcbi0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuLyoqIGRhcmsgKiovXG4tLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4tLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4tLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuLyoqIG1lZGl1bSAqKi9cbi0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5Yztcbi0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4tLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4tLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG4vKiogbGlnaHQgKiovXG4tLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbi0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbi0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4tLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuLypcbiogRGFyayBDb2xvcnNcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmJvZHkge1xuLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbi0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwxNDAsMjU1O1xuLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbi0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbi0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4tLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4tLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4tLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwyMDAsMjU1O1xuLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4tLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4tLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcbi0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsMTAwLDI1NTtcbi0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbi0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcbi0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4tLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsMjIzLDExNztcbi0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4tLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4tLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbi0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjEzLDUyO1xuLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbi0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLDAsMDtcbi0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4tLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG4tLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4tLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsNzMsOTc7XG4tLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4tLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbi0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbi0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbi0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsMjQ1LDI0ODtcbi0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4tLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4tLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XG4tLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4tLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLDAsMDtcbi0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4Zjtcbi0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4tLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LDM2LDQwO1xuLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4tLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4tLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xufVxuLypcbiogaU9TIERhcmsgVGhlbWVcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5pb3MgYm9keSB7XG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMCwwO1xuLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbi0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbi0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4tLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbi0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4tLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbi0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4tLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2Njtcbi0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4tLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4Yztcbi0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4tLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbi0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4tLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbi0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG4tLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMwZDBkMGQ7XG4tLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG4vKlxuKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLm1kIGJvZHkge1xuLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbi0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwxOCwxODtcbi0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4tLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG4tLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG4tLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4tLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbi0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4tLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbi0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4tLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbi0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4tLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbi0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4tLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbi0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4tLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbi0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xufVxuaW9uLXRpdGxlLnRpdGxlLWxhcmdlIHtcbi0tY29sb3I6IHdoaXRlO1xufVxufVxuXG4iXX0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; },
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; }
/* harmony export */ });
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
/* harmony import */ var c8osdkangular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! c8osdkangular */ 8129);
/* harmony import */ var c8ocaf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! c8ocaf */ 5911);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 2703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);






















/**
 * Customize the ngx-translate loader for assets/i18n
 */

function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
var AppModule = /*#__PURE__*/(0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__.BarcodeScanner, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen, c8osdkangular__WEBPACK_IMPORTED_MODULE_9__.C8o, c8ocaf__WEBPACK_IMPORTED_MODULE_10__.C8oRouter, //    ActionBeans,
  {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
    useClass: c8osdkangular__WEBPACK_IMPORTED_MODULE_9__.HttpXsrfInterceptor,
    multi: true
  }, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
    }
  }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: false,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }), _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 9663:
/*!*************************************************!*\
  !*** ./src/app/services/actionbeans.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionBeans": function() { return /* binding */ ActionBeans; }
/* harmony export */ });
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 7514);




var ActionBeans = /*#__PURE__*/(0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ActionBeans(translate) {
  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ActionBeans);

  this.translate = translate;
});

ActionBeans.ɵfac = function ActionBeans_Factory(t) {
  return new (t || ActionBeans)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
};

ActionBeans.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ActionBeans,
  factory: ActionBeans.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 106:
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": function() { return /* binding */ Events; }
/* harmony export */ });
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var Events = /*#__PURE__*/function () {
  function Events() {
    (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Events);

    this.eventMap = {};
  }

  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Events, [{
    key: "getEventSubject",
    value: function getEventSubject(topic) {
      if (topic == undefined || topic == '') {
        throw Error('Invalid topic');
      }

      if (this.eventMap[topic] == undefined) {
        this.eventMap[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      }

      return this.eventMap[topic];
    }
  }, {
    key: "publish",
    value: function publish(topic, data) {
      var subject = this.getEventSubject(topic);
      subject.next(data);
    }
  }, {
    key: "subscribe",
    value: function subscribe(topic, next, error, complete) {
      var subject = this.getEventSubject(topic);
      return subject.subscribe(next, error, complete);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      for (var topic in this.eventMap) {
        this.eventMap[topic].complete();
      }

      this.eventMap = {};
    }
  }]);

  return Events;
}();

Events.ɵfac = function Events_Factory(t) {
  return new (t || Events)();
};

Events.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: Events,
  factory: Events.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
var environment = {
  production: false,
  hmr: false
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.log(err);
});

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-1c2207b2_js-node_modules_ionic_core_dist_esm_t-5248a4",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-1c2207b2_js-node_modules_ionic_core_dist_esm_t-5248a4",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3411:
/*!*******************************************!*\
  !*** ./node_modules/typescript/lib/ sync ***!
  \*******************************************/
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 3411;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 5525:
/*!****************************!*\
  !*** ./nextTick (ignored) ***!
  \****************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 2183:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 3024:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 2715:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 3611:
/*!***************************!*\
  !*** inspector (ignored) ***!
  \***************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 8353:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 1210:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 3454:
/*!************************************!*\
  !*** source-map-support (ignored) ***!
  \************************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map