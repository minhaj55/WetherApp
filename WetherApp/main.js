(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg  bg-warning\">\n    <ol><a routerLink=\"contactlist\">Contact List</a></ol>\n    <ol><a routerLink=\"contactdetail\">Contact Detail</a> </ol>\n    <ol><a routerLink=\"login\">Login</a> </ol>\n    <ol><a routerLink=\"register\">Register</a> </ol>\n\n</div><br>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WetherApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-dashboard/my-dashboard.component */ "./src/app/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _wehther_component_wehther_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wehther-component/wehther-component.component */ "./src/app/wehther-component/wehther-component.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/contact-list/contact-list.component.ts");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/contact-detail/contact-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _weather_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./weather-service.service */ "./src/app/weather-service.service.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user-register/user-register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");


















var myRoute = [
    {
        path: 'contactlist',
        component: _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_11__["ContactListComponent"]
    },
    {
        path: 'contactdetail',
        component: _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_12__["ContactDetailComponent"]
    },
    {
        path: 'login',
        component: _wehther_component_wehther_component_component__WEBPACK_IMPORTED_MODULE_9__["WehtherComponentComponent"]
    },
    {
        path: 'register',
        component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_15__["UserRegisterComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["MyDashboardComponent"],
                _wehther_component_wehther_component_component__WEBPACK_IMPORTED_MODULE_9__["WehtherComponentComponent"],
                _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_11__["ContactListComponent"],
                _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_12__["ContactDetailComponent"],
                _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_15__["UserRegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(myRoute)
            ],
            providers: [_weather_service_service__WEBPACK_IMPORTED_MODULE_14__["WeatherServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZGV0YWlsL2NvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8\">\n<fieldset>\n<legend>Contac Details</legend>\n  <table class=\"table\">\n    <thead>\n    <tr>    \n      <th>Id</th>\n      <th>Name</th>\n      <th>User Name</th>\n      <th>Email</th>\n      <th>City</th>\n      <th>ZipCode</th>\n </tr></thead>\n <tbody>\n <tr *ngFor=\"let usr of usersDetail\">\n    <td>{{usr.id}}</td>\n   <td>{{usr.name}}</td>\n   <td>{{usr.username}}</td>\n   <td>{{usr.email}}</td>\n   <td>{{usr.address.city}}</td>\n   <td>{{usr.address.zipcode}}</td>\n</tr></tbody>\n  </table>\n  <pagination-controls  maxSize=\"5\"\n  previousLabel=\"Previous\"\n  nextLabel=\"Next\" \n  screenReaderPaginationLabel=\"Pagination\"\n screenReaderPageLabel=\"page\"\n ></pagination-controls>\n  <button class=\"col-sm-2 btn btn-warning form-control\"> Pervious</button>&nbsp;\n  <button class=\"col-sm-2 btn btn-info form-control\"> Next</button>\n\n</fieldset>\n</div>"

/***/ }),

/***/ "./src/app/contact-detail/contact-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-service.service */ "./src/app/weather-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent(http, wser) {
        var _this = this;
        this.http = http;
        this.wser = wser;
        this.usersDetail = [];
        //this.usersDetail = wser.getUsersFormApi();
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(function (data) {
            _this.usersDetail = data;
            console.log(data);
            console.log(_this.usersDetail + ' apiuseers');
        });
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
    };
    ContactDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-detail',
            template: __webpack_require__(/*! ./contact-detail.component.html */ "./src/app/contact-detail/contact-detail.component.html"),
            providers: [_weather_service_service__WEBPACK_IMPORTED_MODULE_2__["WeatherServiceService"]],
            styles: [__webpack_require__(/*! ./contact-detail.component.css */ "./src/app/contact-detail/contact-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _weather_service_service__WEBPACK_IMPORTED_MODULE_2__["WeatherServiceService"]])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/contact-list/contact-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtbGlzdC9jb250YWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-6\">\n  <fieldset>\n  <legend>Contac List</legend>\n  \n<ul class=\"list-group \">\n  <li *ngFor=\"let usr of list; let i = index;let evn=even; let i = index;\" [ngClass]=\"{ 'list-group-item':true,'bg-light':evn}\">\n    <i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i>&nbsp;\n    {{usr.name + '    ' + usr.city +'   '+usr.contact}}</li>\n</ul>\n</fieldset>\n</div>\n<!---\n\n        \"id\": 1,\n        \"name\": \"Leanne Graham\",\n        \"username\": \"Bret\",\n        \"email\": \"Sincere@april.biz\",\n        \"address\": {\n            \"street\": \"Kulas Light\",\n            \"suite\": \"Apt. 556\",\n            \"city\": \"Gwenborough\",\n            \"zipcode\": \"92998-3874\",\n            \"geo\": {\n                \"lat\": \"-37.3159\",\n                \"lng\": \"81.1496\"\n\n\n\n\n-->"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.ts ***!
  \********************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-service.service */ "./src/app/weather-service.service.ts");



var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(wservice) {
        this.wservice = wservice;
        this.list = [];
        for (var _i = 0, _a = this.wservice.getUserList(); _i < _a.length; _i++) {
            var i = _a[_i];
            this.list.push(i);
            console.log(this.list);
        }
    }
    ContactListComponent.prototype.ngOnInit = function () {
    };
    ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contact-list/contact-list.component.html"),
            providers: [_weather_service_service__WEBPACK_IMPORTED_MODULE_2__["WeatherServiceService"]],
            styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contact-list/contact-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service_service__WEBPACK_IMPORTED_MODULE_2__["WeatherServiceService"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktZGFzaGJvYXJkL215LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtDQUNiOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbXktZGFzaGJvYXJkL215LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: MyDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDashboardComponent", function() { return MyDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");




var MyDashboardComponent = /** @class */ (function () {
    function MyDashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    MyDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-dashboard',
            template: __webpack_require__(/*! ./my-dashboard.component.html */ "./src/app/my-dashboard/my-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./my-dashboard.component.css */ "./src/app/my-dashboard/my-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], MyDashboardComponent);
    return MyDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user-register/user-register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-register/user-register.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVnaXN0ZXIvdXNlci1yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-register/user-register.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-register/user-register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form>\n      <div class=\"form-group\">\n      Email <input class=\"form-control col-sm-4\">\n    </div>\n      <div class=\"form-group\">\n            Name <input  class=\"form-control col-sm-4\">\n      </div>\n        <div class=\"form-group\">\n            Mobile <input type=\"number\" class=\"form-control col-sm-4\">\n        </div>\n  \n      <div class=\"form-group\">\n      Password <input class=\"form-control col-sm-4\" type=\"password\">\n      </div>\n  \n      <select class=\"form-control col-sm-4\">\n        <option>India</option>\n        <option>United State</option>\n      </select><br>\n      <button class=\"col-sm-4 btn btn-primary form-control\"> Submit</button>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/user-register/user-register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-register/user-register.component.ts ***!
  \**********************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent() {
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
    };
    UserRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__(/*! ./user-register.component.html */ "./src/app/user-register/user-register.component.html"),
            styles: [__webpack_require__(/*! ./user-register.component.css */ "./src/app/user-register/user-register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/app/weather-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/weather-service.service.ts ***!
  \********************************************/
/*! exports provided: WeatherServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherServiceService", function() { return WeatherServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WeatherServiceService = /** @class */ (function () {
    function WeatherServiceService(http) {
        this.http = http;
        this.apiUsers = [];
        this.getUsersFormApi();
    }
    WeatherServiceService.prototype.getUsersFormApi = function () {
        var _this = this;
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(function (data) {
            _this.apiUsers = data;
            console.log(data);
            console.log(_this.apiUsers + ' apiuseers');
        });
        return this.apiUsers;
    };
    WeatherServiceService.prototype.getUserList = function () {
        return this.userList = [{ name: "Minhaj", city: "Hyderabad", contact: 9572111010 },
            { name: "Noman", city: "Patna", contact: 9585211010 },
            { name: "Shravan", city: "Banglore", contact: 9589571010 },
            { name: "Abid", city: "Dhanbad", contact: 9693215210 },
            { name: "Mathur", city: "Naampally", contact: 9124511010 },
            { name: "Sumanth", city: "Kerela", contact: 9996321010 },
            { name: "Harish", city: "Dargaa", contact: 9885641010 }
        ];
    };
    WeatherServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherServiceService);
    return WeatherServiceService;
}());



/***/ }),

/***/ "./src/app/wehther-component/wehther-component.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/wehther-component/wehther-component.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlaHRoZXItY29tcG9uZW50L3dlaHRoZXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wehther-component/wehther-component.component.html":
/*!********************************************************************!*\
  !*** ./src/app/wehther-component/wehther-component.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]='weatherForm' novalidate>\n    <div class=\"form-group\">\n    Email <input formControlName='email' class=\"form-control col-sm-4\">\n    <span *ngIf=\"weatherForm.get('email').hasError('email') && weatherForm.get('email').touched\" \n        class=\"alert-danger\">\n        please enter valid Name </span>\n\n\n        <span *ngIf=\"!weatherForm.get('email').hasError('email') && weatherForm.get('email').touched\" \n        class=\"alert-success\">\n        Email Accepted</span>\n    \n      </div>\n\n    <div class=\"form-group\">\n    Password <input formControlName='password' class=\"form-control col-sm-4\" type=\"password\">\n    <span *ngIf=\"!weatherForm.get('password').valid && weatherForm.get('password').touched\"\n      [ngClass]=\"{'alert-danger':!weatherForm.get('password').valid }\">\n         Atleast 8 char required </span>\n     <span *ngIf=\"weatherForm.get('password').valid && weatherForm.get('password').touched\"\n      [ngClass]=\"{'alert-success' :weatherForm.get('password').valid }\">\n         Password Accepted</span>\n    </div>\n\n    <select class=\"form-control col-sm-4\">\n      <option>India</option>\n      <option>United State</option>\n    </select><br>\n    <button class=\"col-sm-4 btn btn-warning form-control\"> Login </button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/wehther-component/wehther-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/wehther-component/wehther-component.component.ts ***!
  \******************************************************************/
/*! exports provided: WehtherComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WehtherComponentComponent", function() { return WehtherComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var WehtherComponentComponent = /** @class */ (function () {
    function WehtherComponentComponent() {
    }
    WehtherComponentComponent.prototype.ngOnInit = function () {
        this.weatherForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
        });
    };
    WehtherComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wehther-component',
            template: __webpack_require__(/*! ./wehther-component.component.html */ "./src/app/wehther-component/wehther-component.component.html"),
            styles: [__webpack_require__(/*! ./wehther-component.component.css */ "./src/app/wehther-component/wehther-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WehtherComponentComponent);
    return WehtherComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aminhaj\Documents\AngularProjects\WetherApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map