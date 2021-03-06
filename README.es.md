
# Battleship In Vanilla.js

Crea un batalla naval usando Vanilla.js

![Demonstration of Battleship](https://github.com/breatheco-de/exercise-battleship-vanillajs/blob/master/preview.gif?raw=true)

## 馃尡  C贸mo iniciar este proyecto

 No clones este repositorio. El primer paso para comenzar a codificar es clonar el [vanillajs boilerplate](https://github.com/4GeeksAcademy/vanillajs-hello) en tu computador local o con Gitpod.

a) Si usas Gitpod (recomendada) puedes clonar el boilerplate [clic aqu铆](https://github.com/4GeeksAcademy/vanillajs-hello).

b) Si trabajas localmente, escribe el siguiente comando en tu terminal: 
```sh
git clone  https://github.com/4GeeksAcademy/vanillajs-hello
```
馃挕 Importante: Recuerda actualizar el `remote` del proyecto con el de tu repositorio usando `git remote set-url origin <your new url>`, y luego guardar tu c贸digo en tu nuevo repositorio usando `add`, `commit` y `push`.

## 馃摑Instrucciones

1. Crea tu HTML / CSS. Primero, te recomendamos usar un div padre con `display: flex` y` flex-wrap: wrap` (para permitir m煤ltiples filas), el contenedor debe tener 100 divs adentro.
2. Una vez que tu HTML / CSS se vea bien, comienza a pensar en c贸mo hacerlo din谩mico usando JS.
3. Para representar el tablero de juego, puedes usar una array o arreglo JS como este:

```js
// 0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot
let gameBoard = [
    [1,1,1,1,1,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0]
];
```

4. Agrega un onClick a cada `<div>` y llama a la funci贸n `fireTorpedo` con las coordenadas del div.
5. Reemplaza el valor en el tablero y muestra (render) el tablero nuevamente.

## 馃槑 驴Te sientes seguro?

+ Intenta implementar una funci贸n "showShips" que muestre las posiciones del barco cuando se hace clic.