"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var login_1 = require('./modules/authentication/login');
var register_1 = require('./modules/authentication/register');
var notfound_1 = require('./modules/notfound/notfound');
var forms_1 = require('@angular/forms');
var news_1 = require('./modules/news/news');
var newsDetail_1 = require('./modules/news/newsDetail');
var addNews_1 = require('./modules/news/addNews');
var info_1 = require('./modules/info/info');
var events_1 = require('./modules/events/events');
var home_1 = require('./modules/home/home');
var data_service_1 = require('./modules/reusables/data.service');
var routers = [
    { path: 'login', component: login_1.Login },
    { path: 'register', component: register_1.Register },
    { path: 'news', component: news_1.News,
        children: [
            { path: "addNews", component: addNews_1.AddNews },
            { path: ":id", component: newsDetail_1.NewsDetail },
        ]
    },
    { path: 'info', component: info_1.Info },
    { path: 'events', component: events_1.Events },
    { path: 'home', component: home_1.Home },
    { path: '**', component: notfound_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(routers)],
            declarations: [app_component_1.AppComponent, login_1.Login, register_1.Register, notfound_1.PageNotFoundComponent, events_1.Events, news_1.News, info_1.Info, home_1.Home, addNews_1.AddNews, newsDetail_1.NewsDetail],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map