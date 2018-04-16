"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var apollo_angular_1 = require("apollo-angular");
var apollo_angular_link_http_1 = require("apollo-angular-link-http");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var apollo_link_ws_1 = require("apollo-link-ws");
var SocketIO = require("nativescript-socket.io");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
var http_client_1 = require("nativescript-angular/http-client");
var AppModule = /** @class */ (function () {
    function AppModule(apollo, httpLink) {
        apollo.create({
            link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
            cache: new apollo_cache_inmemory_1.InMemoryCache(),
        });
        var subscriptionLink = new apollo_link_ws_1.WebSocketLink({
            uri: 'ws://localhost:3000/subscriptions',
            options: {
                reconnect: true,
            },
            webSocketImpl: SocketIO,
        });
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_client_1.NativeScriptHttpClientModule,
                apollo_angular_1.ApolloModule,
                apollo_angular_link_http_1.HttpLinkModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent
            ],
            providers: [
                item_service_1.ItemService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
        ,
        __metadata("design:paramtypes", [apollo_angular_1.Apollo,
            apollo_angular_link_http_1.HttpLink])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsaURBQXNEO0FBQ3RELHFFQUFvRTtBQUVwRSwrREFBc0Q7QUFDdEQsaURBQStDO0FBQy9DLGlEQUFtRDtBQUVuRCwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxnRUFBZ0Y7QUE0QmhGO0lBQ0UsbUJBQ0UsTUFBYyxFQUNkLFFBQWtCO1FBRWxCLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDWixJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBVSxFQUFDLEdBQUcsRUFBRSwrQkFBK0IsRUFBQyxDQUFDO1lBQ3RFLEtBQUssRUFBRSxJQUFJLHFDQUFhLEVBQUU7U0FDM0IsQ0FBQyxDQUFDO1FBRUgsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLDhCQUFhLENBQUM7WUFDekMsR0FBRyxFQUFFLG1DQUFtQztZQUN4QyxPQUFPLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFLElBQUk7YUFDaEI7WUFDRCxhQUFhLEVBQUUsUUFBUTtTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBakJVLFNBQVM7UUExQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiwwQ0FBNEI7Z0JBQzVCLDZCQUFZO2dCQUNaLHlDQUFjO2FBQ2pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVzthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTs7eUNBR1UsdUJBQU07WUFDSixtQ0FBUTtPQUhULFNBQVMsQ0FrQnJCO0lBQUQsZ0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBcG9sbG8sIEFwb2xsb01vZHVsZSB9IGZyb20gXCJhcG9sbG8tYW5ndWxhclwiO1xuaW1wb3J0IHsgSHR0cExpbmssIEh0dHBMaW5rTW9kdWxlIH0gZnJvbSBcImFwb2xsby1hbmd1bGFyLWxpbmstaHR0cFwiO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gXCJhcG9sbG8tYW5ndWxhci1saW5rLWh0dHAtY29tbW9uXCI7XG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiO1xuaW1wb3J0IHsgV2ViU29ja2V0TGluayB9IGZyb20gXCJhcG9sbG8tbGluay13c1wiO1xuaW1wb3J0ICogYXMgU29ja2V0SU8gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NrZXQuaW9cIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBBcG9sbG9Nb2R1bGUsXG4gICAgICAgIEh0dHBMaW5rTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJdGVtU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwb2xsbzogQXBvbGxvLFxuICAgIGh0dHBMaW5rOiBIdHRwTGluayxcbiAgKSB7XG4gICAgYXBvbGxvLmNyZWF0ZSh7XG4gICAgICBsaW5rOiBodHRwTGluay5jcmVhdGUoPE9wdGlvbnM+e3VyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsJ30pLFxuICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdWJzY3JpcHRpb25MaW5rID0gbmV3IFdlYlNvY2tldExpbmsoe1xuICAgICAgdXJpOiAnd3M6Ly9sb2NhbGhvc3Q6MzAwMC9zdWJzY3JpcHRpb25zJyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHdlYlNvY2tldEltcGw6IFNvY2tldElPLFxuICAgIH0pO1xuICB9XG59XG4iXX0=