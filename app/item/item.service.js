"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var graphql_tag_1 = require("graphql-tag");
var taggedTemplateLiteralDoesNotWorkHere = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetChats($amount: Int) {\n    chats {\n      id\n      messages(amount: $amount) {\n        id\n      }\n    }\n  }\n"], ["\n  query GetChats($amount: Int) {\n    chats {\n      id\n      messages(amount: $amount) {\n        id\n      }\n    }\n  }\n"])));
var callingItAsFunctionWorksFine = graphql_tag_1.default("\n  query GetChats($amount: Int) {\n    chats {\n      id\n      messages(amount: $amount) {\n        id\n      }\n    }\n  }\n");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.theSameTaggedTemplateLiteralWorksHere = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      query GetChats($amount: Int) {\n        chats {\n          id\n          messages(amount: $amount) {\n            id\n          }\n        }\n      }\n    "], ["\n      query GetChats($amount: Int) {\n        chats {\n          id\n          messages(amount: $amount) {\n            id\n          }\n        }\n      }\n    "])));
    }
    ItemService.prototype.getItems = function () {
        return;
    };
    ItemService.prototype.getItem = function (id) {
        return;
    };
    ItemService = __decorate([
        core_1.Injectable()
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDJDQUE4QjtBQUU5QixJQUFNLG9DQUFvQyxHQUFHLHFCQUFHLG9NQUFBLGlJQVMvQyxJQUFBLENBQUM7QUFFRixJQUFNLDRCQUE0QixHQUFHLHFCQUFHLENBQUMsaUlBU3hDLENBQUMsQ0FBQztBQUdIO0lBREE7UUFFSSwwQ0FBcUMsR0FBRyxxQkFBRyx3T0FBQSxxS0FTMUMsS0FBQztJQVNOLENBQUM7SUFQRyw4QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2QsTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQWxCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBbUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5cbmNvbnN0IHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbERvZXNOb3RXb3JrSGVyZSA9IGdxbGBcbiAgcXVlcnkgR2V0Q2hhdHMoJGFtb3VudDogSW50KSB7XG4gICAgY2hhdHMge1xuICAgICAgaWRcbiAgICAgIG1lc3NhZ2VzKGFtb3VudDogJGFtb3VudCkge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgY2FsbGluZ0l0QXNGdW5jdGlvbldvcmtzRmluZSA9IGdxbChgXG4gIHF1ZXJ5IEdldENoYXRzKCRhbW91bnQ6IEludCkge1xuICAgIGNoYXRzIHtcbiAgICAgIGlkXG4gICAgICBtZXNzYWdlcyhhbW91bnQ6ICRhbW91bnQpIHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmApO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIHRoZVNhbWVUYWdnZWRUZW1wbGF0ZUxpdGVyYWxXb3Jrc0hlcmUgPSBncWxgXG4gICAgICBxdWVyeSBHZXRDaGF0cygkYW1vdW50OiBJbnQpIHtcbiAgICAgICAgY2hhdHMge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbWVzc2FnZXMoYW1vdW50OiAkYW1vdW50KSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG5cbiAgICBnZXRJdGVtcygpOiBJdGVtW10ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2V0SXRlbShpZDogbnVtYmVyKTogSXRlbSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG4iXX0=