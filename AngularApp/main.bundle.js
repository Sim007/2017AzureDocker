webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swirlcoinportal_swirlcoinportal_component__ = __webpack_require__("./src/app/swirlcoinportal/swirlcoinportal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swirlcoinwallet_swirlcoinwallet_component__ = __webpack_require__("./src/app/swirlcoinwallet/swirlcoinwallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__block_block_component__ = __webpack_require__("./src/app/block/block.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/portal', pathMatch: 'full' },
    { path: 'portal', component: __WEBPACK_IMPORTED_MODULE_2__swirlcoinportal_swirlcoinportal_component__["a" /* SwirlcoinportalComponent */] },
    { path: 'wallet', component: __WEBPACK_IMPORTED_MODULE_3__swirlcoinwallet_swirlcoinwallet_component__["a" /* SwirlcoinwalletComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* UserComponent */] },
    { path: 'block/:id', component: __WEBPACK_IMPORTED_MODULE_5__block_block_component__["a" /* BlockComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n    font-size: 1.2em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n  }\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\nnav a:visited, a:link {\r\n    color: #607D8B;\r\n  }\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_socket_service__ = __webpack_require__("./src/app/server-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ipadress_service__ = __webpack_require__("./src/app/ipadress.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(messageService, socketservice, ipaddressService) {
        this.messageService = messageService;
        this.socketservice = socketservice;
        this.ipaddressService = ipaddressService;
        //pushService.messages.subscribe(msg => {			
        //  messageService.add('AppComponent: Response from websocket: ' + msg);
        //});
        //this.ipAddress = ipaddressService.getIpAddress().subscribe(ip => {
        //  this.messageService.add('AppCompnent: getIpaddress: '+ JSON.parse(ip))
        //})
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__server_socket_service__["a" /* WebsocketService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__server_socket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_3__ipadress_service__["a" /* IpadressService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__swirlcoinwallet_swirlcoinwallet_component__ = __webpack_require__("./src/app/swirlcoinwallet/swirlcoinwallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swirlcoinportal_swirlcoinportal_component__ = __webpack_require__("./src/app/swirlcoinportal/swirlcoinportal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__swirlcoinminer_swirlcoinminer_component__ = __webpack_require__("./src/app/swirlcoinminer/swirlcoinminer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__group_service__ = __webpack_require__("./src/app/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__scheader_scheader_component__ = __webpack_require__("./src/app/scheader/scheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__scbuttons_scbuttons_component__ = __webpack_require__("./src/app/scbuttons/scbuttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scbuttons_service__ = __webpack_require__("./src/app/scbuttons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__blockchain_blockchain_component__ = __webpack_require__("./src/app/blockchain/blockchain.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__balance_balance_component__ = __webpack_require__("./src/app/balance/balance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__hash_hash_component__ = __webpack_require__("./src/app/hash/hash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__blocks_service__ = __webpack_require__("./src/app/blocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__verify_verify_component__ = __webpack_require__("./src/app/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__transaction_transaction_component__ = __webpack_require__("./src/app/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__transaction_service__ = __webpack_require__("./src/app/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ipadress_service__ = __webpack_require__("./src/app/ipadress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__rest_service__ = __webpack_require__("./src/app/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__server_socket_service__ = __webpack_require__("./src/app/server-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__push_service_service__ = __webpack_require__("./src/app/push-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__block_block_component__ = __webpack_require__("./src/app/block/block.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here
// Material











// Application components



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__swirlcoinwallet_swirlcoinwallet_component__["a" /* SwirlcoinwalletComponent */],
                __WEBPACK_IMPORTED_MODULE_12__swirlcoinportal_swirlcoinportal_component__["a" /* SwirlcoinportalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__swirlcoinminer_swirlcoinminer_component__["a" /* SwirlcoinminerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__scheader_scheader_component__["a" /* ScheaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__scbuttons_scbuttons_component__["a" /* ScbuttonsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__blockchain_blockchain_component__["a" /* BlockchainComponent */],
                __WEBPACK_IMPORTED_MODULE_23__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_25__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_26__balance_balance_component__["a" /* BalanceComponent */],
                __WEBPACK_IMPORTED_MODULE_27__hash_hash_component__["a" /* HashComponent */],
                __WEBPACK_IMPORTED_MODULE_29__verify_verify_component__["a" /* VerifyComponent */],
                __WEBPACK_IMPORTED_MODULE_30__transaction_transaction_component__["a" /* TransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_36__block_block_component__["a" /* BlockComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__group_service__["a" /* GroupService */],
                __WEBPACK_IMPORTED_MODULE_16__message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_20__scbuttons_service__["a" /* ScbuttonsService */],
                __WEBPACK_IMPORTED_MODULE_24__users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_28__blocks_service__["a" /* BlocksService */],
                __WEBPACK_IMPORTED_MODULE_31__transaction_service__["a" /* TransactionService */],
                __WEBPACK_IMPORTED_MODULE_32__ipadress_service__["a" /* IpadressService */],
                __WEBPACK_IMPORTED_MODULE_33__rest_service__["a" /* RestService */],
                __WEBPACK_IMPORTED_MODULE_34__server_socket_service__["a" /* WebsocketService */],
                __WEBPACK_IMPORTED_MODULE_35__push_service_service__["a" /* PushService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/balance/balance.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/balance/balance.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!showBalance\">\n  balance works!\n</div>\n"

/***/ }),

/***/ "./src/app/balance/balance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BalanceComponent = /** @class */ (function () {
    function BalanceComponent() {
    }
    BalanceComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], BalanceComponent.prototype, "showBalance", void 0);
    BalanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-balance',
            template: __webpack_require__("./src/app/balance/balance.component.html"),
            styles: [__webpack_require__("./src/app/balance/balance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BalanceComponent);
    return BalanceComponent;
}());



/***/ }),

/***/ "./src/app/block.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
var Block = /** @class */ (function () {
    function Block(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Block;
}());



/***/ }),

/***/ "./src/app/block/block.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/block/block.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  block works!\n</p>\n"

/***/ }),

/***/ "./src/app/block/block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockComponent = /** @class */ (function () {
    function BlockComponent() {
    }
    BlockComponent.prototype.ngOnInit = function () {
    };
    BlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-block',
            template: __webpack_require__("./src/app/block/block.component.html"),
            styles: [__webpack_require__("./src/app/block/block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/blockchain/blockchain.component.css":
/***/ (function(module, exports) {

module.exports = ".small {\r\n    font-size: small;\r\n}\r\n.title {\r\n    font-size: small;\r\n    background-color: cornflowerblue;\r\n    color: darkslategray;\r\n}\r\n.card {\r\n    margin: 4px;\r\n    text-align: center;\r\n}\r\n.button {\r\n    text-align: right;\r\n}\r\n.swc {\r\n    text-align: right;\r\n    color: blue;\r\n}\r\n.visible-green {\r\n    font-size: small;\r\n    background: rgb(223, 240, 216);\r\n}\r\n.visible-red {\r\n    font-size: small;\r\n    background: rgb(250, 220, 220);\r\n}\r\n"

/***/ }),

/***/ "./src/app/blockchain/blockchain.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\n<button mat-raised-button (click)=\"toggleBlocks()\">Show/hide blocks</button>\n<div [hidden]=\"showBlocks\">\n<mat-grid-list cols=\"4\" rowHeight=\"320px\">\n    <mat-grid-tile *ngFor=\"let block of blocks\">\n        <mat-card class=\"card\">\n            <mat-card-title class=\"title\">Block #{{block.id}}</mat-card-title>\n            <div class=\"small\">Nonce: {{block.nonce}}</div>\n            <div class=\"small\">Previous hash: {{block.previousHash}}</div>\n            <div class=\"small\">Hash: {{block.hash}}</div>\n            <a mat-button routerLink=\"/block/{{block.id}}\">Show</a>\n        </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>\n</div>\n<mat-divider></mat-divider>\n<button mat-raised-button (click)=\"toggleTransactions()\">Show/hide pending Tx</button>\n<button mat-raised-button (click)=\"createGenesisBlock()\">Create genesis block!</button>\n<button mat-raised-button (click)=\"donateEveryUser()\">Donate!</button>\n<button mat-raised-button (click)=\"deletePendingTransactions()\">Remove pending Tx</button>\n<div [hidden]=\"showTransactions\">\n<mat-grid-list cols=\"4\" rowHeight=\"250px\">\n    <mat-grid-tile *ngFor=\"let transaction of transactions\">\n        <mat-card class=\"card\">\n            <mat-card-title class=\"title\">Transaction #{{transaction.id}}</mat-card-title>\n            <div class=\"small\">{{transaction.publicKeyFrom}}</div>=>\n            <div class=\"small\">{{transaction.publicKeyTo}}</div>\n            <div class=\"swc\">Amount: {{transaction.amount}} SwC</div>\n        </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/blockchain/blockchain.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockchainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block__ = __webpack_require__("./src/app/block.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("./src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transaction_service__ = __webpack_require__("./src/app/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__push_service_service__ = __webpack_require__("./src/app/push-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blocks_service__ = __webpack_require__("./src/app/blocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_crypto_js_sha256__ = __webpack_require__("./node_modules/crypto-js/sha256.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_crypto_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_crypto_js_sha256__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BlockchainComponent = /** @class */ (function () {
    function BlockchainComponent(blocksService, usersService, messageService, transactionService, pushService, zone, router) {
        this.blocksService = blocksService;
        this.usersService = usersService;
        this.messageService = messageService;
        this.transactionService = transactionService;
        this.pushService = pushService;
        this.zone = zone;
        this.router = router;
        this.showBlocks = false;
        this.showTransactions = false;
    }
    BlockchainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showBlocks = false;
        this.showTransactions = false;
        this.zone.run(function () {
            _this.blocksService.items$.subscribe(function (items) {
                _this.blocks = items;
            });
            _this.usersService.getSharedItems();
            _this.usersService.items$.subscribe(function (items) {
                _this.users = items;
            });
            _this.blocksService.getSharedItems();
            _this.transactionService.transactions$.subscribe(function (transactions) {
                _this.transactions = transactions;
            });
            _this.transactionService.getSharedTransactions();
        });
    };
    BlockchainComponent.prototype.setColor = function (equal) {
        if (equal) {
            this.class = ["visible-green"];
        }
        else {
            this.class = ["visible-red"];
        }
    };
    BlockchainComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.items$
            .subscribe(function (users) { return _this.users = users; });
    };
    BlockchainComponent.prototype.toggleBlocks = function () {
        this.showBlocks = !this.showBlocks;
    };
    BlockchainComponent.prototype.toggleTransactions = function () {
        this.showTransactions = !this.showTransactions;
    };
    BlockchainComponent.prototype.showBlock = function (id) {
        this.messageService.add('BlockchainComponent: show block: ' + id);
        this.router.navigate['/block/id'];
    };
    BlockchainComponent.prototype.createGenesisBlock = function () {
        var _this = this;
        this.deletePendingTransactions();
        var countdown = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 200).take(3);
        countdown.subscribe(function (i) {
            _this.messageService.add('BlockchainComponent: create genesis block: ' + i);
            if (i == 0) {
                _this.blocksService.deleteAllSharedItem();
            }
            if (i == 1) {
                _this.genesis = {
                    id: 0,
                    ownerId: _this.moderator.id,
                    nonce: 500,
                    data: {
                        tx: ""
                    },
                    hash: "",
                    previousHash: ""
                };
                _this.genesis.hash = '' + __WEBPACK_IMPORTED_MODULE_10_crypto_js_sha256__(_this.genesis.nonce +
                    _this.genesis.previousHash +
                    _this.genesis.data);
                _this.blocksService.createSharedItem(new __WEBPACK_IMPORTED_MODULE_3__block__["a" /* Block */](_this.genesis));
            }
        });
    };
    BlockchainComponent.prototype.donateEveryUser = function () {
        var _this = this;
        var tx = {
            ownerId: this.moderator.id,
            publicKeyFrom: this.moderator.publicKey,
            amount: 5000,
            id: 0,
            publicKeyTo: null
        };
        var noUsers = this.users.length;
        var countdown = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 200).take(noUsers + 1);
        countdown.subscribe(function (i) {
            if (i == noUsers) {
                if (_this.blocks[0]) {
                    var nextBlock = new __WEBPACK_IMPORTED_MODULE_3__block__["a" /* Block */]();
                    nextBlock['nonce'] = _this.blocks[0].nonce;
                    nextBlock['tx'] = _this.transactionService.transactions;
                    nextBlock['previousHash'] = _this.blocks[0].hash;
                    nextBlock['ownerId'] = _this.moderator.id,
                        nextBlock.hash = '' + __WEBPACK_IMPORTED_MODULE_10_crypto_js_sha256__(nextBlock.nonce +
                            nextBlock.previousHash +
                            nextBlock.data);
                    _this.blocksService.createSharedItem(nextBlock);
                }
            }
            else {
                var user = _this.users[i];
                if (user.id != _this.moderator.id) {
                    _this.messageService.add('BlockchainComponent: donateEveryUser: ' + user.id + ':' + _this.moderator.nickName + '=>' + user.nickName);
                    tx['publicKeyTo'] = user.publicKey;
                    _this.transactionService.createSharedTransaction(tx);
                }
            }
        });
    };
    BlockchainComponent.prototype.deletePendingTransactions = function () {
        this.transactionService.deleteAllSharedTransactions();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */])
    ], BlockchainComponent.prototype, "moderator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */])
    ], BlockchainComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], BlockchainComponent.prototype, "showBlocks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], BlockchainComponent.prototype, "showTransactions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], BlockchainComponent.prototype, "class", void 0);
    BlockchainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blockchain',
            template: __webpack_require__("./src/app/blockchain/blockchain.component.html"),
            styles: [__webpack_require__("./src/app/blockchain/blockchain.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__blocks_service__["a" /* BlocksService */],
            __WEBPACK_IMPORTED_MODULE_5__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_6__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_7__transaction_service__["a" /* TransactionService */],
            __WEBPACK_IMPORTED_MODULE_8__push_service_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], BlockchainComponent);
    return BlockchainComponent;
}());



/***/ }),

/***/ "./src/app/blocks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__block__ = __webpack_require__("./src/app/block.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__push_service_service__ = __webpack_require__("./src/app/push-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var API_URL = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].apiUrl;
var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]();
headers.append('Content-type', 'application/json');
var opts = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* RequestOptions */]();
opts.headers = headers;
var BlocksService = /** @class */ (function () {
    function BlocksService(messageService, http, pushService) {
        this.messageService = messageService;
        this.http = http;
        this.pushService = pushService;
        this.items$ = new __WEBPACK_IMPORTED_MODULE_10_rxjs__["BehaviorSubject"](null);
        this.message = {
            event: 'RefreshBlocks',
            message: ''
        };
        this.serviceName = '/blocks/';
        this.serviceFilter = '?ownerId=';
        this.serviceParam = 0;
        this.items = [];
    }
    BlocksService.prototype.getSharedItems = function () {
        var _this = this;
        this.getAllItems().subscribe(function (items) {
            _this.messageService.add('GenericService: fetched items: ' + items.length);
            items.forEach(function (item) {
                _this.items.push(new __WEBPACK_IMPORTED_MODULE_7__block__["a" /* Block */](item));
            });
            _this.items$.next(items);
        });
    };
    // API: POST 
    BlocksService.prototype.createSharedItem = function (item) {
        var _this = this;
        this.messageService.add('GenericService: create item');
        this.createItem(item).subscribe(function (newItem) {
            _this.items.push(newItem);
            _this.messageService.add('GenericService: created item: ' + newItem.id);
            _this.items$.next(_this.items);
            _this.pushService.messages.next(_this.message);
        });
    };
    // API: PUT
    BlocksService.prototype.updateSharedItem = function (item) {
        var _this = this;
        this.messageService.add('GenericService: updated item: ' + item.id);
        this.updateItem(item.id, item).subscribe(function (it) {
            var myItems = _this.items;
            myItems.forEach(function (myItem) {
                if (myItem.id == it.id) {
                    _this.items[myItem.id] = it;
                }
            });
            _this.items$.next(_this.items);
            _this.pushService.messages.next(_this.message);
        });
    };
    // API: DELETE
    BlocksService.prototype.deleteSharedItemById = function (itemId) {
        var _this = this;
        this.messageService.add('GenericService: delete item: ' + itemId);
        this.deleteItemById(itemId).subscribe(function (tr) {
            _this.items = _this.items.filter(function (item) { return item.id != itemId; });
            _this.messageService.add('GenericService: # of items: ' + _this.items.length);
            _this.items$.next(_this.items);
            _this.pushService.messages.next(_this.message);
        });
    };
    BlocksService.prototype.deleteAllSharedItem = function () {
        var _this = this;
        this.messageService.add('TransactionService: delete all transactions');
        this.messageService.add('GenericService: delete all items');
        if (this.items) {
            var allItems_1 = this.items;
            var noItems_1 = allItems_1.length;
            var countdown = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 100).take(noItems_1 + 1);
            countdown.subscribe(function (i) {
                if (i == noItems_1) {
                    _this.items = [];
                    _this.items$.next(_this.items);
                    _this.pushService.messages.next(_this.message);
                }
                else {
                    _this.deleteItemById(allItems_1[i].id).subscribe();
                }
            });
        }
    };
    BlocksService.prototype.getAllItems = function () {
        return this.http
            .get(API_URL + this.serviceName, opts)
            .map(function (response) {
            var items = response.json();
            return items;
        })
            .catch(this.handleError);
    };
    BlocksService.prototype.getItems = function (userId) {
        var _this = this;
        return this.http
            .get(API_URL + this.serviceName + this.serviceFilter + this.serviceParam, opts)
            .map(function (response) {
            var items = response.json();
            _this.messageService.add('RestService: fetched items: ' + items.length);
            return items;
        })
            .catch(this.handleError);
    };
    BlocksService.prototype.handleError = function (error) {
        this.messageService.add('ApiService::handleError' + error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    // API: POST 
    BlocksService.prototype.createItem = function (item) {
        this.messageService.add('ItemService: create item');
        return this.http
            .post(API_URL + this.serviceName, item, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: GET
    BlocksService.prototype.getItemById = function (itemId) {
        this.messageService.add('ItemService: fetched item: ' + itemId);
        return this.http
            .get(API_URL + this.serviceName + itemId, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: PUT
    BlocksService.prototype.updateItem = function (itemId, items) {
        this.messageService.add('ItemService: updated transaction: ' + itemId);
        return this.http
            .put(API_URL + this.serviceName + itemId, items, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: DELETE
    BlocksService.prototype.deleteItemById = function (itemId) {
        this.messageService.add('ItemService: deleted itemId: ' + itemId);
        return this.http
            .delete(API_URL + this.serviceName + itemId, opts)
            .map(function (response) { return null; })
            .catch(this.handleError);
    };
    BlocksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_11__push_service_service__["a" /* PushService */]])
    ], BlocksService);
    return BlocksService;
}());



/***/ }),

/***/ "./src/app/group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__group__ = __webpack_require__("./src/app/group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var API_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl;
var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
headers.append('Content-type', 'application/json');
var opts = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]();
opts.headers = headers;
var GroupService = /** @class */ (function () {
    function GroupService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
    }
    GroupService.prototype.getGroups = function () {
        var _this = this;
        return this.http
            .get(API_URL + '/scgroups', opts)
            .map(function (response) {
            var groups = response.json();
            _this.messageService.add('GroupService: fetched groups: ' + groups.length);
            return groups.map(function (scgroup) { return new __WEBPACK_IMPORTED_MODULE_7__group__["a" /* Group */](scgroup); });
        })
            .catch(this.handleError);
    };
    GroupService.prototype.handleError = function (error) {
        this.messageService.add("ApiService::handleError" + error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    GroupService.prototype.getGroup = function (id) {
        var _this = this;
        // Todo: send the message _after_ fetching the hero
        return this.http
            .get(API_URL + '/scgroups', opts)
            .map(function (response) {
            var scgroups = response.json();
            _this.messageService.add('GroupService: fetched group: ' + scgroups.id);
            return new __WEBPACK_IMPORTED_MODULE_7__group__["a" /* Group */](scgroups.find(function (group) { return group.id === id; }));
        });
    };
    GroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
var Group = /** @class */ (function () {
    function Group(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Group;
}());



/***/ }),

/***/ "./src/app/hash/hash.component.css":
/***/ (function(module, exports) {

module.exports = ".visible-green {\r\n    font-weight: bold;\r\n    background: rgb(223, 240, 216);\r\n}\r\n.visible-red {\r\n    font-weight: bold;\r\n    background: rgb(250, 220, 220);\r\n}\r\n.container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n.container > * {\r\n    width: 100%;\r\n}\r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/app/hash/hash.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!showHash\">\n  <div class=\"container\">\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"text1\" (ngModelChange)=\"sha1($event)\" placeholder=\"Text string 1\">\n    </mat-form-field>\n    <mat-form-field >\n      <textarea [ngClass]=\"class\" matInput matTextareaAutosize [(ngModel)]=\"hash1\" disabled placeholder=\"Hash 1\"></textarea>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"text2\" (ngModelChange)=\"sha2($event)\" placeholder=\"Text string 2\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea [ngClass]=\"class\" matInput matTextareaAutosize [(ngModel)]=\"hash2\" disabled placeholder=\"Hash 2\"></textarea>\n    </mat-form-field>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/hash/hash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js_sha256__ = __webpack_require__("./node_modules/crypto-js/sha256.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js_sha256__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HashComponent = /** @class */ (function () {
    function HashComponent(messageService) {
        this.messageService = messageService;
    }
    HashComponent.prototype.ngOnInit = function () {
        this.hash1 = "";
        this.hash2 = "";
    };
    HashComponent.prototype.sha1 = function (text) {
        this.hash1 = __WEBPACK_IMPORTED_MODULE_1_crypto_js_sha256__(text);
        this.setColor(this.hash1.toString() == this.hash2.toString());
    };
    HashComponent.prototype.sha2 = function (text) {
        this.hash2 = __WEBPACK_IMPORTED_MODULE_1_crypto_js_sha256__(text);
        this.setColor(this.hash1.toString() == this.hash2.toString());
    };
    HashComponent.prototype.setColor = function (equal) {
        if (equal) {
            this.class = ["visible-green"];
        }
        else {
            this.class = ["visible-red"];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HashComponent.prototype, "showHash", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], HashComponent.prototype, "class", void 0);
    HashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hash',
            template: __webpack_require__("./src/app/hash/hash.component.html"),
            styles: [__webpack_require__("./src/app/hash/hash.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], HashComponent);
    return HashComponent;
}());



/***/ }),

/***/ "./src/app/ipadress.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpadressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IpadressService = /** @class */ (function () {
    function IpadressService(http) {
        this.http = http;
    }
    //Get IP Adress using http://freegeoip.net/json/?callback
    IpadressService.prototype.getIpAddress = function () {
        return this.http
            .get('http://freegeoip.net/json/?callback')
            .map(function (response) { return response || {}; })
            .catch(this.handleError);
    };
    IpadressService.prototype.handleError = function (error) {
        //Log error in the browser console
        console.error('observable error: ', error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    IpadressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], IpadressService);
    return IpadressService;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
        this.subscription = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
        this.setTimer();
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
        this.subscription.shift().unsubscribe();
    };
    MessageService.prototype.setTimer = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(1000000, 0);
        this.subscription.push(timer.subscribe(function (t) {
            _this.clear();
        }));
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\r\n.message {\r\n  font-size: 7pt;\r\n  color: darkgreen\r\n}\r\n.header {\r\n  font-size: 7pt;\r\n  color: darkgray\r\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n  <div class=\"header\" (click)=\"messageService.clear()\">Messages</div>\n  <div class=\"message\" *ngFor='let message of messageService.messages'> {{message}} </div>\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/push-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_socket_service__ = __webpack_require__("./src/app/server-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PushService = /** @class */ (function () {
    function PushService(wsService, messageServer) {
        this.messageServer = messageServer;
        this.messages = wsService
            .connect(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].chatUrl)
            .map(function (response) {
            var data = JSON.parse(response.data);
            messageServer.add('PushService: message: ' + data.event + '/' + data.message);
            return {
                event: data.event,
                message: data.message
            };
        });
    }
    PushService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_socket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */]])
    ], PushService);
    return PushService;
}());



/***/ }),

/***/ "./src/app/rest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var API_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
headers.append('Content-type', 'application/json');
var opts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]();
opts.headers = headers;
var RestService = /** @class */ (function () {
    function RestService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
    }
    RestService.prototype.getAllItems = function () {
        return this.http
            .get(API_URL + this.serviceName, opts)
            .map(function (response) {
            var items = response.json();
            return items;
        })
            .catch(this.handleError);
    };
    RestService.prototype.getItems = function (userId) {
        var _this = this;
        return this.http
            .get(API_URL + this.serviceName + this.serviceFilter + this.serviceParam, opts)
            .map(function (response) {
            var items = response.json();
            _this.messageService.add('RestService: fetched items: ' + items.length);
            return items;
        })
            .catch(this.handleError);
    };
    RestService.prototype.handleError = function (error) {
        this.messageService.add('ApiService::handleError' + error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    // API: POST 
    RestService.prototype.createItem = function (item) {
        this.messageService.add('ItemService: create item');
        return this.http
            .post(API_URL + this.serviceName, item, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: GET
    RestService.prototype.getItemById = function (itemId) {
        this.messageService.add('ItemService: fetched item: ' + itemId);
        return this.http
            .get(API_URL + this.serviceName + itemId, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: PUT
    RestService.prototype.updateItem = function (itemId, items) {
        this.messageService.add('ItemService: updated transaction: ' + itemId);
        return this.http
            .put(API_URL + this.serviceName + itemId, items, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: DELETE
    RestService.prototype.deleteItemById = function (itemId) {
        this.messageService.add('ItemService: deleted itemId: ' + itemId);
        return this.http
            .delete(API_URL + this.serviceName + itemId, opts)
            .map(function (response) { return null; })
            .catch(this.handleError);
    };
    RestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/scbutton.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScButton; });
var ScButton = /** @class */ (function () {
    function ScButton(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return ScButton;
}());



/***/ }),

/***/ "./src/app/scbuttons.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScbuttonsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scbutton__ = __webpack_require__("./src/app/scbutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var API_URL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
var headers = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]();
headers.append('Content-type', 'application/json');
var opts = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* RequestOptions */]();
opts.headers = headers;
var ScbuttonsService = /** @class */ (function () {
    function ScbuttonsService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
    }
    ScbuttonsService.prototype.getButtons = function () {
        var _this = this;
        return this.http
            .get(API_URL + '/scbuttons', opts)
            .map(function (response) {
            var buttons = response.json();
            _this.messageService.add('ButtonService: fetched buttons: ' + buttons.length);
            return buttons.map(function (scbutton) { return new __WEBPACK_IMPORTED_MODULE_6__scbutton__["a" /* ScButton */](scbutton); });
        })
            .catch(this.handleError);
    };
    ScbuttonsService.prototype.handleError = function (error) {
        this.messageService.add("ApiService::handleError" + error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    // API: POST 
    ScbuttonsService.prototype.createButton = function (scbutton) {
        this.messageService.add('ButtonService: create button');
        return this.http
            .post(API_URL + '/scbuttons', scbutton, opts)
            .map(function (response) {
            return new __WEBPACK_IMPORTED_MODULE_6__scbutton__["a" /* ScButton */](response.json());
        })
            .catch(this.handleError);
    };
    // API: GET
    ScbuttonsService.prototype.getButtonById = function (buttonId) {
        this.messageService.add('ButtonService: fetched button: ' + buttonId);
        return this.http
            .get(API_URL + '/scbuttons/' + buttonId, opts)
            .map(function (response) {
            return new __WEBPACK_IMPORTED_MODULE_6__scbutton__["a" /* ScButton */](response.json());
        })
            .catch(this.handleError);
    };
    // API: PUT
    ScbuttonsService.prototype.updateButton = function (scbutton) {
        this.messageService.add('ButtonService: updated buttons: ' + scbutton.id);
        return this.http
            .put(API_URL + '/scbuttons/' + scbutton.id, scbutton, opts)
            .map(function (response) {
            return new __WEBPACK_IMPORTED_MODULE_6__scbutton__["a" /* ScButton */](response.json());
        })
            .catch(this.handleError);
    };
    // API: DELETE
    ScbuttonsService.prototype.deleteButtonById = function (buttonId) {
        this.messageService.add('ButtonService: updated buttons: ' + buttonId);
        return this.http
            .delete(API_URL + '/scbuttons/' + buttonId, opts)
            .map(function (response) { return null; })
            .catch(this.handleError);
    };
    ScbuttonsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */]])
    ], ScbuttonsService);
    return ScbuttonsService;
}());



/***/ }),

/***/ "./src/app/scbuttons/scbuttons.component.css":
/***/ (function(module, exports) {

module.exports = ".button\r\n{\r\n    width: 130px;\r\n    margin: 4px\r\n}"

/***/ }),

/***/ "./src/app/scbuttons/scbuttons.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"button\" mat-raised-button  *ngFor=\"let scbutton of scbuttons\" (click)=\"buttonClick(scbutton.id)\" [disabled]=\"scbutton.disabled\">{{scbutton.name}}</button>\n"

/***/ }),

/***/ "./src/app/scbuttons/scbuttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScbuttonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scbuttons_service__ = __webpack_require__("./src/app/scbuttons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("./src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__push_service_service__ = __webpack_require__("./src/app/push-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_service__ = __webpack_require__("./src/app/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_service__ = __webpack_require__("./src/app/blocks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScbuttonsComponent = /** @class */ (function () {
    function ScbuttonsComponent(buttonsService, messageService, zone, pushService, transactionService, blocksService) {
        this.buttonsService = buttonsService;
        this.messageService = messageService;
        this.zone = zone;
        this.pushService = pushService;
        this.transactionService = transactionService;
        this.blocksService = blocksService;
        this.toggles = {};
    }
    ScbuttonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getScbuttons();
        this.zone.run(function () {
            _this.pushService.messages.subscribe(function (myMessage) {
                _this.messageService.add('SwirlCoinWallet: new push message: ' + myMessage.event);
                if (myMessage.event == "Wallet") {
                    _this.getScbuttons();
                }
                if (myMessage.event == "RefreshTransaction") {
                    _this.transactionService.getSharedTransactions();
                }
                if (myMessage.event == "Transaction") {
                    _this.transactionService.getSharedTransactions();
                }
                if (myMessage.event == "RefreshBlocks") {
                    _this.blocksService.getSharedItems();
                }
            });
        });
    };
    ScbuttonsComponent.prototype.getScbuttons = function () {
        var _this = this;
        this.buttonsService.getButtons()
            .subscribe(function (scbuttons) {
            _this.scbuttons = scbuttons;
            _this.scbuttons.forEach(function (element) {
                _this.toggles[element.name] = false;
            });
        });
    };
    ScbuttonsComponent.prototype.buttonClick = function (buttonId) {
        var _this = this;
        this.messageService.add('SwirlCoinWallet: buttonClick: ' + this.scbuttons[buttonId].name);
        this.scbuttons.forEach(function (element) {
            element.id == buttonId ?
                _this.toggles[element.name] = !_this.toggles[element.name] :
                _this.toggles[element.name] = false;
        });
    };
    ScbuttonsComponent.prototype.getToggles = function (name) {
        return this.toggles[name];
    };
    ScbuttonsComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], ScbuttonsComponent.prototype, "scbuttons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */])
    ], ScbuttonsComponent.prototype, "user", void 0);
    ScbuttonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scbuttons',
            template: __webpack_require__("./src/app/scbuttons/scbuttons.component.html"),
            styles: [__webpack_require__("./src/app/scbuttons/scbuttons.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scbuttons_service__["a" /* ScbuttonsService */],
            __WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__push_service_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_5__transaction_service__["a" /* TransactionService */],
            __WEBPACK_IMPORTED_MODULE_6__blocks_service__["a" /* BlocksService */]])
    ], ScbuttonsComponent);
    return ScbuttonsComponent;
}());



/***/ }),

/***/ "./src/app/scheader/scheader.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scheader/scheader.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h4><img src=\"assets/images/SwirlCoin32.png\">\n    SwirlCoin {{pageName}} \n  </h4>\n</div>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/scheader/scheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheaderComponent = /** @class */ (function () {
    function ScheaderComponent() {
    }
    ScheaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ScheaderComponent.prototype, "pageName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ScheaderComponent.prototype, "groupName", void 0);
    ScheaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scheader',
            template: __webpack_require__("./src/app/scheader/scheader.component.html"),
            styles: [__webpack_require__("./src/app/scheader/scheader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScheaderComponent);
    return ScheaderComponent;
}());



/***/ }),

/***/ "./src/app/server-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("./src/app/message.service.ts");
// Many thanks to https://tutorialedge.net/typescript/angular/angular-websockets-tutorial/
//
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsocketService = /** @class */ (function () {
    function WebsocketService(messageService) {
        this.messageService = messageService;
    }
    WebsocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            this.messageService.add("WebsocketService: Successfully connected: " + url);
        }
        return this.subject;
    };
    WebsocketService.prototype.create = function (url) {
        var _this = this;
        var ws = new WebSocket(url);
        var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                _this.messageService.add("WebsocketService: readyState: " + ws.readyState);
                if (ws.readyState === WebSocket.CLOSED) {
                    _this.messageService.add("WebsocketService: closed, reopening");
                    return false;
                }
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                    return true;
                }
            }
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Subject */].create(observer, observable);
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/swirlcoinminer/swirlcoinminer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/swirlcoinminer/swirlcoinminer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  swirlcoinminer works!\n</p>\n"

/***/ }),

/***/ "./src/app/swirlcoinminer/swirlcoinminer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwirlcoinminerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwirlcoinminerComponent = /** @class */ (function () {
    function SwirlcoinminerComponent() {
    }
    SwirlcoinminerComponent.prototype.ngOnInit = function () {
    };
    SwirlcoinminerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-swirlcoinminer',
            template: __webpack_require__("./src/app/swirlcoinminer/swirlcoinminer.component.html"),
            styles: [__webpack_require__("./src/app/swirlcoinminer/swirlcoinminer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SwirlcoinminerComponent);
    return SwirlcoinminerComponent;
}());



/***/ }),

/***/ "./src/app/swirlcoinportal/swirlcoinportal.component.css":
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n    float: left;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n[class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n  }\r\na {\r\n    text-decoration: none;\r\n  }\r\n*, *:after, *:before {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n  }\r\nh3 {\r\n    text-align: center; margin-bottom: 0;\r\n  }\r\nh4 {\r\n    position: relative;\r\n  }\r\n.grid {\r\n    margin: 0;\r\n  }\r\n.col-1-4 {\r\n    width: 25%;\r\n  }\r\n.module {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #eee;\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: #607D8B;\r\n    border-radius: 2px;\r\n  }\r\n.module:hover {\r\n    background-color: #EEE;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n  }\r\n.grid-pad {\r\n    padding: 10px 0;\r\n  }\r\n.grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/swirlcoinportal/swirlcoinportal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-scheader [pageName]=\"pageName\"></app-scheader>\n<app-user *ngIf=\"user!=null\" [user]=\"user\" [editUser]=\"editUser\"></app-user>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let group of groups\" class=\"button btn-primary btn-sm\" routerLink=\"/wallet\">\n    {{group.name}}\n  </a>\n</div>\n<span *ngFor=\"let button of buttons\" (click)=\"toggleButtonState(button.id)\">\n  <button mat-raised-button [disabled]=\"button.disabled\" >{{button.name}}</button>\n</span>\n<mat-tab-group>\n  <mat-tab label=\"Users\">\n    <app-users [showUsers]=\"false\"></app-users>\n  </mat-tab>\n<mat-tab label=\"Blockchain\">\n  <app-blockchain [showBlocks]=\"false\" [showTransactions]=\"false\" [moderator]=\"user\"></app-blockchain>\n</mat-tab>\n<mat-tab label=\"Messages\">\n  <app-messages></app-messages>\n</mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/swirlcoinportal/swirlcoinportal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwirlcoinportalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__push_service_service__ = __webpack_require__("./src/app/push-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_service__ = __webpack_require__("./src/app/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scbuttons_service__ = __webpack_require__("./src/app/scbuttons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_service__ = __webpack_require__("./src/app/transaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SwirlcoinportalComponent = /** @class */ (function () {
    function SwirlcoinportalComponent(pushService, usersService, groupService, messageService, buttonService, transactionService, zone) {
        this.pushService = pushService;
        this.usersService = usersService;
        this.groupService = groupService;
        this.messageService = messageService;
        this.buttonService = buttonService;
        this.transactionService = transactionService;
        this.zone = zone;
        this.pageName = "Portal";
        this.messageWallet = {
            event: 'Wallet',
            message: 'Button changed'
        };
    }
    SwirlcoinportalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zone.run(function () {
            _this.usersService.getSharedItems();
            _this.usersService.items$.subscribe(function (items) {
                _this.users = items;
                if (items) {
                    _this.userId = 1;
                    if (_this.userId != null) {
                        _this.user = _this.users.filter(function (user) { return user.id == _this.userId; })[0];
                        _this.messageService.add('SwirlCoinWallet: getUser: ' + _this.userId);
                        _this.editUser = false;
                    }
                }
            });
            _this.getGroups();
            _this.getButtons();
            _this.transactionService.transactions$.subscribe(function (transactions) { return _this.transactions = transactions; });
            _this.pushService.messages.subscribe(function (myMessage) {
                _this.messageService.add('SwirlCoinPortal: new push message: ' + myMessage.event);
                if (myMessage.event == "Transaction") {
                    _this.transactionService.getSharedTransactions();
                }
                if (myMessage.event == "RefreshTransaction") {
                    _this.transactionService.getSharedTransactions();
                }
                if (myMessage.event == "RefreshUsers") {
                    _this.usersService.getSharedItems();
                }
            });
        });
    };
    SwirlcoinportalComponent.prototype.getGroups = function () {
        var _this = this;
        this.groupService.getGroups()
            .subscribe(function (groups) { return _this.groups = groups; });
    };
    SwirlcoinportalComponent.prototype.getButtons = function () {
        var _this = this;
        this.buttonService.getButtons().subscribe(function (buttons) { return _this.buttons = buttons; });
    };
    SwirlcoinportalComponent.prototype.toggleButtonState = function (id) {
        var _this = this;
        if (this.buttons[id].disabled == "true") {
            this.buttons[id].disabled = "false";
        }
        else {
            this.buttons[id].disabled = "true";
        }
        this.buttonService.updateButton(this.buttons[id]).subscribe(function (button) { return _this.buttons[id] = button; });
        this.pushService.messages.next(this.messageWallet);
    };
    SwirlcoinportalComponent.prototype.ngOnDestroy = function () {
    };
    SwirlcoinportalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-swirlcoinportal',
            template: __webpack_require__("./src/app/swirlcoinportal/swirlcoinportal.component.html"),
            styles: [__webpack_require__("./src/app/swirlcoinportal/swirlcoinportal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__push_service_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__scbuttons_service__["a" /* ScbuttonsService */],
            __WEBPACK_IMPORTED_MODULE_6__transaction_service__["a" /* TransactionService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], SwirlcoinportalComponent);
    return SwirlcoinportalComponent;
}());



/***/ }),

/***/ "./src/app/swirlcoinwallet/swirlcoinwallet.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n  min-height: 300px\r\n}\r\n.buttons {\r\n  margin: 4px;\r\n  min-block-size: 100px\r\n}"

/***/ }),

/***/ "./src/app/swirlcoinwallet/swirlcoinwallet.component.html":
/***/ (function(module, exports) {

module.exports = "<app-scheader [pageName]=\"pageName\"></app-scheader>\n<div class=\"container\">\n    <app-user></app-user>\n    <app-transaction [showTransaction]=\"walletButtons.getToggles('Send SC')\" ></app-transaction>\n    <app-balance [showBalance]=\"walletButtons.getToggles('Balance')\"></app-balance>\n    <app-hash [showHash]=\"walletButtons.getToggles('Hash')\"></app-hash>\n    <app-verify [blocks]=\"blocks\" [showVerifyBC]=\"walletButtons.getToggles('Verify blockchain')\"></app-verify>\n</div>\n<mat-divider></mat-divider>\n<div class=\"buttons\">\n    <app-scbuttons #walletButtons></app-scbuttons>\n</div>\n<mat-divider></mat-divider>\n<app-messages></app-messages>"

/***/ }),

/***/ "./src/app/swirlcoinwallet/swirlcoinwallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwirlcoinwalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__push_service_service__ = __webpack_require__("./src/app/push-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scbuttons_service__ = __webpack_require__("./src/app/scbuttons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_service__ = __webpack_require__("./src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SwirlcoinwalletComponent = /** @class */ (function () {
    function SwirlcoinwalletComponent(route, location, buttonService, messageService, pushService, zone, usersService) {
        this.route = route;
        this.location = location;
        this.buttonService = buttonService;
        this.messageService = messageService;
        this.pushService = pushService;
        this.zone = zone;
        this.usersService = usersService;
        this.pageName = "Wallet";
    }
    SwirlcoinwalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buttonService.getButtons().subscribe(function (buttons) {
            _this.buttons = buttons;
        });
        this.usersService.serviceGoal == "Wallet";
    };
    SwirlcoinwalletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-swirlcoinwallet',
            template: __webpack_require__("./src/app/swirlcoinwallet/swirlcoinwallet.component.html"),
            styles: [__webpack_require__("./src/app/swirlcoinwallet/swirlcoinwallet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__scbuttons_service__["a" /* ScbuttonsService */],
            __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__push_service_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_6__users_service__["a" /* UsersService */]])
    ], SwirlcoinwalletComponent);
    return SwirlcoinwalletComponent;
}());



/***/ }),

/***/ "./src/app/transaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transaction__ = __webpack_require__("./src/app/transaction.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__push_service_service__ = __webpack_require__("./src/app/push-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var API_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl;
var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
headers.append('Content-type', 'application/json');
var opts = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]();
opts.headers = headers;
var TransactionService = /** @class */ (function () {
    function TransactionService(messageService, http, pushService) {
        this.messageService = messageService;
        this.http = http;
        this.pushService = pushService;
        this.transactions$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["BehaviorSubject"](null);
        this.message = {
            event: 'RefreshTransaction',
            message: ''
        };
        this.serviceName = "/transactions/";
        this.serviceFilter = "?ownerId=";
        this.transactions = [];
    }
    TransactionService.prototype.getSharedTransactions = function () {
        var _this = this;
        this.getAllItems().subscribe(function (transactions) {
            _this.messageService.add('TransactionService: fetched transactions: ' + transactions.length);
            _this.transactions = [];
            transactions.forEach(function (transaction) {
                _this.transactions.push(new __WEBPACK_IMPORTED_MODULE_3__transaction__["a" /* Transaction */](transaction));
            });
            _this.transactions$.next(transactions);
        });
    };
    // API: POST 
    TransactionService.prototype.createSharedTransaction = function (transaction) {
        var _this = this;
        this.messageService.add('TransactionService: create transaction');
        this.createItem(transaction).subscribe(function (newTransaction) {
            _this.transactions.push(newTransaction);
            _this.messageService.add('TransactionService: created transaction: ' + newTransaction.id);
            _this.transactions$.next(_this.transactions);
            _this.pushService.messages.next(_this.message);
        });
    };
    // No PUT !
    // API: DELETE
    TransactionService.prototype.deleteSharedTransactionById = function (transactionId) {
        var _this = this;
        this.messageService.add('TransactionService: delete transaction: ' + transactionId);
        this.deleteItemById(transactionId).subscribe(function (tr) {
            _this.transactions = _this.transactions.filter(function (transaction) { return transaction.id != transactionId; });
            _this.messageService.add('TransactionService: # of transactions: ' + _this.transactions.length);
            _this.transactions$.next(_this.transactions);
            _this.pushService.messages.next(_this.message);
        });
    };
    TransactionService.prototype.deleteAllSharedTransactions = function () {
        var _this = this;
        this.messageService.add('TransactionService: delete all transactions');
        if (this.transactions) {
            var allTransactions_1 = this.transactions;
            var noItems_1 = allTransactions_1.length;
            this.messageService.add('TransactionService: delete all transactions' + this.transactions.length);
            var countdown = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 100).take(noItems_1 + 1);
            countdown.subscribe(function (i) {
                if (i == noItems_1) {
                    _this.transactions = [];
                    _this.transactions$.next(_this.transactions);
                    _this.pushService.messages.next(_this.message);
                }
                else {
                    _this.deleteItemById(allTransactions_1[i].id).subscribe();
                }
            });
        }
    };
    TransactionService.prototype.getAllItems = function () {
        return this.http
            .get(API_URL + this.serviceName, opts)
            .map(function (response) {
            var items = response.json();
            return items;
        })
            .catch(this.handleError);
    };
    TransactionService.prototype.getItems = function (userId) {
        var _this = this;
        return this.http
            .get(API_URL + this.serviceName + this.serviceFilter + this.serviceParam, opts)
            .map(function (response) {
            var items = response.json();
            _this.messageService.add('RestService: fetched items: ' + items.length);
            return items;
        })
            .catch(this.handleError);
    };
    TransactionService.prototype.handleError = function (error) {
        this.messageService.add('ApiService::handleError' + error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    // API: POST 
    TransactionService.prototype.createItem = function (item) {
        this.messageService.add('ItemService: create item');
        return this.http
            .post(API_URL + this.serviceName, item, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: GET
    TransactionService.prototype.getItemById = function (itemId) {
        this.messageService.add('ItemService: fetched item: ' + itemId);
        return this.http
            .get(API_URL + this.serviceName + itemId, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: PUT
    TransactionService.prototype.updateItem = function (itemId, items) {
        this.messageService.add('ItemService: updated transaction: ' + itemId);
        return this.http
            .put(API_URL + this.serviceName + itemId, items, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: DELETE
    TransactionService.prototype.deleteItemById = function (itemId) {
        this.messageService.add('ItemService: deleted itemId: ' + itemId);
        return this.http
            .delete(API_URL + this.serviceName + itemId, opts)
            .map(function (response) { return null; })
            .catch(this.handleError);
    };
    TransactionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_11__push_service_service__["a" /* PushService */]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "./src/app/transaction.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transaction; });
var Transaction = /** @class */ (function () {
    function Transaction(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Transaction;
}());



/***/ }),

/***/ "./src/app/transaction/transaction.component.css":
/***/ (function(module, exports) {

module.exports = ".small {\r\n    font-size: small;\r\n}\r\n.card {\r\n    margin: 4px;\r\n    text-align: center;\r\n}\r\n.button {\r\n    text-align: right;\r\n}\r\n.swc {\r\n    text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!showTransaction\">\n  <div>Add new transaction or view pending transactions</div>\n  <div *ngIf=\"newTransaction!=null\">\n    <mat-form-field>\n      <mat-select placeholder=\"To\" [(ngModel)]=\"newTransaction.publicKeyTo\" (ngModelChange)=\"userSelect($event)\">\n        <mat-option *ngFor=\"let user of users\" [value]=\"user.id\">\n          {{ user.nickName }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <div>\n        <input type=\"number\" width=\"100%\" matInput [(ngModel)]=\"newTransaction.amount\" placeholder=\"Amount of SwirlCoins\">\n      </div>\n    </mat-form-field>\n  </div>\n  <button [disabled]=\"newTransaction!=null\" mat-raised-button (click)=\"addTransaction()\">Add</button>\n  <button [disabled]=\"newTransaction==null\" mat-raised-button (click)=\"saveTransaction()\">Save</button>\n  <button [disabled]=\"transactions==null\" mat-raised-button (click)=\"checkTransactions()\">Check</button>\n  <div *ngFor=\"let transaction of transactions\">\n    <mat-card class=\"card\">\n      <div class=\"small\">{{transaction.publicKeyFrom}} => {{transaction.publicKeyTo}}</div>\n      <div class=\"swc\">Amount: {{transaction.amount}} SwC\n      </div>\n      <button class=\"button\" *ngIf=\"user.publicKey==transaction.publicKeyFrom\" mat-button color=\"accent\" (click)=\"deleteTransaction(transaction.id)\">Remove</button>\n    </mat-card>\n\n  </div>\n</div>\n<mat-divider></mat-divider>"

/***/ }),

/***/ "./src/app/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transaction__ = __webpack_require__("./src/app/transaction.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_service__ = __webpack_require__("./src/app/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__push_service_service__ = __webpack_require__("./src/app/push-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(transactionService, usersService, route, router, zone, messageService, pushService) {
        this.transactionService = transactionService;
        this.usersService = usersService;
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.messageService = messageService;
        this.pushService = pushService;
        this.pageName = "Transaction edit";
        this.groupname = "";
    }
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = +localStorage.getItem('userId');
        this.zone.run(function () {
            _this.transactionService.getSharedTransactions();
            _this.transactionService.transactions$.subscribe(function (items) {
                _this.transactions = items;
            });
            _this.usersService.getSharedItems();
            _this.usersService.items$.subscribe(function (items) {
                _this.users = items;
                if (items) {
                    _this.user = _this.users.filter(function (user) { return user.id == _this.userId; })[0];
                }
            });
        });
    };
    TransactionComponent.prototype.userSelect = function (id) {
        this.messageService.add('TransactionComponent: userSelected: ' + id);
        this.newTransaction.publicKeyTo = this.users[id].publicKey;
    };
    TransactionComponent.prototype.addTransaction = function () {
        this.newTransaction = new (__WEBPACK_IMPORTED_MODULE_3__transaction__["a" /* Transaction */]);
        this.newTransaction.ownerId = this.userId;
        this.newTransaction.publicKeyFrom = this.user.publicKey;
    };
    TransactionComponent.prototype.deleteTransaction = function (id) {
        this.transactionService.deleteSharedTransactionById(id);
    };
    TransactionComponent.prototype.saveTransaction = function () {
        var transaction = {
            ownerId: this.userId,
            amount: this.newTransaction.amount,
            publicKeyFrom: this.newTransaction.publicKeyFrom,
            publicKeyTo: this.newTransaction.publicKeyTo
        };
        var message = {
            event: 'Transaction',
            message: JSON.stringify(transaction)
        };
        this.transactionService.createSharedTransaction(this.newTransaction);
        this.pushService.messages.next(message);
        this.newTransaction = null;
    };
    TransactionComponent.prototype.checkTransactions = function () {
    };
    TransactionComponent.prototype.toggle = function () {
        this.showTransaction = !this.showTransaction;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], TransactionComponent.prototype, "userId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__transaction__["a" /* Transaction */])
    ], TransactionComponent.prototype, "newTransaction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TransactionComponent.prototype, "showTransaction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TransactionComponent.prototype, "transactions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TransactionComponent.prototype, "users", void 0);
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transaction',
            template: __webpack_require__("./src/app/transaction/transaction.component.html"),
            styles: [__webpack_require__("./src/app/transaction/transaction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__transaction_service__["a" /* TransactionService */],
            __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_7__push_service_service__["a" /* PushService */]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  \r\n.container > * {\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"user!=null\" [hidden]=\"!editUser\">\n  <div class=\"container\">\n    Please give or edit user attributes:\n    <mat-form-field>\n      <input required width=\"100%\" matInput [(ngModel)]=\"user.nickName\" placeholder=\"Nickname\">\n    </mat-form-field>\n    <mat-chip-list>\n      <mat-chip [selected]=\"user.group===group.id\" *ngFor=\"let group of groups\" (click)=\"groupSelect(group.id)\" ngDefaultControl>{{group.name}}</mat-chip>\n    </mat-chip-list>\n    <mat-form-field>\n      <input readonly matInput [(ngModel)]=\"user.publicKey\" placeholder=\"Public key\">\n    </mat-form-field>\n    <button mat-raised-button (click)=\"updateUser(user)\">Save</button>\n  </div>\n</div>\n<div *ngIf=\"user!=null\"  class=\"container\" [hidden]=\"editUser\" (click)=\"toggle()\">\n  {{user.id}} Nickname: {{user.nickName}} Group: {{groupname}}\n</div>\n<mat-divider></mat-divider>\n\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("./src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group_service__ = __webpack_require__("./src/app/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_crypto_js_sha256__ = __webpack_require__("./node_modules/crypto-js/sha256.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_crypto_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_crypto_js_sha256__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__push_service_service__ = __webpack_require__("./src/app/push-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserComponent = /** @class */ (function () {
    function UserComponent(groupService, usersService, route, router, messageService, pushService) {
        this.groupService = groupService;
        this.usersService = usersService;
        this.route = route;
        this.router = router;
        this.messageService = messageService;
        this.pushService = pushService;
        this.pageName = "User edit";
        this.groupname = "";
    }
    UserComponent.prototype.setGroupname = function () {
        var _this = this;
        var group = this.groups.filter(function (group) { return _this.user.group == group.id; });
        this.groupname = group[0].name;
        this.messageService.add('UserComponent: setGroupname: ' + this.groupname);
    };
    UserComponent.prototype.updateUser = function () {
        this.user.id = this.usersService.serviceLastUserId;
        this.user.publicKey = '' + __WEBPACK_IMPORTED_MODULE_7_crypto_js_sha256__(this.user.nickName + this.user.id + this.user.group);
        this.usersService.updateSharedItem(this.user);
        this.editUser = false;
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getGroups();
        this.usersService.getSharedItems();
        this.usersService.items$.subscribe(function (users) {
            _this.users = users;
            if (_this.user == null && _this.users != null) {
                _this.getUser();
            }
        });
    };
    UserComponent.prototype.getUser = function () {
        var userId = this.route.snapshot.paramMap.get('id');
        if (userId != null) {
            this.messageService.add('UserComponent: ngOnInit: ' + userId);
            this.user = this.users.filter(function (user) { return user.id == +userId; })[0];
            this.editUser = true;
            this.setGroupname();
        }
        else {
            userId = localStorage.getItem('userId');
            if (this.user == null) {
                if (userId) {
                    this.user = this.users.filter(function (user) { return user.id == +userId; })[0];
                    if (this.user) {
                        this.editUser = false;
                        this.setGroupname();
                    }
                    else {
                        this.createUser();
                    }
                }
                else {
                    this.createUser();
                }
            }
        }
    };
    UserComponent.prototype.createUser = function () {
        this.usersService.serviceGoal = "Wallet";
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]({ "nickName": "", "privateKey": "", "publicKey": "", "group": "", blockchain: [] });
        this.usersService.createSharedItem(this.user);
        this.editUser = true;
    };
    UserComponent.prototype.toggle = function () {
        this.editUser = !this.editUser;
    };
    UserComponent.prototype.getGroups = function () {
        var _this = this;
        this.groupService.getGroups()
            .subscribe(function (groups) {
            _this.groups = groups;
        });
    };
    UserComponent.prototype.groupSelect = function (id) {
        this.messageService.add('UserComponent: groupSelect: ' + id);
        this.user.group = id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */])
    ], UserComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], UserComponent.prototype, "groups", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UserComponent.prototype, "editUser", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_8__push_service_service__["a" /* PushService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user__ = __webpack_require__("./src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__push_service_service__ = __webpack_require__("./src/app/push-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var API_URL = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiUrl;
var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]();
headers.append('Content-type', 'application/json');
var opts = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]();
opts.headers = headers;
var UsersService = /** @class */ (function () {
    function UsersService(messageService, http, pushService) {
        this.messageService = messageService;
        this.http = http;
        this.pushService = pushService;
        this.items$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["BehaviorSubject"](null);
        this.message = {
            event: 'RefreshUsers',
            message: ''
        };
        this.serviceName = '/users/';
        this.serviceFilter = '';
        this.serviceParam = 0;
        this.serviceGoal = "normal";
        this.serviceLastUserId = 0;
        this.items = [];
    }
    UsersService.prototype.getSharedItems = function () {
        var _this = this;
        this.getAllItems().subscribe(function (items) {
            _this.messageService.add('GenericService: fetched items: ' + items.length);
            _this.items = [];
            items.forEach(function (item) {
                _this.items.push(new __WEBPACK_IMPORTED_MODULE_8__user__["a" /* User */](item));
            });
            _this.items$.next(items);
        });
    };
    UsersService.prototype.getSharedItembyid = function (itemId) {
        var _this = this;
        var item = this.items.filter(function (it) { return it.id == itemId; })[0];
        if (item != null) {
            return item;
        }
        else {
            this.getItemById(itemId).subscribe(function (item) {
                _this.messageService.add('GenericService: fetched item: ' + itemId);
                _this.items$.next(item);
            });
        }
    };
    // API: POST 
    UsersService.prototype.createSharedItem = function (item) {
        var _this = this;
        this.messageService.add('GenericService: create item');
        this.createItem(item).subscribe(function (newItem) {
            _this.items.push(newItem);
            _this.messageService.add('GenericService: created item: ' + newItem.id);
            if (_this.serviceGoal == "Wallet") {
                localStorage.setItem('userId', newItem.id);
                _this.serviceLastUserId = newItem.id;
                _this.messageService.add('GenericService: saved last item: ' + newItem.id);
            }
            _this.items$.next(_this.items);
            _this.pushService.messages.next(_this.message);
        });
    };
    // API: PUT
    UsersService.prototype.updateSharedItem = function (item) {
        var _this = this;
        this.messageService.add('GenericService: updated item: ' + item.id);
        this.updateItem(item.id, item).subscribe(function (it) {
            var myItems = _this.items;
            myItems.forEach(function (myItem) {
                if (myItem.id == it.id) {
                    _this.items[myItem.id] = it;
                }
            });
            _this.items$.next(_this.items);
            _this.pushService.messages.next(_this.message);
        });
    };
    // API: DELETE
    UsersService.prototype.deleteSharedItemById = function (itemId) {
        var _this = this;
        this.messageService.add('GenericService: delete item: ' + itemId);
        this.deleteItemById(itemId).subscribe(function (tr) {
            _this.items = _this.items.filter(function (item) { return item.id != itemId; });
            _this.messageService.add('GenericService: # of items: ' + _this.items.length);
            _this.items$.next(_this.items);
            _this.pushService.messages.next(_this.message);
        });
    };
    UsersService.prototype.deleteAllSharedItem = function () {
        var _this = this;
        this.messageService.add('GenericService: delete all items');
        if (this.items) {
            var allItems_1 = this.items;
            var noItems_1 = allItems_1.length;
            var countdown = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 300).take(noItems_1 + 1);
            countdown.subscribe(function (i) {
                if (i == noItems_1) {
                    _this.items = [];
                    _this.items$.next(_this.items);
                    _this.pushService.messages.next(_this.message);
                }
                else {
                    _this.deleteItemById(allItems_1[i].id).subscribe();
                }
            });
        }
    };
    UsersService.prototype.getAllItems = function () {
        return this.http
            .get(API_URL + this.serviceName, opts)
            .map(function (response) {
            var items = response.json();
            return items;
        })
            .catch(this.handleError);
    };
    UsersService.prototype.getItems = function (userId) {
        var _this = this;
        return this.http
            .get(API_URL + this.serviceName + this.serviceFilter + this.serviceParam, opts)
            .map(function (response) {
            var items = response.json();
            _this.messageService.add('RestService: fetched items: ' + items.length);
            return items;
        })
            .catch(this.handleError);
    };
    UsersService.prototype.handleError = function (error) {
        this.messageService.add('ApiService::handleError' + error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    // API: POST 
    UsersService.prototype.createItem = function (item) {
        this.messageService.add('ItemService: create item');
        return this.http
            .post(API_URL + this.serviceName, item, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: GET
    UsersService.prototype.getItemById = function (itemId) {
        this.messageService.add('ItemService: fetched item: ' + itemId);
        return this.http
            .get(API_URL + this.serviceName + itemId, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: PUT
    UsersService.prototype.updateItem = function (itemId, items) {
        this.messageService.add('ItemService: updated transaction: ' + itemId);
        return this.http
            .put(API_URL + this.serviceName + itemId, items, opts)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    // API: DELETE
    UsersService.prototype.deleteItemById = function (itemId) {
        this.messageService.add('ItemService: deleted itemId: ' + itemId);
        return this.http
            .delete(API_URL + this.serviceName + itemId, opts)
            .map(function (response) { return null; })
            .catch(this.handleError);
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_11__push_service_service__["a" /* PushService */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ".small {\r\n    font-size: small;\r\n}\r\n.title {\r\n    font-size: small;\r\n    background-color: cornflowerblue;\r\n    color: darkslategray;\r\n}\r\n.card {\r\n    margin: 4px;\r\n    text-align: center;\r\n}\r\n.chip {\r\n    margin: 2px;\r\n    width: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\n<button [disabled]=\"users==null\" mat-raised-button (click)=\"toggleUsers()\">Show/hide users</button>\n<button [disabled]=\"users==null\" mat-raised-button (click)=\"createModerator()\">Make</button>\n<button [disabled]=\"users==null\" mat-raised-button (click)=\"deleteAllUsers()\">Delete all</button>\n<div [hidden]=\"showUsers\">\n    <mat-grid-list cols=\"6\" rowHeight=\"300px\">\n        <mat-grid-tile *ngFor=\"let user of users\">\n            <mat-card class=\"card\">\n                <mat-card-title class=\"title\">User #{{user.id}}</mat-card-title>\n                <div class=\"small\">Nickname: {{user.nickName}}</div>\n                <mat-chip-list class=\"mat-chip-list-stacked\">\n                    <mat-chip class=\"chip\" [selected]=\"user.group===group.id\" *ngFor=\"let group of groups\" (click)=\"groupSelect(group.id)\" ngDefaultControl>{{group.name}}</mat-chip>\n                </mat-chip-list>\n                <a mat-button routerLink=\"/user/{{user.id}}\">Show</a>\n            </mat-card>\n        </mat-grid-tile>\n    </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("./src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_service__ = __webpack_require__("./src/app/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, groupService) {
        this.usersService = usersService;
        this.groupService = groupService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getGroups();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getSharedItems();
        this.usersService.items$.subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersComponent.prototype.toggleUsers = function () {
        this.showUsers = !this.showUsers;
    };
    UsersComponent.prototype.deleteAllUsers = function () {
        this.usersService.deleteAllSharedItem();
    };
    UsersComponent.prototype.createModerator = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]({ "nickName": "Moderator", "publicKey": "", "group": 0, blockchain: [] });
        this.usersService.createSharedItem(user);
    };
    UsersComponent.prototype.getGroups = function () {
        var _this = this;
        this.groupService.getGroups()
            .subscribe(function (groups) {
            _this.groups = groups;
        });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], UsersComponent.prototype, "users", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UsersComponent.prototype, "showUsers", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__group_service__["a" /* GroupService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/verify/verify.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\r\n    background-color: lightblue;\r\n}\r\n.card {\r\n    margin: 4px;\r\n}\r\n.footer {\r\n    background-color: lightblue;\r\n    font-size: smaller;\r\n}"

/***/ }),

/***/ "./src/app/verify/verify.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!showVerifyBC\">\n  <div *ngFor=\"let block of blocks\">\n    <mat-card class=\"card\">\n      <mat-card-header>\n        <mat-card-title>Block</mat-card-title>\n        <mat-card-subtitle>contents of block {{block.id}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div>\n          <mat-label>Nonce: </mat-label>{{block.nonce}}</div>\n        <div>\n          <mat-label>Hash: </mat-label>\n          <div class=\"content\">{{block.hash}}</div>\n        </div>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n      <mat-card-footer>Previous Hash: \n        <div class=\"content\">\n          {{block.previousHash}}</div>\n      </mat-card-footer>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/verify/verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(messageService) {
        this.messageService = messageService;
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], VerifyComponent.prototype, "showVerifyBC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], VerifyComponent.prototype, "blocks", void 0);
    VerifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-verify',
            template: __webpack_require__("./src/app/verify/verify.component.html"),
            styles: [__webpack_require__("./src/app/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    //apiUrl: 'http://10.15.244.38:3030',
    //chatUrl: 'ws://10.15.244.38:8080',
    //chatUrl: 'wss://demowsserver.azurewebsites.net:8080',
    //chatUrl: 'wss://demowsserver.azurewebsites.net:3000',
    apiUrl: 'http://192.168.2.12:3030',
    chatUrl: 'ws:/192.168.2.12:8080',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map