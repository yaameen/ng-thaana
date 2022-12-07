# ngThaana

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

ngThaana is a port of [v-thaana](https://www.npmjs.com/package/v-thaana) for angular
 

# Features!

  - Converts text to thaana (unicode)

### Installation

ngThaana requires nothing in particular as a dependancy.

Install the dependencies and devDependencies and start the server.

```sh
$ yarn add ng-thaana

# or if you prefer npm
$ npm i ng-thaana

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

`ng-thaana` supports pasting latin characters which on the fly will transliterate the provide string into the preferred `flavor`. Here flavors are `phonetic` (default), `typewriter` and `faseyha`

For example when `divehi` is pasted it will be `ދިވެހި` in `phonetic` flavor however the same will be `ިިހެވިދ` in `faseyha` flavor. In each flavor the keyboard layout is slightly different.


### In the template
```html
<div>

  <input [(ngModel)]='name' ng-thaana placeholder="Your name please..." />
  
  <!-- With explicit flavor -->
  <input [(ngModel)]='name' flavor='faseyha' ng-thaana placeholder="Your name please..." />

  
  <!-- With post callback -->
  <input [(ngModel)]='name' (ng-thaana)='postCallback($event)' placeholder="Your name please..." />

</div>
```

### Toggling
ng-thaana now supports toggling its effective state. Meaning you can turn off ng-thaana and vise-versa. This can be done by pressing shift key twice under a second. 

This has several interesting use cases such as when a charactor from English/Any language is required maybe in the middle of a word or sentence. For instance ID card number requires an `A` prefixed. There are plenty of such if you think about it.

You will want to indicate the toggling of `ng-thaana` which can be handled like so.

In the template/view
```html
<input [(ngModel)]='name' (thaana-toggled)="toggled($event)" ng-thaana placeholder="Search..." />
```
And on the js side
```javascript
toggled(e: boolean) {
  // Maybe show something like a toast or indicate it on the input itself
  console.log('You toggled ng-thaana: ', e); 
}
```

### Todos

 - Write Tests
 - Better doc

License
----
MIT


**Free Software, Hell Yeah!**