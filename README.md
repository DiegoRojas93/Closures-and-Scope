# Curso de Closures y Scope en JavaScript

**El Scope:** se define como el alcance que va a tener una variable dentro del codigo. En otras palabras, se podria definir que scope es el se encargara de decidir a que bloques de codigo va acceder a una variable.

Existen 2 tipos de scope y 2 variaciones de Scope:

## Tipos de Scope


### Global Scope

**El Scope Global:** Es aquel entorno en el que una variable es inicializada o declarada ***fuera*** de una funcion o de un bloque. A estas variables son conocidas como ___Variables Globales___, debido a que cualquier funcion o bloque de nuestro codigo puede acceder a ellas.

### El Local Scope

**El Local Scope: ** Es aquel entorno en el que una variable es inicializada o declarada ***dentro*** de una funcion o de un bloque. Estas variables conocidas como ___Variables Locales___ solo se pueden acceder a ellas (ejecutar o llamar) dentro del entorno en donde conviven.


## variaciones de Scope

Adentro del Local Scope se pueden encontar 2 variaciondes de la misma.


### El Function Scope

Cada vez que declara una variable en una función, la variable solo es visible dentro de la función. No puede acceder a la variable fuera de la función. **Nota:** Es recomandable utilizar las palabras reservadas de let y const para que las variables sean utilizadas dentro de la funcion.

### El Block Scope

Se establece como aquel entorno en el que esta adentro de llaves {}. Esto implica que una sentencia control como lo es un for, while un do while, o funciones condicionales como lo son if, if else o un switch serian bloques.


**Un Closure:** se define como la combinacion de una funcion y el ambito lexico en la cual ha sido declarada dicha funcion. Es decir que un Closure recuerda el ambito en el que ha sido creado.

**Ambito léxico: ** se refiere a que una funcion puede acceder a una funcion o variable fuera de ella. Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.