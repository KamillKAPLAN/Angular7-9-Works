# AngularAPISepetApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## AzureApi URL
 - Products : `http://northwindapi.azurewebsites.net/api/products`
 - Categories : `http://northwindapi.azurewebsites.net/api/categories`

## Componentler Oluşturuldu
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication$ `ng g component product`
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication$ `ng g component category`
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication$ `ng g component cart`
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication$ `ng g component account`
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication$ `ng g component shipping-detail`
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication/src/app/cart$ `ng g component cart-summary`
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication/src/app/account$ `ng g component logged`
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication$ `ng g component not-found`

## Product Service Oluşturuldu
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication/src/app/product$ `ng g service product`
 
## How to use glyphicon glyphicon-plus on angular 7
 - npm install --save font-awesome
 - .angular-cli.json `dosyasında`
 - "styles": [
      "styles.css",
      "../node_modules/bootstrap/dist/css/bootstrap.css",
      "../node_modules/font-awesome/css/font-awesome.css"
   ], 

# Pipe Oluşturma
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication/src/app/product$ `ng g pipe vat-added`
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication/src/app/product$ `ng g pipe product-filter`

## Category Service Oluşturuldu 
 - kamilkaplan@kamilkaplan:~/AngularAPISepetApplication/src/app/category$ `ng g service category`
 
