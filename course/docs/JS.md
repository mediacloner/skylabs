# Javascript

## typeof 

para comprobar si existe
``` javascript
typeof algo === 'undefined'
```

###negado

var v = true

!v   //false

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