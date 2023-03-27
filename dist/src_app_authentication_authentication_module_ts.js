"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_authentication_authentication_module_ts"],{

/***/ 3365:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationRoutingModule": () => (/* binding */ AuthenticationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.component */ 6462);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ 7510);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register/register.component */ 2971);
/* harmony import */ var _pages_activate_user_activate_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/activate-user/activate-user.component */ 1917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    {
        path: '',
        component: _authentication_component__WEBPACK_IMPORTED_MODULE_0__.AuthenticationComponent,
        children: [
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
            },
            {
                path: 'register',
                component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent,
            },
            {
                path: 'activate-user/:hash',
                component: _pages_activate_user_activate_user_component__WEBPACK_IMPORTED_MODULE_3__.ActivateUserComponent,
            },
        ],
    },
    {
        path: '*',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../../app/pages/miscellaneous/miscellaneous.module */ 3452))
            .then(m => m.MiscellaneousModule),
    },
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵfac = function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); };
AuthenticationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 6462:
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationComponent": () => (/* binding */ AuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AuthenticationComponent {
    constructor() { }
    ngOnInit() {
        return;
    }
}
AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) { return new (t || AuthenticationComponent)(); };
AuthenticationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticationComponent, selectors: [["ngx-app-authentication"]], decls: 1, vars: 0, template: function AuthenticationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 1082:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": () => (/* binding */ AuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.component */ 6462);
/* harmony import */ var _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth-layout/auth-layout.component */ 1365);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 6953);
/* harmony import */ var _pages_activate_user_activate_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/activate-user/activate-user.component */ 1917);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-routing.module */ 3365);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ 7510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/register/register.component */ 2971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);











class AuthenticationModule {
}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); };
AuthenticationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardModule,
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__.AuthenticationRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSpinnerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbLayoutModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_0__.AuthenticationComponent,
        _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        _pages_activate_user_activate_user_component__WEBPACK_IMPORTED_MODULE_2__.ActivateUserComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardModule,
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__.AuthenticationRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSpinnerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbLayoutModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputModule] }); })();


/***/ }),

/***/ 1365:
/*!********************************************************************************!*\
  !*** ./src/app/authentication/components/auth-layout/auth-layout.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 6953);


const _c0 = [[["", "authContent", ""]]];
const _c1 = ["[authContent]"];
class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
        return;
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["ngx-auth-layout"]], ngContentSelectors: _c1, decls: 5, vars: 0, consts: [[1, "login-content"], [1, "p-8"], [1, "login"], ["appearance", "outlined", 1, "login-card"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nb-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent], styles: [".login-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #12172d;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  \n  width: 900px;\n  border-radius: 12px !important;\n  box-sizing: content-box;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.login[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImF1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDs7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjE3MmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1jYXJkIHtcclxuICAgIC8qbWF4LXdpZHRoOiA5MDBweDsqL1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAubG9naW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 1917:
/*!*******************************************************************************!*\
  !*** ./src/app/authentication/pages/activate-user/activate-user.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateUserComponent": () => (/* binding */ ActivateUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 5643);
/* harmony import */ var _services_data_manipulation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data-manipulation.service */ 8510);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/auth-layout/auth-layout.component */ 1365);







function ActivateUserComponent_ng_container_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
} }
function ActivateUserComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-row")(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ActivateUserComponent_ng_container_8_span_3_Template, 1, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ngx-row")(5, "div", 7)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
function ActivateUserComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-row")(2, "div", 7)(3, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "warning_amber");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ngx-row")(6, "div", 7)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Your account activation failed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function ActivateUserComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-row")(2, "div", 7)(3, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ngx-row")(6, "div", 7)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Your account activated with success!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ngx-row")(10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
class ActivateUserComponent {
    constructor(route, authService, data) {
        this.route = route;
        this.authService = authService;
        this.data = data;
        this.error = true;
        this.loading = false;
        this.hash = this.route.snapshot.paramMap.get('hash');
    }
    ngOnInit() {
        this.activateUser(this.hash);
    }
    activateUser(hash) {
        this.loading = true;
        this.authService.activateUser(hash).subscribe(res => {
            this.data.showToast('success', 'User activated with success!', '');
            this.error = false;
            this.loading = false;
        }, error => {
            this.data.showToast('warning', 'Error to activate user.', '');
            this.loading = false;
        });
    }
}
ActivateUserComponent.ɵfac = function ActivateUserComponent_Factory(t) { return new (t || ActivateUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_manipulation_service__WEBPACK_IMPORTED_MODULE_1__.DataManipulationService)); };
ActivateUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ActivateUserComponent, selectors: [["ngx-activate-user"]], decls: 11, vars: 3, consts: [["authContent", "", 1, "row"], [1, "col-sm-12", "col-md-5", "col-lg-5", "reset-padding"], [1, "image-container", "h-100"], ["src", "../../../../../assets/images/dreamer-f90.jpg", "alt", "login icon"], [1, "col-sm-12", "col-md-7", "col-lg-7", "login-column", "reset-padding"], [1, "login-form"], [4, "ngIf"], ["rowContent", ""], ["class", "spinner-border spinner-border-sm mr-1", "style", "width: 50px; height: 50px; font-size: 30px", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1", 2, "width", "50px", "height", "50px", "font-size", "30px"], ["aria-hidden", "false", "color", "warn", "aria-label", "Example home icon", 1, "activate-icon"], ["aria-hidden", "false", "aria-label", "Example home icon", 1, "activate-icon"], ["mat-raised-button", "", "color", "primary", "rowContent", "", "routerLink", "/auth/login", 1, "mt-4", "mobileFont"]], template: function ActivateUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-auth-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ActivateUserComponent_ng_container_8_Template, 8, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ActivateUserComponent_ng_container_9_Template, 9, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ActivateUserComponent_ng_container_10_Template, 12, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.error && !ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3RpdmF0ZS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7510:
/*!***************************************************************!*\
  !*** ./src/app/authentication/pages/login/login.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 5643);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_data_manipulation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data-manipulation.service */ 8510);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function LoginComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_11_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_div_11_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function LoginComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(authService, router, formBuilder, route, data) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.data = data;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.hide = true;
        // redirect to home if already logged in
        if (this.authService.tokenData) {
            this.router.navigate(['/pages']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            terms: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.requiredTrue]
        });
    }
    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.f.email.value, this.f.password.value).subscribe(() => {
            this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/pages';
            this.router.navigate([this.returnUrl]);
        }, (err) => {
            // console.log(err);
            this.data.showToast('warning', 'Error to sign in!', '');
            this.loading = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_manipulation_service__WEBPACK_IMPORTED_MODULE_1__.DataManipulationService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ngx-login"]], decls: 21, vars: 6, consts: [[1, "center-block"], [1, "login-block"], [1, "d-flex", "justify-content-center", "left"], ["src", "../../../../assets/images/dreamer-f90.jpg", 2, "width", "90%", "height", "52%"], [1, "right"], [1, "form-block"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "formControlName", "email", "id", "username", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "Password", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "rememberMe", "checked", "", 1, "custom-control-input"], ["for", "rememberMe", 1, "remember-me-label", "custom-control-label"], ["type", "submit", 1, "btn", "green-btn"], [1, "invalid-feedback"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: [".center-block[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 100%;\n  height: 100vh;\n  background-color: #12172D;\n}\n@media (max-width: 768px) {\n  .center-block[_ngcontent-%COMP%] {\n    place-items: flex-start;\n  }\n}\n.login-block[_ngcontent-%COMP%] {\n  max-width: 964px;\n  width: 100%;\n  box-shadow: 0px 4px 68px 0px rgba(4, 37, 155, 0.26);\n  border-radius: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .login-block[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    width: 100%;\n    min-height: 0;\n    min-height: initial;\n    box-shadow: none;\n  }\n}\n.login-block[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  padding: 80px 68px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n  .login-block[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    padding: 20px 30px;\n  }\n}\n.login-block[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #000000;\n  text-align: left;\n  line-height: 1.125;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 700;\n  margin: 0;\n}\n.login-block[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #ffffff;\n  text-align: left;\n  line-height: 1.333;\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .login-block[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-block[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  background-color: #EBEBEB;\n  padding: 80px 68px 45px;\n  display: flex;\n}\n@media (max-width: 768px) {\n  .login-block[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    padding: 40px 30px;\n    align-items: center;\n  }\n}\n.login-block[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .form-block[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.login-block[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .form-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #61584D;\n  text-align: left;\n  line-height: 1.333;\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 600;\n}\n.login-block[_ngcontent-%COMP%]   .right-centered[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.form-control[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: none;\n  border-bottom: 1px solid #D9E2E9;\n  border-radius: 10px;\n  padding: 6px 10px;\n  color: rgb(98, 98, 98);\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 14px;\n  color: rgb(98, 98, 98);\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 300;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-size: 14px;\n  color: rgb(98, 98, 98);\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 300;\n}\n[_ngcontent-%COMP%]::placeholder {\n  font-size: 14px;\n  color: rgb(98, 98, 98);\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 300;\n}\n.custom-control-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgb(98, 98, 98);\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 300;\n}\n.custom-control-label[_ngcontent-%COMP%]::before, .custom-control-label[_ngcontent-%COMP%]::after {\n  top: 0;\n}\n.green-btn[_ngcontent-%COMP%] {\n  background-color: rgb(50, 207, 140);\n  border-radius: 3px;\n  width: 100%;\n  color: #ffffff;\n  text-align: center;\n  font-size: 16px;\n  line-height: 1;\n  min-height: 45px;\n  margin-bottom: 17px;\n  margin-top: 80px;\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 600;\n}\n.link[_ngcontent-%COMP%] {\n  color: rgb(98, 98, 98);\n  font-size: 14px;\n  line-height: 1.715;\n  text-align: center;\n  display: block;\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 300;\n  cursor: pointer;\n}\n.blue-link[_ngcontent-%COMP%] {\n  color: rgb(48, 170, 233);\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 14px;\n  line-height: 1.14;\n  display: block;\n  margin-top: 40px;\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #626262;\n  text-align: left;\n  line-height: 1.125;\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 300;\n  margin: 0 0 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0k7RUFQSjtJQVFNLHVCQUFBO0VBRUo7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBSTtFQVRGO0lBVUksMEJBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUFBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFHSjtBQUNGO0FBREk7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFHTjtBQURNO0VBUEY7SUFRSSxrQkFBQTtFQUlOO0FBQ0Y7QUFGTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSVI7QUFETTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUFHUjtBQUNRO0VBREY7SUFFSSxhQUFBO0VBRVI7QUFDRjtBQUVJO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFBTjtBQUVNO0VBTEY7SUFNSSxrQkFBQTtJQUNBLG1CQUFBO0VBQ047QUFDRjtBQUNNO0VBQ0UsT0FBQTtBQUNSO0FBQ1E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FBQ1Y7QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFNRTtFQUNFLG1CQUFBO0FBSEo7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBSEo7QUFNRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQURFO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQUhKO0FBREU7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FBSEo7QUFNRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FOztFQUVFLE1BQUE7QUFISjtBQU1FO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FBSEo7QUFNRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUhKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjE3MkQ7XHJcbiAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1ibG9jayB7XHJcbiAgICBtYXgtd2lkdGg6IDk2NHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDY4cHggMHB4IHJnYmEoNCwgMzcsIDE1NSwgMC4yNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIHBhZGRpbmc6IDgwcHggNjhweCAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xMjU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zMzM7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcclxuICAgICAgcGFkZGluZzogODBweCA2OHB4IDQ1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAzMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmZvcm0tYmxvY2sge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgXHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICM2MTU4NEQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzMzO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJpZ2h0LWNlbnRlcmVkIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOUUyRTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDk4LCA5OCwgOTgpO1xyXG4gIH1cclxuICBcclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogcmdiKDk4LCA5OCwgOTgpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcclxuICAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmdyZWVuLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDIwNywgMTQwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmxpbmsge1xyXG4gICAgY29sb3I6IHJnYig5OCwgOTgsIDk4KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjcxNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuYmx1ZS1saW5rIHtcclxuICAgIGNvbG9yOiByZ2IoNDgsIDE3MCwgMjMzKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xNDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNjI2MjYyO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjEyNTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMCAwIDQwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 2971:
/*!*********************************************************************!*\
  !*** ./src/app/authentication/pages/register/register.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RegisterComponent {
    constructor() { }
    ngOnInit() {
        return;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["ngx-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_authentication_authentication_module_ts.js.map