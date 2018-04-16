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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsaURBQXNEO0FBQ3RELHFFQUFvRTtBQUVwRSwrREFBc0Q7QUFFdEQsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0UsZ0VBQWdGO0FBNEJoRjtJQUNFLG1CQUNFLE1BQWMsRUFDZCxRQUFrQjtRQUVsQixNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ1osSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQVUsRUFBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUMsQ0FBQztZQUN0RSxLQUFLLEVBQUUsSUFBSSxxQ0FBYSxFQUFFO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFUVSxTQUFTO1FBMUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsMENBQTRCO2dCQUM1Qiw2QkFBWTtnQkFDWix5Q0FBYzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCwyQ0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7O3lDQUdVLHVCQUFNO1lBQ0osbUNBQVE7T0FIVCxTQUFTLENBVXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBcG9sbG8sIEFwb2xsb01vZHVsZSB9IGZyb20gXCJhcG9sbG8tYW5ndWxhclwiO1xuaW1wb3J0IHsgSHR0cExpbmssIEh0dHBMaW5rTW9kdWxlIH0gZnJvbSBcImFwb2xsby1hbmd1bGFyLWxpbmstaHR0cFwiO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gXCJhcG9sbG8tYW5ndWxhci1saW5rLWh0dHAtY29tbW9uXCI7XG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEFwb2xsb01vZHVsZSxcbiAgICAgICAgSHR0cExpbmtNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEl0ZW1TZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgYXBvbGxvOiBBcG9sbG8sXG4gICAgaHR0cExpbms6IEh0dHBMaW5rLFxuICApIHtcbiAgICBhcG9sbG8uY3JlYXRlKHtcbiAgICAgIGxpbms6IGh0dHBMaW5rLmNyZWF0ZSg8T3B0aW9ucz57dXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyYXBocWwnfSksXG4gICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgICB9KTtcbiAgfVxufVxuIl19