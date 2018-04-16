import { Injectable } from "@angular/core";

import { Item } from "./item";
import gql from "graphql-tag";

const taggedTemplateLiteralDoesNotWorkHere = gql`
  query GetChats($amount: Int) {
    chats {
      id
      messages(amount: $amount) {
        id
      }
    }
  }
`;

const callingItAsFunctionWorksFine = gql(`
  query GetChats($amount: Int) {
    chats {
      id
      messages(amount: $amount) {
        id
      }
    }
  }
`);

@Injectable()
export class ItemService {
    theSameTaggedTemplateLiteralWorksHere = gql`
      query GetChats($amount: Int) {
        chats {
          id
          messages(amount: $amount) {
            id
          }
        }
      }
    `;

    getItems(): Item[] {
        return;
    }

    getItem(id: number): Item {
        return;
    }
}
