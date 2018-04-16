import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { Apollo, ApolloModule } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { Options } from "apollo-angular-link-http-common";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import * as SocketIO from "nativescript-socket.io";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        ApolloModule,
        HttpLinkModule,
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
  ) {
    apollo.create({
      link: httpLink.create(<Options>{uri: 'http://localhost:3000/graphql'}),
      cache: new InMemoryCache(),
    });

    const subscriptionLink = new WebSocketLink({
      uri: 'ws://localhost:3000/subscriptions',
      options: {
        reconnect: true,
      },
      webSocketImpl: SocketIO,
    });
  }
}
