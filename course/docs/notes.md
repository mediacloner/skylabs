# notes


## Slices
https://docs.google.com/presentation/d/1Ysjno_thUZMFuOiR47qjRmzsNxBSvsIzfZEwO2EZ-Uc/edit#slide=id.g325d9e1ae7_2_80

## CSS


### SASS

http://sass-lang.com/guide

### Test your knowledge about CSS

http://flukeout.github.io

https://caniuse.com/#search=grid


### Specificity

https://specificity.keegan.st/

### Pseudo-selectors

https://css-tricks.com/pseudo-class-selectors/

### Responsive Tools
http://quirktools.com/screenfly/

### Positioning

https://i.stack.imgur.com/wA8sA.gif

* Display

https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block

* Float

https://css-tricks.com/all-about-floats/

* ClearFix

https://css-tricks.com/almanac/properties/c/clear/

### Flex || Grid
http://flexboxfroggy.com/#es

https://scrimba.com/g/gR8PTE



## HTML

### Span vs Div

div is a block element, span is inline.

### HTML List

https://www.hazunaweb.com/curso-de-html/listas/

## query string
query string http://... .com/search ? q= __________

``` html
<form action = 
<input>
```
get URL public (we can save a bookmark)

post URL hide


## http status

200 ok 
300 redirect
400 method not allow
500 Internal Server Error



## Javascript

### Documentation in Javascript

* JsDoc - for code
http://usejsdoc.org/index.html

* Confluence Wiki

https://es.atlassian.com/software/confluence

### Use Strict

https://www.w3schools.com/js/js_strict.asp

### Issues (feature, buy)
Jira

https://es.atlassian.com/software/jira

### Definition Variables

var a = a || 'Default'

### some o every 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

### apply y call

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

### for ... in

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...in

### try and catch

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/try...catch

### Callback
http://mialtoweb.es/callbacks-en-javascript/

### High Order Functions

https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99



### get and set


### Clousure
self executed funtion

http://www.variablenotfound.com/2012/10/closures-en-javascript-entiendelos-de.html


```javascript

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// the counter is now 3

```