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
# var

var es el apuntador

valor es el primitivo

var i = 1 (local)

i = 1 global window    (window.i)




``` javascript
while (--count) {console.log(count)}
```


``` javascript
var a= ''  // is false

!a  //is true

!!a //is false
```
# ++i vs i++

``` javascript
var i = 42;
alert(i++); // shows 42
alert(i); // shows 43
i = 42;
alert(++i); // shows 43
alert(i); // shows 43
##Object.prototype
```

## objetos

a.__proto__
apunta a prototype


a.__proto__.__proto__ prototype de creación de objetos.


Todo objeto tiene:

miembros

Car.prototype.run = funtion() { console.log('kjsdh')}


siempre que se crea un metodo en la cración de un objeto en el prototype si es F


}

#call() & apply() vs bind()
https://javascriptplayground.com/javascript-variable-scope-this/
https://medium.com/entendiendo-javascript/entendiendo-scopes-de-variables-en-javascript-661ea382c8bc

call() para argumentos 

apply() para pasar una array

bind()

https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind

# Hoisting 

https://developer.mozilla.org/es/docs/Glossary/Hoisting

# Visual Studio Tricks
CTRL + D Selecciona diferentes valores iguales.

O boton derecho Change All Ocurrences.

#Clousure

https://developer.mozilla.org/es/docs/Web/JavaScript/Closures

# Ternarios


Los ternarios pueden devolver mensajes y cambiar estados:
'''

(cadena.indexOf)....?

(...): (ok = false, message= 'blablabla')
'''


# jasmine

https://jasmine.github.io/

#Jquery

https://jquery.com/
