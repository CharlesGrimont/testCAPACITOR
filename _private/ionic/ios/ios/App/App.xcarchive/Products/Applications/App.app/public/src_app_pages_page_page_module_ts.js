"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_page_page_module_ts"],{

/***/ 2325:
/*!***************************************************!*\
  !*** ./src/app/pages/page/page-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRoutingModule": function() { return /* binding */ PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_guards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/guards.service */ 6468);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ 7054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var routes = [{
  path: '',
  component: _page__WEBPACK_IMPORTED_MODULE_3__.Page,
  canActivate: [_services_guards_service__WEBPACK_IMPORTED_MODULE_2__.GuardsService],
  canDeactivate: [_services_guards_service__WEBPACK_IMPORTED_MODULE_2__.GuardsService],
  children: []
}];
var PageRoutingModule = /*#__PURE__*/(0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PageRoutingModule() {
  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PageRoutingModule);
});

PageRoutingModule.ɵfac = function PageRoutingModule_Factory(t) {
  return new (t || PageRoutingModule)();
};

PageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: PageRoutingModule
});
PageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 7311:
/*!*******************************************!*\
  !*** ./src/app/pages/page/page.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageModule": function() { return /* binding */ PageModule; }
/* harmony export */ });
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 2703);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ 7054);
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-routing.module */ 2325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);












var PageModule = /*#__PURE__*/(0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PageModule() {
  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PageModule);
});

PageModule.ɵfac = function PageModule_Factory(t) {
  return new (t || PageModule)();
};

PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: PageModule
});
PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild(), _page_routing_module__WEBPACK_IMPORTED_MODULE_4__.PageRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PageModule, {
    declarations: [_page__WEBPACK_IMPORTED_MODULE_3__.Page],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _page_routing_module__WEBPACK_IMPORTED_MODULE_4__.PageRoutingModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 7054:
/*!************************************!*\
  !*** ./src/app/pages/page/page.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ 1803);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get.js */ 4756);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js */ 265);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 4582);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var c8ocaf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! c8ocaf */ 5911);
/* harmony import */ var _services_actionbeans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/actionbeans.service */ 9663);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/events.service */ 106);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 2703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 7514);













/*
    You can customize your page class by writing code between the :
        Begin_c8o_XXXX and
        End_c8o_XXXX
    Comments.
    Any code placed outside these these comments will be lost when the application is generated
*/








/*Begin_c8o_PageImport*/

/*End_c8o_PageImport*/

var Page = /*#__PURE__*/function (_C8oPage) {
  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Page, _C8oPage);

  var _super = (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Page);

  /*Begin_c8o_PageDeclaration*/

  /*End_c8o_PageDeclaration*/
  function Page(routerProvider, route, angularRouter, loadingCtrl, sanitizer, ref, injector, menuCtrl, translate) {
    var _this;

    (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Page);

    _this = _super.call(this, routerProvider, loadingCtrl, sanitizer, ref, injector, menuCtrl);
    _this.route = route;
    _this.angularRouter = angularRouter;
    _this.translate = translate;
    _this.subscriptions = {};
    _this.JSON = window.JSON;
    _this.events = _this.getInstance(_services_events_service__WEBPACK_IMPORTED_MODULE_8__.Events);
    _this.actionBeans = _this.getInstance(_services_actionbeans_service__WEBPACK_IMPORTED_MODULE_7__.ActionBeans);

    var updateNavParams = function updateNavParams(route) {
      var params = {};
      Object.assign(params, route.snapshot.params);
      Object.assign(params, route.snapshot.queryParams);
      return new _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams(params);
    };

    try {
      // for PopoverController, ModalController
      var params = _this.getInstance(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams).data;

      _this.navParams = new _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams(params);
    } catch (e) {
      // for NavController (based on angular router)
      _this.navParams = updateNavParams(_this.route);

      _this.route.queryParams.subscribe(function (queryParameters) {
        _this.navParams = updateNavParams(_this.route);
      });
    }

    _this.startMenuId = 'Menu';
    /*Begin_c8o_PageConstructor*/

    /*End_c8o_PageConstructor*/

    return _this;
  }

  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, [{
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
    /*Begin_c8o_PageFunction*/

    /*End_c8o_PageFunction*/

  }, {
    key: "ionViewWillLoad",
    value: function ionViewWillLoad() {
      try {} catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "ionViewDidLoad",
    value: function ionViewDidLoad() {
      this.ref.detectChanges();

      try {} catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "ionViewWillEnter",
    value: function ionViewWillEnter() {
      (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Page.prototype), "ionViewWillEnter", this).call(this);

      try {} catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "ionViewDidEnter",
    value: function ionViewDidEnter() {
      (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Page.prototype), "ionViewDidEnter", this).call(this);

      try {} catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "ionViewWillLeave",
    value: function ionViewWillLeave() {
      (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Page.prototype), "ionViewWillLeave", this).call(this);

      try {} catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "ionViewDidLeave",
    value: function ionViewDidLeave() {
      (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Page.prototype), "ionViewDidLeave", this).call(this);

      try {} catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "ionViewWillUnload",
    value: function ionViewWillUnload() {
      try {} catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {}
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.subscriptions = {};

      (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Page.prototype), "ngOnDestroy", this).call(this);
    }
    /**
     * Function ETS1669108365061
     *
     *
     * @param stack , the object which holds actions stack
     */

  }, {
    key: "ETS1669108365061",
    value: function ETS1669108365061(stack) {
      var _this2 = this;

      var c8oPage = this;
      var parent;
      var scope;
      var out;
      var event;

      var fromScope = function fromScope(keyVal) {
        var scopeVal = keyVal;

        if (scopeVal !== '' && scopeVal != undefined) {
          scopeVal = scopeVal.split('scope.').join('');

          for (var key in stack["root"].scope) {
            scopeVal = scopeVal.split(key).join('scope.' + key);
          }
        }

        return scopeVal;
      };

      var get = function get(keyName, keyVal) {
        var val = undefined;

        try {
          val = keyVal === '' ? keyVal : eval('(' + keyVal + ')');

          if (val == undefined) {
            c8oPage.c8o.log.trace("[MB] ETS1669108365061: key=" + keyName + " value=undefined");
          } else {
            c8oPage.c8o.log.trace("[MB] ETS1669108365061: key=" + keyName + " value=" + val);
          }
        } catch (e) {
          try {
            var scopeVal = fromScope(keyVal);
            val = keyVal === '' ? keyVal : eval('(' + scopeVal + ')');

            if (val == undefined) {
              c8oPage.c8o.log.trace("[MB] ETS1669108365061: key=" + keyName + " value=undefined");
            } else {
              c8oPage.c8o.log.trace("[MB] ETS1669108365061: key=" + keyName + " value=" + val);
            }
          } catch (e1) {}

          if (val == undefined) {
            var sKeyVal = keyVal == null ? "null" : keyVal == undefined ? "undefined" : keyVal;
            c8oPage.c8o.log.warn("[MB] ETS1669108365061: For " + keyName + ":" + sKeyVal + ", " + e.message);
          }
        }

        return val;
      };

      parent = stack["root"];
      event = stack["root"].out;
      scope = stack["root"].scope;
      out = event;
      this.c8o.log.debug("[MB] ETS1669108365061: started");
      return new Promise(function (resolveP, rejectP) {
        return new Promise(function (resolve, reject) {
          var self = stack["CustomAsyncAction"] = stack["1669108376758"] = {};
          self.in = {
            props: {
              tplVersion: '8.1.0.4',
              actionName: 'CustomAsyncAction',
              actionFunction: 'CTS1669108376758'
            },
            vars: {}
          };
          return _this2.CTS1669108376758(_this2, Object.assign({
            stack: stack,
            parent: parent,
            out: out
          }, self.in.props), Object.assign(Object.assign({}, stack["root"].in), self.in.vars), event).catch(function (error) {
            parent = self;
            parent.out = error;
            out = parent.out;
            return Promise.reject(error);
          }).then(function (res) {
            parent = self;
            parent.out = res;
            out = parent.out;
            return Promise.resolve(res);
          }, function (error) {
            _this2.c8o.log.debug("[MB] CTS1669108376758 : ", error.message);

            throw new Error(error);
          }).then(function (res) {
            resolve(res);
          }).catch(function (error) {
            reject(error);
          });
        }).catch(function (error) {
          _this2.c8o.log.debug("[MB] ETS1669108365061: An error occured : ", error.message);

          resolveP(false);
        }).then(function (res) {
          _this2.c8o.log.debug("[MB] ETS1669108365061: ended");

          resolveP(res);
        });
      });
    }
    /**
     * Function CustomAsyncAction
     *
     *
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     * @param event , the current event object
     */

  }, {
    key: "CTS1669108376758",
    value: function CTS1669108376758(page, props, vars, event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/(0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var barcodeScanner;
        return (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                page.c8o.log.warn('TEST CHARLES clicked');
                barcodeScanner = page.getInstance(_awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__.BarcodeScanner);
                barcodeScanner.scan().then(function (barcodeData) {
                  page.c8o.log.warn('TEST CHARLES resp' + JSON.stringify(barcodeData));
                }).catch(function (err) {
                  page.c8o.log.warn('TEST CHARLES ERR1' + JSON.stringify(err));
                });
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                page.c8o.log.warn('TEST CHARLES ERR2' + JSON.stringify(_context.t0));

              case 9:
                _context.prev = 9;
                return _context.abrupt("return");

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6, 9, 12]]);
      }));
    }
  }]);

  return Page;
}(c8ocaf__WEBPACK_IMPORTED_MODULE_12__.C8oPage);
Page.nameStatic = "Page";

Page.ɵfac = function Page_Factory(t) {
  return new (t || Page)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](c8ocaf__WEBPACK_IMPORTED_MODULE_12__.C8oRouter), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService));
};

Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: Page,
  selectors: [["page-page"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
  decls: 22,
  vars: 0,
  consts: [["translucent", "false", 1, "class1491634212350"], [1, "class1491634231108"], ["collapse", "false", "slot", "start", 1, "class1588171103814"], ["type", "button", "disabled", "false", 1, "class1643993281257"], ["type", "button", "autoHide", "true", "disabled", "false", 1, "class1588172846908"], [1, "class1491634265317"], ["collapse", "false", "slot", "end", 1, "class1588170811054"], ["type", "button", "disabled", "false", 1, "class1588170817806"], ["name", "ellipsis-vertical", 1, "class1588170831166"], ["forceOverscroll", "false", "scrollEvents", "false", "scrollY", "true", "scrollX", "false", "fullscreen", "false", 1, "ion-padding", "class1489674805352"], ["type", "button", "disabled", "false", 1, "class1669108365055", 3, "click"], [1, "class1669108365057"], ["translucent", "false", 1, "class1491634242460"], [1, "class1491634317538"], ["collapse", "false", "slot", "start", 1, "class1588170246138"], ["type", "button", "disabled", "false", 1, "class1491634332730"], ["collapse", "false", "slot", "end", 1, "class1588170269871"], ["type", "button", "disabled", "false", 1, "class1491634376874"]],
  template: function Page_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-back-button", 3)(4, "ion-menu-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-title", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\nPage\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-buttons", 6)(8, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-content", 9)(11, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function Page_Template_ion_button_click_11_listener($event) {
        return ctx.ETS1669108365061({
          root: {
            scope: {},
            in: {},
            out: $event
          }
        });
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "\nsome button text\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-footer", 12)(15, "ion-toolbar", 13)(16, "ion-buttons", 14)(17, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "\nAction 1\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-buttons", 16)(20, "ion-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "\nAction 2\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButtonDelegate],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLnNjc3MifQ== */"]
});

/***/ }),

/***/ 6468:
/*!********************************************!*\
  !*** ./src/app/services/guards.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuardsService": function() { return /* binding */ GuardsService; }
/* harmony export */ });
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





var GuardsService = /*#__PURE__*/function () {
  function GuardsService(injector) {
    (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GuardsService);

    this.injector = injector;
    this.appRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef);
  }

  (0,_Users_mathieufrancois_git_testCAPACITOR_private_ionic_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GuardsService, [{
    key: "canActivate",
    value: function canActivate(route, state) {
      var app = this.appRef.components[0].instance;

      if (typeof app["canActivate"] !== "undefined") {
        return app["canActivate"]({
          pageName: route.component["nameStatic"],
          route: route,
          state: state
        });
      } else {
        return true;
      }
    }
  }, {
    key: "canDeactivate",
    value: function canDeactivate(component, route, state) {
      var app = this.appRef.components[0].instance;

      if (typeof app["canDeactivate"] !== "undefined") {
        return app["canDeactivate"]({
          pageName: route.component["nameStatic"],
          component: component,
          route: route,
          state: state
        });
      } else {
        return true;
      }
    }
  }]);

  return GuardsService;
}();

GuardsService.ɵfac = function GuardsService_Factory(t) {
  return new (t || GuardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
};

GuardsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: GuardsService,
  factory: GuardsService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_page_page_module_ts.js.map