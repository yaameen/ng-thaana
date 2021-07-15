# ngThaana

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

ngThaana is a port of [v-thaana](https://www.npmjs.com/package/v-thaana) for angular
 

# Features!

  - Converts text to thaana (unicode)
  - 


### Installation

ngThaana requires nothing in particular as a dependancy.

Install the dependencies and devDependencies and start the server.

```sh
$ npm -i ng-thaana
```

### Usage
```javascript
// import the module
import { NgThaanaModule } from 'ng-thaana';

// Register the module in the app.modules.ts or the main module.ts file

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // as such
    NgThaanaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### In the template
```html
<div>

  <input [(ngModel)]='name' ng-thaana placeholder="Your name please..." />
  
  <!-- With post callback -->
  <input [(ngModel)]='name' (ng-thaana)='postCallback($event)' placeholder="Your name please..." />

</div>
```


### Todos

 - Write Tests
 - Better doc

License
----
MIT


**Free Software, Hell Yeah!**