function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n  <router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div  class=\"container-fluid\">\n  <!-- loading spinner -->\n  <div id=\"spin\" class=\"mx-auto text-center\">\n    <app-spinner *ngIf=\"isLoading\"></app-spinner>\n  </div>\n\n  <div id=\"mainLogin\"  class=\"row\">\n\n    <div *ngIf=\"!isLoading\" id=\"formDiv\" class=\"col-lg-5 col-xs-12 \">\n      <form #formData=\"ngForm\" (ngSubmit)=\"onSubmit(formData)\" class=\"text-white\" *ngIf=\"!isLoading\">\n        <!-- text -->\n        <div class=\"form-container \">\n\n          <div class=\"\" *ngIf=\"isLogin\">\n            <h1 class=\"\">Hello Welcome! </h1>\n            <h4>Please login to see the recipes </h4>\n            <h3 class=\"lead signup-text\">Don't have a account? hit signup ! </h3>\n            <!-- text -->\n          </div>\n\n          <div *ngIf=\"!isLogin\">\n            <h1 class=\"\">Welcome </h1>\n            <h4 class=\"mt-1\">Please enter email and password to sign up </h4>\n            <h3 class=\"lead\">We keep your details safe ! </h3>\n          </div>\n\n        \n            <div class=\"form-group\">\n              <label class=\"lead\" for=\"email\">\n                <fa-icon [icon]=\"userIcon\"></fa-icon> Email:\n              </label>\n              <input #name=\"ngModel\" name=\"email\" ngModel type=\"email\" class=\"form-control\" required email>\n              <div *ngIf=\"!name.valid && name.touched\" class=\"row mx-auto\">\n                <div class=\"alert alert-danger\" role=\"alert\">\n                  Please enter valid Email\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"lead\" for=\"password\">\n                <fa-icon [icon]=\"lock\"></fa-icon> Password:\n              </label>\n              <input #password=\"ngModel\" name=\"password\" ngModel type=\"password\" class=\"form-control\" required>\n              <div *ngIf=\"!password.valid && password.touched\" class=\"row mx-auto\">\n                <div class=\"alert alert-danger\" role=\"alert\">\n                  Please enter password\n                </div>\n              </div>\n            </div>\n\n      \n\n            <div class=\"row mx-auto\">\n              <div class=\"col-12 text-center\">\n                <span *ngIf=\"error\" class=\"alert alert-danger text-center\">\n                  {{ error }}\n                </span>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n                <button class=\"lead\" [disabled]=\"!formData.valid\" type=\"submit\"\n                  class=\"btn btn-success mr-2\">{{ isLogin ? 'Login': 'Signup' }}</button>\n                <button type=\"button\" (click)=\" switchMode()\" class=\"btn btn-primary\">\n                  {{ isLogin ? 'Signup': 'Login' }} Mode</button>\n              </div>\n            </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav *ngIf=\"isAuth \" class=\"navbar navbar-expand-lg navbar-dark text-white \">\n  <a class=\"navbar-brand\" href=\"#\">Recip 4 You</a>\n  <!-- btn for drop down -->\n  <button appDropdown #drop=\"appDropDown\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- dropw down tabs -->\n  <div class=\"collapse navbar-collapse text-white  \" [ngClass]=\"{'show':drop.isOpen}\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto text-white \">\n      <li *ngIf=\"isAuth\" class=\"nav-item \" routerLinkActive=\"active\">\n        <a routerLink=\"/recipes\" class=\"nav-link\">Recipe <fa-icon [icon]=\"faList\"></fa-icon> <span\n            class=\"sr-only\">(current)</span></a>\n      </li>\n    \n      <li class=\"nav-item\">\n        <a routerLink=\"/shopping-list\" routerLinkActive=\"active\" class=\"nav-link\">Shopping-list <fa-icon\n            [icon]=\"faShoppingCart\"></fa-icon></a>\n      </li>\n      <li *ngIf=\"!isAuth\" class=\"nav-item\">\n        <a routerLink=\"/signin\" routerLinkActive=\"active\" class=\"nav-link\">Login <fa-icon [icon]=\"faSignInAlt\">\n          </fa-icon></a>\n      </li>\n\n      <li *ngIf=\"isAuth\" class=\"nav-item\">\n        <a class=\"btn\" style=\"cursor: pointer;\" (click)=\"logOut()\" routerLinkActive=\"active\" class=\"nav-link \">Log out\n          <fa-icon [icon]=\" faSignOutAlt\">\n          </fa-icon></a>\n      </li>\n      <li appDropdown #dropp=\"appDropDown\" class=\"nav-item dropdown \" [ngClass]=\"{'show':dropp.isOpen}\">\n        <a style=\"cursor: pointer;\" class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Manege Recipes\n        </a>\n        <div class=\"dropdown-menu\" [ngClass]=\"{'show':dropp.isOpen}\" aria-labelledby=\"navbarDropdown\">\n          <a (click)=newRecipe() class=\"dropdown-item\">Add Recipe <fa-icon [icon]=\"plus\">\n            </fa-icon></a>\n          <a style=\"cursor: pointer;\" (click)=\"onSaveChanges()\" class=\"dropdown-item\" >Save Changes</a>\n   \n        \n        </div>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/edit-recipe/edit-recipe.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/edit-recipe/edit-recipe.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipeEditRecipeEditRecipeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-12\">\n<!-- form -->\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n<!-- img -->\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <img [src]=\"imgUrl.value\" alt=\"...\" class=\"img-thumbnail ml-3\">\n          <div class=\"col-12\">\n            <label for=\"url\">Image URL:</label>\n            <input #imgUrl formControlName=\"imgUrl\" type=\"text\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n<!-- img end -->\n\n      <div class=\"form-group\">\n        <label for=\"name\">Recipe Name:</label>\n        <input formControlName=\"recipeName\" type=\"text\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"description\">Description:</label>\n        <textarea formControlName=\"desc\" rows=\"6\" class=\"form-control\"></textarea>\n      </div>\n\n      <div class=\"form-group\">\n        <div formArrayName=\"ingredients\" class=\"row ml-1\">\n          <div class=\"row mb-2\" *ngFor=\"let ingredientsCtrl of getControls() let i=index\"\n            [formGroupName]=\"i\">\n\n            <div class=\"col-7\">\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n            </div>\n\n            <div class=\"col-3\">\n              <input formControlName=\"amount\" type=\"number\" class=\"form-control\">\n            </div>\n\n            <div class=\"col-2\">\n              <button (click)=\"onDeleteIngredient(i)\" type=\"button\" class=\"btn btn-danger \">X</button>\n            </div>\n\n          </div>\n\n          <button type=\"submit\" [disabled]=\"!recipeForm.valid\" class=\"btn btn-success\">Save</button>\n          <button (click)=\"onCancel()\" type=\"button\" class=\"btn btn-danger ml-1\">Cancel</button>\n          <button type=\"button\" (click)=\"addIng()\" class=\"btn btn-primary ml-1\">New Ingredient</button>\n        </div>\n      </div>\n\n    </form>\n<!-- form end -->\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/empty-recipe/empty-recipe.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/empty-recipe/empty-recipe.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipeEmptyRecipeEmptyRecipeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"mt-5\">Please select a recipe</h3>\n<p class=\"lead\">Choose a recipe to see how it is made and the ingredients needed <fa-icon [icon]=\"arrow\"></fa-icon><p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe-details/recipe-details.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe-details/recipe-details.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipeRecipeDetailsRecipeDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <div  class=\"card\" style=\"width: 100%;\">\n    <img src=\"{{ recipe.imgURL }}\" class=\"card-img-top\" alt=\"{{ recipe.name }}\">\n \n    <div class=\"card-body\">\n      <h5  class=\"card-title\">{{ recipe.name }}:</h5>\n     \n      <div class=\"dropdown \" appDropdown #drop=\"appDropDown\">\n        <button  class=\"btn btn-secondary dropdown-toggle mb-1\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Manage\n        </button>\n        <div style=\"cursor: pointer;\" class=\"dropdown-menu \" [ngClass]=\"{'show':drop.isOpen}\"  aria-labelledby=\"dropdownMenuButton\" >\n          <a style=\"cursor: pointer;\" (click)=\"addToList()\" class=\"dropdown-item\" >Add to Shopping list <fa-icon [icon]=\"faPlus\"></fa-icon> </a>\n          <a style=\"cursor: pointer;\" (click)=\"editRecipe()\" class=\"dropdown-item\" >Edit  <fa-icon [icon]=\"faPen\"></fa-icon></a>\n          <a style=\"cursor: pointer;\" (click)=\"deleteRecipe()\" class=\"dropdown-item\" >Delete <fa-icon [icon]=\"faTrash\"></fa-icon></a>\n        </div>\n      </div>\n      <ul   class=\"list-group\">\n        <li *ngFor=\"let ingredient of recipe.ingredients\"  class=\"list-group-item\">{{ ingredient.name }} <span class=\"float-right\">x{{ ingredient.amount}}</span></li>\n      </ul>\n      \n\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe-list/recipe-item/recipe-item.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe-list/recipe-item/recipe-item.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipeRecipeListRecipeItemRecipeItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <div   class=\"card mb-3 active\" style=\"max-width: 500px;\">\n    <a list class=\"active\" style=\"cursor: pointer; color: black; text-decoration: none;\"  [routerLink]=\"[index]\"   >\n    <div routerLinkActive=activated class=\"row no-gutters\">\n      <div class=\"col-lg-7 col-sm-4\">\n        <img src=\"{{ recipe.imgURL }}\" class=\"card-img\" alt=\"{{ recipe.name }}\">\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-4\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ recipe.name }}</h5>\n          <p class=\"card-text\">{{ recipe.desc }}</p>\n          <p class=\"card-text\"></p>\n        </div>\n      </div>\n    </div>\n  </a>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe-list/recipe-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe-list/recipe-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipeRecipeListRecipeListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n<!-- iterrate with the recipe  -->\n\n        <app-recipe-item   *ngFor=\"let recipeEl of recipes; let i= index \" [index]=\"i\" [recipe]=\"recipeEl\"  ></app-recipe-item>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipeRecipeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row mt-5\">\n    <div style=\"margin-top: 50px;\"  class=\"col-lg-7 col-md-6 col-sm-12 \">\n      <app-recipe-list></app-recipe-list>\n    </div>\n    <div style=\"margin-top: 50px;\" class=\"col-lg-5 col-md-6 col-sm-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSpinnerSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    \n        <div  class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/edit-list/edit-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/edit-list/edit-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShoppingListEditListEditListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #listForm =\"ngForm\" (ngSubmit)=\"addIngredient(formData)\" #formData=\"ngForm\">\n<!-- ingredient info -->\n  <div class=\"row mt-2\">\n    <div class=\"col-6\">\n      <div class=\"form-group\">\n          <label class=\"\" for=\"ingredient\">Ingredient Name:</label>\n        <input ngModel name=\"name\" class=\"form-control\" type=\"text\" placeholder=\"Apples\" required>\n      \n      </div>\n  \n    </div>  \n    <div class=\"col-5 \">\n      <div class=\"form-group\">\n          <label for=\"amount\">Amount:</label>\n        <input ngModel name=\"amount\" class=\"form-control\" type=\"number\" placeholder=\"Enter Amount\" required pattern=\"^[1-9]+[0-9]*$\">\n      </div>\n    </div>\n  </div>\n<!-- BTN -->\n<div class=\"row\">\n  <div class=\"col-12\">\n    <button [disabled]=\"!formData.valid\"  type=\"submit\"  class=\"btn btn-success mr-2\">{{ editMode? 'Update' : 'Add' }} </button>\n    <button type=\"button\" (click)=\"clearForm()\" class=\"btn btn-secondary mr-2\">Cancel </button>\n    <button *ngIf=\"editMode\" (click)=\"deleteIngredient()\" class=\"btn btn-danger mr-2 \">Delete </button>\n    <span  *ngIf=\"!formData.control.valid && formData.control.touched\" class=\"\" class=\" mt-4 alert alert-danger\">Please Enter ingredient and amount first</span>\n  </div>\n \n</div>\n\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShoppingListShoppingListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    \n  \n<div class=\"row\">\n<div>\n\n    <img  src=\"../../assets/images/cart2.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n\n</div>\n    \n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            <app-edit-list  ></app-edit-list>\n    </div>\n</div>\n\n<div class=\"row\">\n\n    <div class=\"col-lg-12 w-100 mt-3\">\n        <ul *ngFor=\"let ingredient of ingredients let i =index\" class=\"list-group\">\n           <a (click)=\"editItem(i)\" style=\"cursor: pointer;\" > <li class=\"list-group-item\">{{ ingredient.name }} <span class=\"float-right\">x {{ ingredient.amount }}</span></li></a>\n          </ul>\n    </div>\n   \n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRouteModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRouteModule", function () {
      return AppRouteModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var appRoutes = [{
      path: '',
      redirectTo: 'recipes',
      pathMatch: 'full'
    }, {
      path: 'signin',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"]
    }];

    var AppRouteModule = function AppRouteModule() {
      _classCallCheck(this, AppRouteModule);
    };

    AppRouteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AppRouteModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html{\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1se1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'Recipe';
        this.page = 'recipe';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.autoLogin();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shopping-list/shopping-list.module */
    "./src/app/shopping-list/shopping-list.module.ts");
    /* harmony import */


    var _recipe_recipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./recipe/recipe.module */
    "./src/app/recipe/recipe.module.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _recipe_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./recipe/recipes-resolver.service */
    "./src/app/recipe/recipes-resolver.service.ts");
    /* harmony import */


    var _recipe_recipe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recipe/recipe.service */
    "./src/app/recipe/recipe.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shopping_list_shopping_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shopping-list/shopping.service */
    "./src/app/shopping-list/shopping.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _recipe_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./recipe/recipe-details/recipe-details.component */
    "./src/app/recipe/recipe-details/recipe-details.component.ts");
    /* harmony import */


    var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/dropdown.directive */
    "./src/app/shared/dropdown.directive.ts");
    /* harmony import */


    var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/spinner/spinner.component */
    "./src/app/shared/spinner/spinner.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _recipe_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_15__["RecipeDetailsComponent"], _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__["DropdownDirective"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_17__["SpinnerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRouteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _recipe_recipe_module__WEBPACK_IMPORTED_MODULE_2__["RecipeModule"], _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_1__["ShoppingModule"]],
      providers: [_shopping_list_shopping_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"], _recipe_recipe_service__WEBPACK_IMPORTED_MODULE_5__["RecipeService"], _recipe_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_4__["RecipeResolverService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.css":
  /*!*****************************************!*\
    !*** ./src/app/auth/auth.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#mainLogin {\n  background-image: url('loginBG.jpg');\n  background-size: cover;\n  height: 110vh;\n}\n\n\n\n#formDiv {\n\n  background: rgba(0, 0, 0, 0.5);\n}\n\n\n\n.form-container {\n\n  margin-top: 50%;\n  margin-right: 20%;\n  margin-left: 20%;\n}\n\n\n\n@media only screen and (max-width: 425px){\n   .signup-text{\n      display: none;\n   }\n\n   #mainLogin {\n      background-image: url('loginBG.jpg');\n      background-size: cover;\n      height: 80vh;\n      background-repeat: no-repeat;\n    }\n\n    .form-container {\n\n      margin-top: 60%;\n      margin-right: 0%;\n      margin-left: 0%;\n    }\n}\n\n\n\n@media only screen and (max-width: 768px) and (min-width:426px){\n\n   #mainLogin {\n      height: 100vh;\n    }\n\n    .form-container {\n\n      margin-top: 40%;\n   \n    }\n}\n\n\n\n@media only screen and (max-width: 992px){\n   .form-container {\n\n      margin-top: 60%;\n   \n    }\n    #mainLogin {\n      height: 100vh;\n    }\n}\n\n\n\n@media only screen and (width:1024px){\n\n   .form-container {\n\n      margin-top: 10%;\n   \n    }\n\n    #mainLogin {\n      height: 100vh;\n    }\n\n}\n\n\n\n@media only screen and (max-width: 1200px)  and (min-width:993px){\n   .form-container {\n\n      margin-top: 50%;\n   \n    }\n    #mainLogin {\n      height: 100vh;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7OztBQUlBOztFQUVFLDhCQUE4QjtBQUNoQzs7OztBQUVBOztFQUVFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOzs7O0FBR0E7R0FDRztNQUNHLGFBQWE7R0FDaEI7O0dBRUE7TUFDRyxvQ0FBNkM7TUFDN0Msc0JBQXNCO01BQ3RCLFlBQVk7TUFDWiw0QkFBNEI7SUFDOUI7O0lBRUE7O01BRUUsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixlQUFlO0lBQ2pCO0FBQ0o7Ozs7QUFFQTs7R0FFRztNQUNHLGFBQWE7SUFDZjs7SUFFQTs7TUFFRSxlQUFlOztJQUVqQjtBQUNKOzs7O0FBRUE7R0FDRzs7TUFFRyxlQUFlOztJQUVqQjtJQUNBO01BQ0UsYUFBYTtJQUNmO0FBQ0o7Ozs7QUFFQTs7R0FFRzs7TUFFRyxlQUFlOztJQUVqQjs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7QUFFSjs7OztBQUVBO0dBQ0c7O01BRUcsZUFBZTs7SUFFakI7SUFDQTtNQUNFLGFBQWE7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbkxvZ2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWFnZXMvbG9naW5CRy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTEwdmg7XG59XG5cblxuXG4jZm9ybURpdiB7XG5cbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuXG4gIG1hcmdpbi10b3A6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCl7XG4gICAuc2lnbnVwLXRleHR7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgfVxuXG4gICAjbWFpbkxvZ2luIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vaW1hZ2VzL2xvZ2luQkcuanBnXCIpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGhlaWdodDogODB2aDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udGFpbmVyIHtcblxuICAgICAgbWFyZ2luLXRvcDogNjAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIGFuZCAobWluLXdpZHRoOjQyNnB4KXtcblxuICAgI21haW5Mb2dpbiB7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRhaW5lciB7XG5cbiAgICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgIFxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XG4gICAuZm9ybS1jb250YWluZXIge1xuXG4gICAgICBtYXJnaW4tdG9wOiA2MCU7XG4gICBcbiAgICB9XG4gICAgI21haW5Mb2dpbiB7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAod2lkdGg6MTAyNHB4KXtcblxuICAgLmZvcm0tY29udGFpbmVyIHtcblxuICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgXG4gICAgfVxuXG4gICAgI21haW5Mb2dpbiB7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkgIGFuZCAobWluLXdpZHRoOjk5M3B4KXtcbiAgIC5mb3JtLWNvbnRhaW5lciB7XG5cbiAgICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgIFxuICAgIH1cbiAgICAjbWFpbkxvZ2luIHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthComponent =
    /*#__PURE__*/
    function () {
      function AuthComponent(authService, router) {
        _classCallCheck(this, AuthComponent);

        this.authService = authService;
        this.router = router;
        this.userIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"];
        this.lock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLock"];
        this.isLogin = true;
        this.isLoading = false;
        this.error = null;
      }

      _createClass(AuthComponent, [{
        key: "switchMode",
        value: function switchMode() {
          this.isLogin = !this.isLogin;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(formData) {
          var _this = this;

          var email = formData.value.email;
          var password = formData.value.password;

          if (this.isLogin) {
            this.isLoading = true;
            this.authService.login(email, password).subscribe(function (res) {
              _this.isLoading = false;

              _this.router.navigate(['/recipes']);

              _this.url = '/recipes';
            }, function (errMsg) {
              _this.error = errMsg;
              _this.isLoading = false;
              _this.error = errMsg;
            });
          } else {
            this.isLoading = true;
            this.authService.signUp(email, password).subscribe(function (res) {
              _this.isLoading = false;

              _this.router.navigate(['/recipes']);
            }, function (errMsg) {
              _this.isLoading = false;
              _this.error = errMsg;
            });
          }

          ;
          formData.reset();
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.css */
      "./src/app/auth/auth.component.css")).default]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, router) {
          var _this2 = this;

          return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            var isAuth = !!user;

            if (isAuth) {
              return true;
            }

            return _this2.router.createUrlTree(['/signin']);
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.model */
    "./src/app/auth/user.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(Http, router) {
        _classCallCheck(this, AuthService);

        this.Http = Http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
      }

      _createClass(AuthService, [{
        key: "signUp",
        value: function signUp(email, password) {
          var _this3 = this;

          return this.Http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].fireBaseAPIKey, {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (resData) {
            _this3.authHandler(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          }));
        }
      }, {
        key: "autoLogin",
        value: function autoLogin() {
          var userData = JSON.parse(localStorage.getItem('userInfo'));
          if (!userData) return;
          var loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExp));
          if (loadedUser.token) this.user.next(loadedUser);
          var expireTime = new Date(userData._tokenExp).getTime() - new Date().getTime();
          this.autoLogOut(expireTime);
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this4 = this;

          return this.Http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].fireBaseAPIKey, {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (resData) {
            _this4.authHandler(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.user.next(null);
          localStorage.clear();
          this.router.navigate(['/signin']);
          if (this.tokenTime) clearTimeout(this.tokenTime);
          this.tokenTime = null;
        }
      }, {
        key: "autoLogOut",
        value: function autoLogOut(expDur) {
          var _this5 = this;

          this.tokenTime = setTimeout(function () {
            _this5.logOut();
          }, expDur);
        }
      }, {
        key: "authHandler",
        value: function authHandler(email, userId, token, expiresIn) {
          var expDate = new Date(new Date().getTime() + expiresIn * 1000);
          var user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"](email, userId, token, expDate);
          this.user.next(user);
          this.autoLogOut(expiresIn * 1000);
          localStorage.setItem('userInfo', JSON.stringify(user));
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(errorResponse) {
          var errMsg = 'Some error occurred';

          if (!errorResponse.error || !errorResponse.error.error.message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(errMsg);
          }

          switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              errMsg = 'Email Already Exsits';
              break;

            case 'INVALID_PASSWORD':
              errMsg = 'Wrong password';
              break;

            case 'EMAIL_NOT_FOUND':
              errMsg = 'Email was not found';
              break;
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(errMsg);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/user.model.ts":
  /*!************************************!*\
    !*** ./src/app/auth/user.model.ts ***!
    \************************************/

  /*! exports provided: User */

  /***/
  function srcAppAuthUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User =
    /*#__PURE__*/
    function () {
      function User(email, id, _token, _tokenExp) {
        _classCallCheck(this, User);

        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExp = _tokenExp;
      }

      _createClass(User, [{
        key: "token",
        get: function get() {
          if (!this._tokenExp || new Date() > this._tokenExp) {
            return null;
          }

          return this._token;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar{\n    background-color:rgb(27, 27, 25);\n    color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI3LCAyNywgMjUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _recipe_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../recipe/recipe.service */
    "./src/app/recipe/recipe.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(userService, router, route, Rservice, location) {
        _classCallCheck(this, HeaderComponent);

        this.userService = userService;
        this.router = router;
        this.route = route;
        this.Rservice = Rservice;
        this.location = location;
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignInAlt"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSignOutAlt"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faShoppingCart"];
        this.faList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faList"];
        this.plus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"];
        this.isAuth = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.sub = this.userService.user.subscribe(function (user) {
            _this6.isAuth = !!user;
            _this6.url = _this6.location.path();
            console.log(_this6.url);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.userService.logOut();
          console.log('works');
        }
      }, {
        key: "onSaveChanges",
        value: function onSaveChanges() {
          this.Rservice.onSaveChanges();
        }
      }, {
        key: "newRecipe",
        value: function newRecipe() {
          var leet = this.router.navigate(['recipes/new'], {
            relativeTo: this.route
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _recipe_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/recipe/edit-recipe/edit-recipe.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/recipe/edit-recipe/edit-recipe.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipeEditRecipeEditRecipeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input.ng-invalid.ng-touched,textarea.ng-invalid.ng-touched{\n    border: red 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlL2VkaXQtcmVjaXBlL2VkaXQtcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGUvZWRpdC1yZWNpcGUvZWRpdC1yZWNpcGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCx0ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyOiByZWQgMnB4IHNvbGlkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/recipe/edit-recipe/edit-recipe.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/recipe/edit-recipe/edit-recipe.component.ts ***!
    \*************************************************************/

  /*! exports provided: EditRecipeComponent */

  /***/
  function srcAppRecipeEditRecipeEditRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditRecipeComponent", function () {
      return EditRecipeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _recipe_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../recipe.model */
    "./src/app/recipe/recipe.model.ts");
    /* harmony import */


    var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../recipe.service */
    "./src/app/recipe/recipe.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var EditRecipeComponent =
    /*#__PURE__*/
    function () {
      function EditRecipeComponent(route, Rservice, router) {
        _classCallCheck(this, EditRecipeComponent);

        this.route = route;
        this.Rservice = Rservice;
        this.router = router;
        this.editMode = false;
      }

      _createClass(EditRecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.params.subscribe(function (param) {
            _this7.recipeId = +param['id'];
            _this7.editMode = param['id'] != null;

            _this7.initForm();
          });
        }
      }, {
        key: "getControls",
        value: function getControls() {
          this.recipeForm.get('ingredients').controls;
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var recipeName = '';
          var imgUrl = '';
          var desc = '';
          var recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([]);

          if (this.editMode) {
            var originalRecipe = this.Rservice.getById(this.recipeId);
            recipeName = originalRecipe.name;
            imgUrl = originalRecipe.imgURL;
            desc = originalRecipe.desc;

            if (originalRecipe['ingredients']) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = originalRecipe.ingredients[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var ingredient = _step.value;
                  recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                    'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                    'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](ingredient.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
                  }));
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              ;
            }

            ;
          }

          ;
          this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'recipeName': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'imgUrl': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](imgUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'desc': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](desc, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'ingredients': recipeIngredients
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.recipeForm);
          var newRecipe = new _recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"](this.recipeForm.value['recipeName'], this.recipeForm.value['desc'], this.recipeForm.value['imgUrl'], this.recipeForm.value['ingredients']);

          if (this.editMode) {
            this.Rservice.updateRecipe(this.recipeId, newRecipe);
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
          } else {
            this.Rservice.addNewRecipe(newRecipe);
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
          }

          ;
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.recipeForm.reset();
          this.router.navigate(['../'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "onDeleteIngredient",
        value: function onDeleteIngredient(id) {
          this.recipeForm.get('ingredients').removeAt(id);
        }
      }, {
        key: "addIng",
        value: function addIng() {
          this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }]);

      return EditRecipeComponent;
    }();

    EditRecipeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    EditRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-edit-recipe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-recipe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/edit-recipe/edit-recipe.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-recipe.component.css */
      "./src/app/recipe/edit-recipe/edit-recipe.component.css")).default]
    })], EditRecipeComponent);
    /***/
  },

  /***/
  "./src/app/recipe/empty-recipe/empty-recipe.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/recipe/empty-recipe/empty-recipe.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipeEmptyRecipeEmptyRecipeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9lbXB0eS1yZWNpcGUvZW1wdHktcmVjaXBlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/recipe/empty-recipe/empty-recipe.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/recipe/empty-recipe/empty-recipe.component.ts ***!
    \***************************************************************/

  /*! exports provided: EmptyRecipeComponent */

  /***/
  function srcAppRecipeEmptyRecipeEmptyRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyRecipeComponent", function () {
      return EmptyRecipeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var EmptyRecipeComponent =
    /*#__PURE__*/
    function () {
      function EmptyRecipeComponent() {
        _classCallCheck(this, EmptyRecipeComponent);

        this.arrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowDown"];
      }

      _createClass(EmptyRecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyRecipeComponent;
    }();

    EmptyRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empty-recipe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./empty-recipe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/empty-recipe/empty-recipe.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./empty-recipe.component.css */
      "./src/app/recipe/empty-recipe/empty-recipe.component.css")).default]
    })], EmptyRecipeComponent);
    /***/
  },

  /***/
  "./src/app/recipe/recipe-details/recipe-details.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/recipe/recipe-details/recipe-details.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipeRecipeDetailsRecipeDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#details{\n    background-color: rgb(182, 201, 134);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlL3JlY2lwZS1kZXRhaWxzL3JlY2lwZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGUvcmVjaXBlLWRldGFpbHMvcmVjaXBlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZXRhaWxze1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDIwMSwgMTM0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/recipe/recipe-details/recipe-details.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/recipe/recipe-details/recipe-details.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RecipeDetailsComponent */

  /***/
  function srcAppRecipeRecipeDetailsRecipeDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeDetailsComponent", function () {
      return RecipeDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../recipe.service */
    "./src/app/recipe/recipe.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var RecipeDetailsComponent =
    /*#__PURE__*/
    function () {
      function RecipeDetailsComponent(Rservice, route, router) {
        _classCallCheck(this, RecipeDetailsComponent);

        this.Rservice = Rservice;
        this.route = route;
        this.router = router;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faPen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPen"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
      }

      _createClass(RecipeDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.route.params.subscribe(function (param) {
            _this8.recipeId = +param['id'];
            _this8.recipe = _this8.Rservice.getById(_this8.recipeId);
          });
        }
      }, {
        key: "addToList",
        value: function addToList() {
          this.Rservice.addToList(this.recipe.ingredients);
        }
      }, {
        key: "editRecipe",
        value: function editRecipe() {
          this.router.navigate(['edit'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "deleteRecipe",
        value: function deleteRecipe() {
          this.Rservice.deleteRecipe(this.recipeId);
          this.router.navigate(['/']);
        }
      }]);

      return RecipeDetailsComponent;
    }();

    RecipeDetailsComponent.ctorParameters = function () {
      return [{
        type: _recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RecipeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-recipe-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe-details/recipe-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe-details.component.css */
      "./src/app/recipe/recipe-details/recipe-details.component.css")).default]
    })], RecipeDetailsComponent);
    /***/
  },

  /***/
  "./src/app/recipe/recipe-list/recipe-item/recipe-item.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/recipe/recipe-list/recipe-item/recipe-item.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipeRecipeListRecipeItemRecipeItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".activated{\n\n     background-color: rgb(182, 201, 134);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlL3JlY2lwZS1saXN0L3JlY2lwZS1pdGVtL3JlY2lwZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0tBRUssb0NBQW9DO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlL3JlY2lwZS1saXN0L3JlY2lwZS1pdGVtL3JlY2lwZS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZhdGVke1xuXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDIwMSwgMTM0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/recipe/recipe-list/recipe-item/recipe-item.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/recipe/recipe-list/recipe-item/recipe-item.component.ts ***!
    \*************************************************************************/

  /*! exports provided: RecipeItemComponent */

  /***/
  function srcAppRecipeRecipeListRecipeItemRecipeItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function () {
      return RecipeItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RecipeItemComponent =
    /*#__PURE__*/
    function () {
      function RecipeItemComponent() {
        _classCallCheck(this, RecipeItemComponent);
      }

      _createClass(RecipeItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecipeItemComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RecipeItemComponent.prototype, "recipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RecipeItemComponent.prototype, "index", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recipe-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe-list/recipe-item/recipe-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe-item.component.css */
      "./src/app/recipe/recipe-list/recipe-item/recipe-item.component.css")).default]
    })], RecipeItemComponent);
    /***/
  },

  /***/
  "./src/app/recipe/recipe-list/recipe-list.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/recipe/recipe-list/recipe-list.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipeRecipeListRecipeListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9yZWNpcGUtbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/recipe/recipe-list/recipe-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/recipe/recipe-list/recipe-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: RecipeListComponent */

  /***/
  function srcAppRecipeRecipeListRecipeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function () {
      return RecipeListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../recipe.service */
    "./src/app/recipe/recipe.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var RecipeListComponent =
    /*#__PURE__*/
    function () {
      function RecipeListComponent(Rservice) {
        _classCallCheck(this, RecipeListComponent);

        this.Rservice = Rservice;
        this.plus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.save = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"];
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      }

      _createClass(RecipeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.sub = this.Rservice.recipeChanged.subscribe(function (recipes) {
            _this9.recipes = recipes;
          });
          this.recipes = this.Rservice.getRecipe();
          this.Rservice.fetchData().subscribe(function (res) {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return RecipeListComponent;
    }();

    RecipeListComponent.ctorParameters = function () {
      return [{
        type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]
      }];
    };

    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-recipe-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe-list/recipe-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe-list.component.css */
      "./src/app/recipe/recipe-list/recipe-list.component.css")).default]
    })], RecipeListComponent);
    /***/
  },

  /***/
  "./src/app/recipe/recipe.component.css":
  /*!*********************************************!*\
    !*** ./src/app/recipe/recipe.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipeRecipeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9yZWNpcGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/recipe/recipe.component.ts":
  /*!********************************************!*\
    !*** ./src/app/recipe/recipe.component.ts ***!
    \********************************************/

  /*! exports provided: RecipeComponent */

  /***/
  function srcAppRecipeRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeComponent", function () {
      return RecipeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RecipeComponent =
    /*#__PURE__*/
    function () {
      function RecipeComponent() {
        _classCallCheck(this, RecipeComponent);
      }

      _createClass(RecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecipeComponent;
    }();

    RecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recipe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe.component.css */
      "./src/app/recipe/recipe.component.css")).default]
    })], RecipeComponent);
    /***/
  },

  /***/
  "./src/app/recipe/recipe.model.ts":
  /*!****************************************!*\
    !*** ./src/app/recipe/recipe.model.ts ***!
    \****************************************/

  /*! exports provided: Recipe */

  /***/
  function srcAppRecipeRecipeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Recipe", function () {
      return Recipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Recipe = function Recipe(name, desc, imgURL, ingredients) {
      _classCallCheck(this, Recipe);

      this.name = name;
      this.desc = desc;
      this.imgURL = imgURL;
      this.ingredients = ingredients;
    };
    /***/

  },

  /***/
  "./src/app/recipe/recipe.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/recipe/recipe.module.ts ***!
    \*****************************************/

  /*! exports provided: RecipeModule */

  /***/
  function srcAppRecipeRecipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeModule", function () {
      return RecipeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recipe-details/recipe-details.component */
    "./src/app/recipe/recipe-details/recipe-details.component.ts");
    /* harmony import */


    var _recipes_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./recipes-resolver.service */
    "./src/app/recipe/recipes-resolver.service.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-recipe/edit-recipe.component */
    "./src/app/recipe/edit-recipe/edit-recipe.component.ts");
    /* harmony import */


    var _empty_recipe_empty_recipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./empty-recipe/empty-recipe.component */
    "./src/app/recipe/empty-recipe/empty-recipe.component.ts");
    /* harmony import */


    var _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./recipe-list/recipe-item/recipe-item.component */
    "./src/app/recipe/recipe-list/recipe-item/recipe-item.component.ts");
    /* harmony import */


    var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./recipe-list/recipe-list.component */
    "./src/app/recipe/recipe-list/recipe-list.component.ts");
    /* harmony import */


    var _recipe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./recipe.component */
    "./src/app/recipe/recipe.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var RecipeModule = function RecipeModule() {
      _classCallCheck(this, RecipeModule);
    };

    RecipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
      declarations: [_recipe_component__WEBPACK_IMPORTED_MODULE_11__["RecipeComponent"], _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_10__["RecipeListComponent"], _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__["RecipeItemComponent"], _empty_recipe_empty_recipe_component__WEBPACK_IMPORTED_MODULE_8__["EmptyRecipeComponent"], _edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_7__["EditRecipeComponent"]],
      exports: [_recipe_component__WEBPACK_IMPORTED_MODULE_11__["RecipeComponent"], _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_10__["RecipeListComponent"], _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__["RecipeItemComponent"], _empty_recipe_empty_recipe_component__WEBPACK_IMPORTED_MODULE_8__["EmptyRecipeComponent"], _edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_7__["EditRecipeComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{
        path: 'recipes',
        component: _recipe_component__WEBPACK_IMPORTED_MODULE_11__["RecipeComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [{
          path: '',
          component: _empty_recipe_empty_recipe_component__WEBPACK_IMPORTED_MODULE_8__["EmptyRecipeComponent"]
        }, {
          path: 'new',
          component: _edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_7__["EditRecipeComponent"]
        }, {
          path: ':id',
          component: _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_1__["RecipeDetailsComponent"],
          resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_2__["RecipeResolverService"]]
        }, {
          path: ':id/edit',
          component: _edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_7__["EditRecipeComponent"],
          resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_2__["RecipeResolverService"]]
        }]
      }]), _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
    })], RecipeModule);
    /***/
  },

  /***/
  "./src/app/recipe/recipe.service.ts":
  /*!******************************************!*\
    !*** ./src/app/recipe/recipe.service.ts ***!
    \******************************************/

  /*! exports provided: RecipeService */

  /***/
  function srcAppRecipeRecipeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeService", function () {
      return RecipeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shopping_list_shopping_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../shopping-list/shopping.service */
    "./src/app/shopping-list/shopping.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RecipeService =
    /*#__PURE__*/
    function () {
      function RecipeService(Sservice, Http, authService) {
        _classCallCheck(this, RecipeService);

        this.Sservice = Sservice;
        this.Http = Http;
        this.authService = authService;
        this.recipeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.recipes = [];
      }

      _createClass(RecipeService, [{
        key: "setRecipe",
        value: function setRecipe(recipes) {
          this.recipes = recipes;
          this.recipeChanged.next(this.recipes.slice());
        }
      }, {
        key: "onSaveChanges",
        value: function onSaveChanges() {
          var userToken = this.authService.user.value.token;
          this.Http.put('https://recipe-book-d85d8.firebaseio.com/recipes.json?', this.recipes, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('auth', userToken)
          }).subscribe(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "fetchData",
        value: function fetchData() {
          var _this10 = this;

          return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (user) {
            return _this10.Http.get('https://recipe-book-d85d8.firebaseio.com/recipes.json', {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('auth', user.token)
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (recipes) {
            return recipes.map(function (recipe) {
              return Object.assign({}, recipe, {
                ingredients: recipe.ingredients ? recipe.ingredients : []
              });
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (recipes) {
            _this10.setRecipe(recipes);
          }));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.recipes[id];
        }
      }, {
        key: "getRecipe",
        value: function getRecipe() {
          return this.recipes.slice();
        }
      }, {
        key: "addToList",
        value: function addToList(ingredients) {
          this.Sservice.storeList(ingredients);
        }
      }, {
        key: "addNewRecipe",
        value: function addNewRecipe(recipe) {
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice());
        }
      }, {
        key: "updateRecipe",
        value: function updateRecipe(id, updatedRecipe) {
          this.recipes[id] = updatedRecipe;
          this.recipeChanged.next(this.recipes.slice());
        }
      }, {
        key: "deleteRecipe",
        value: function deleteRecipe(id) {
          this.recipes.splice(id, 1);
          this.recipeChanged.next(this.recipes.slice());
        }
      }]);

      return RecipeService;
    }();

    RecipeService.ctorParameters = function () {
      return [{
        type: _shopping_list_shopping_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])()], RecipeService);
    /***/
  },

  /***/
  "./src/app/recipe/recipes-resolver.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/recipe/recipes-resolver.service.ts ***!
    \****************************************************/

  /*! exports provided: RecipeResolverService */

  /***/
  function srcAppRecipeRecipesResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeResolverService", function () {
      return RecipeResolverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recipe.service */
    "./src/app/recipe/recipe.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RecipeResolverService =
    /*#__PURE__*/
    function () {
      function RecipeResolverService(Rservice) {
        _classCallCheck(this, RecipeResolverService);

        this.Rservice = Rservice;
      }

      _createClass(RecipeResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var recipes = this.Rservice.getRecipe();

          if (recipes.length === 0) {
            return this.Rservice.fetchData();
          } else {
            return recipes;
          }
        }
      }]);

      return RecipeResolverService;
    }();

    RecipeResolverService.ctorParameters = function () {
      return [{
        type: _recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]
      }];
    };

    RecipeResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], RecipeResolverService);
    /***/
  },

  /***/
  "./src/app/shared/dropdown.directive.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/dropdown.directive.ts ***!
    \**********************************************/

  /*! exports provided: DropdownDirective */

  /***/
  function srcAppSharedDropdownDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownDirective", function () {
      return DropdownDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DropdownDirective =
    /*#__PURE__*/
    function () {
      function DropdownDirective() {
        _classCallCheck(this, DropdownDirective);

        this.isOpen = false;
      }

      _createClass(DropdownDirective, [{
        key: "toggle",
        value: function toggle() {
          this.isOpen = !this.isOpen;
        }
      }]);

      return DropdownDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.show')], DropdownDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], DropdownDirective.prototype, "toggle", null);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appDropdown]',
      exportAs: 'appDropDown'
    })], DropdownDirective);
    /***/
  },

  /***/
  "./src/app/shared/indgredient.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/indgredient.model.ts ***!
    \*********************************************/

  /*! exports provided: Ingredient */

  /***/
  function srcAppSharedIndgredientModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ingredient", function () {
      return Ingredient;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Ingredient = // name:string;
    // amount:number;
    function Ingredient(name, amount) {
      _classCallCheck(this, Ingredient);

      this.name = name;
      this.amount = amount;
    };
    /***/

  },

  /***/
  "./src/app/shared/spinner/spinner.component.css":
  /*!******************************************************!*\
    !*** ./src/app/shared/spinner/spinner.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinnerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".lds-roller {\n  \n    display: inline-block;\n    position: relative;\n    width: 180px;\n    height: 180px;\n    margin-left: 200px;\n    margin-top: 260px;\n  }\n  .lds-roller div {\n    -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n            animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    -webkit-transform-origin: 40px 40px;\n            transform-origin: 40px 40px;\n  }\n  .lds-roller div:after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: rgb(255, 255, 255);\n    margin: -4px 0 0 -4px;\n  }\n  .lds-roller div:nth-child(1) {\n    -webkit-animation-delay: -0.036s;\n            animation-delay: -0.036s;\n  }\n  .lds-roller div:nth-child(1):after {\n    top: 63px;\n    left: 63px;\n  }\n  .lds-roller div:nth-child(2) {\n    -webkit-animation-delay: -0.072s;\n            animation-delay: -0.072s;\n  }\n  .lds-roller div:nth-child(2):after {\n    top: 68px;\n    left: 56px;\n  }\n  .lds-roller div:nth-child(3) {\n    -webkit-animation-delay: -0.108s;\n            animation-delay: -0.108s;\n  }\n  .lds-roller div:nth-child(3):after {\n    top: 71px;\n    left: 48px;\n  }\n  .lds-roller div:nth-child(4) {\n    -webkit-animation-delay: -0.144s;\n            animation-delay: -0.144s;\n  }\n  .lds-roller div:nth-child(4):after {\n    top: 72px;\n    left: 40px;\n  }\n  .lds-roller div:nth-child(5) {\n    -webkit-animation-delay: -0.18s;\n            animation-delay: -0.18s;\n  }\n  .lds-roller div:nth-child(5):after {\n    top: 71px;\n    left: 32px;\n  }\n  .lds-roller div:nth-child(6) {\n    -webkit-animation-delay: -0.216s;\n            animation-delay: -0.216s;\n  }\n  .lds-roller div:nth-child(6):after {\n    top: 68px;\n    left: 24px;\n  }\n  .lds-roller div:nth-child(7) {\n    -webkit-animation-delay: -0.252s;\n            animation-delay: -0.252s;\n  }\n  .lds-roller div:nth-child(7):after {\n    top: 63px;\n    left: 17px;\n  }\n  .lds-roller div:nth-child(8) {\n    -webkit-animation-delay: -0.288s;\n            animation-delay: -0.288s;\n  }\n  .lds-roller div:nth-child(8):after {\n    top: 56px;\n    left: 12px;\n  }\n  @-webkit-keyframes lds-roller {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n  @keyframes lds-roller {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSx3RUFBZ0U7WUFBaEUsZ0VBQWdFO0lBQ2hFLG1DQUEyQjtZQUEzQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFO01BQ0UsK0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQXlCO2NBQXpCLHlCQUF5QjtJQUMzQjtFQUNGO0VBUEE7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZHMtcm9sbGVyIHtcbiAgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjYwcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2IHtcbiAgICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgICB0b3A6IDYzcHg7XG4gICAgbGVmdDogNjNweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gICAgdG9wOiA2OHB4O1xuICAgIGxlZnQ6IDU2cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICAgIHRvcDogNzFweDtcbiAgICBsZWZ0OiA0OHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgICB0b3A6IDcycHg7XG4gICAgbGVmdDogNDBweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgICB0b3A6IDcxcHg7XG4gICAgbGVmdDogMzJweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG4gICAgdG9wOiA2OHB4O1xuICAgIGxlZnQ6IDI0cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICAgIHRvcDogNjNweDtcbiAgICBsZWZ0OiAxN3B4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgICB0b3A6IDU2cHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinner.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/spinner/spinner.component.ts ***!
    \*****************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSharedSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpinnerComponent =
    /*#__PURE__*/
    function () {
      function SpinnerComponent() {
        _classCallCheck(this, SpinnerComponent);
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinner.component.css */
      "./src/app/shared/spinner/spinner.component.css")).default]
    })], SpinnerComponent);
    /***/
  },

  /***/
  "./src/app/shopping-list/edit-list/edit-list.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/shopping-list/edit-list/edit-list.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShoppingListEditListEditListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3QvZWRpdC1saXN0L2VkaXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shopping-list/edit-list/edit-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shopping-list/edit-list/edit-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: EditListComponent */

  /***/
  function srcAppShoppingListEditListEditListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditListComponent", function () {
      return EditListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_indgredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../shared/indgredient.model */
    "./src/app/shared/indgredient.model.ts");
    /* harmony import */


    var _shopping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../shopping.service */
    "./src/app/shopping-list/shopping.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EditListComponent =
    /*#__PURE__*/
    function () {
      function EditListComponent(Sservice) {
        _classCallCheck(this, EditListComponent);

        this.Sservice = Sservice;
        this.editMode = false;
        this.ingredients = [];
      }

      _createClass(EditListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.sub = this.Sservice.enableEdit.subscribe(function (id) {
            _this11.editedItemId = id;
            _this11.editMode = true;
            _this11.editedItem = _this11.Sservice.getEditedItem(_this11.editedItemId);

            _this11.shopForm.setValue({
              name: _this11.editedItem.name,
              amount: _this11.editedItem.amount
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "clearForm",
        value: function clearForm() {
          this.editMode = false;
          this.shopForm.reset();
        }
      }, {
        key: "addIngredient",
        value: function addIngredient(form) {
          var amount = form.value.amount;
          var name = form.value.name;
          var newIngredient = new _shared_indgredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"](name, amount);

          if (this.editMode) {
            this.Sservice.updateIngredient(newIngredient, this.editedItemId);
            this.editMode = false;
          } else {
            this.Sservice.addIngredient(newIngredient);
            this.editMode = false;
          }

          this.shopForm.reset();
        }
      }, {
        key: "deleteIngredient",
        value: function deleteIngredient() {
          this.Sservice.deleteINgredient(this.editedItemId);
          this.clearForm();
        }
      }]);

      return EditListComponent;
    }();

    EditListComponent.ctorParameters = function () {
      return [{
        type: _shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('formData', {
      static: false
    })], EditListComponent.prototype, "shopForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], EditListComponent.prototype, "ingredients", void 0);
    EditListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-edit-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/edit-list/edit-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-list.component.css */
      "./src/app/shopping-list/edit-list/edit-list.component.css")).default]
    })], EditListComponent);
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping-list.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShoppingListShoppingListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: ShoppingListComponent */

  /***/
  function srcAppShoppingListShoppingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function () {
      return ShoppingListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shopping_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shopping.service */
    "./src/app/shopping-list/shopping.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShoppingListComponent =
    /*#__PURE__*/
    function () {
      function ShoppingListComponent(Sservice) {
        _classCallCheck(this, ShoppingListComponent);

        this.Sservice = Sservice;
      }

      _createClass(ShoppingListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.ingredients = this.Sservice.getIngredients();
          this.sub = this.Sservice.ingredientAdded.subscribe(function (ingredients) {
            _this12.ingredients = ingredients;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "editItem",
        value: function editItem(id) {
          this.Sservice.enableEdit.next(id);
        }
      }]);

      return ShoppingListComponent;
    }();

    ShoppingListComponent.ctorParameters = function () {
      return [{
        type: _shopping_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]
      }];
    };

    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-shopping-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping-list.component.css */
      "./src/app/shopping-list/shopping-list.component.css")).default]
    })], ShoppingListComponent);
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping-list.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.module.ts ***!
    \*******************************************************/

  /*! exports provided: ShoppingModule */

  /***/
  function srcAppShoppingListShoppingListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingModule", function () {
      return ShoppingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-list/edit-list.component */
    "./src/app/shopping-list/edit-list/edit-list.component.ts");
    /* harmony import */


    var _shopping_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shopping-list.component */
    "./src/app/shopping-list/shopping-list.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ShoppingModule = function ShoppingModule() {
      _classCallCheck(this, ShoppingModule);
    };

    ShoppingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      declarations: [_shopping_list_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingListComponent"], _edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_4__["EditListComponent"]],
      exports: [_shopping_list_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingListComponent"], _edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_4__["EditListComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: 'shopping-list',
        component: _shopping_list_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingListComponent"]
      }]), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]
    })], ShoppingModule);
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shopping-list/shopping.service.ts ***!
    \***************************************************/

  /*! exports provided: ShopService */

  /***/
  function srcAppShoppingListShoppingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopService", function () {
      return ShopService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_indgredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../shared/indgredient.model */
    "./src/app/shared/indgredient.model.ts");

    var ShopService =
    /*#__PURE__*/
    function () {
      function ShopService() {
        _classCallCheck(this, ShopService);

        this.ingredientAdded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.enableEdit = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ingredients = [new _shared_indgredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Tomatos', 2), new _shared_indgredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Cheese', 2), new _shared_indgredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('potatos', 20)];
      }

      _createClass(ShopService, [{
        key: "getIngredients",
        value: function getIngredients() {
          return this.ingredients.slice();
        }
      }, {
        key: "addIngredient",
        value: function addIngredient(newIngredient) {
          this.ingredients.push(newIngredient);
          this.ingredientAdded.next(this.ingredients.slice());
        }
      }, {
        key: "storeList",
        value: function storeList(ingredients) {
          var _this$ingredients;

          (_this$ingredients = this.ingredients).push.apply(_this$ingredients, _toConsumableArray(ingredients));

          this.ingredientAdded.next(this.ingredients.slice());
        }
      }, {
        key: "getEditedItem",
        value: function getEditedItem(id) {
          return this.ingredients[id];
        }
      }, {
        key: "updateIngredient",
        value: function updateIngredient(newIngredient, id) {
          this.ingredients[id] = newIngredient;
          this.ingredientAdded.next(this.ingredients.slice());
        }
      }, {
        key: "deleteINgredient",
        value: function deleteINgredient(id) {
          this.ingredients.splice(id, 1);
          this.ingredientAdded.next(this.ingredients.slice());
        }
      }]);

      return ShopService;
    }();

    ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ShopService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      fireBaseAPIKey: 'AIzaSyD2SXvfXyWryGt7NyDutRnJyUnl-uOUoiM'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/arman/Documents/GitHub/Angular-Recipe---App/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map