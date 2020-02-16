//1.Descrivere lo Stack dei Record di attivazione dell'ambiente dei seguenti programmi:
//_____________________________________________________________________________________



//[1.1]
const foo = function (n, a) {
   let tmp = a //0 (con params: 3 e 0) ; 1 (con params: 4 e 1)
   if (tmp === 0) {
      return n //3
   } else {
      return n + 1 //4 + 1
   }
}
let x
x = foo(3, 0) //x = 3
x = foo(x + 1, 1) //x = 5

/*
[DESCRIZIONE del 1.1]
AMBIENTE GLOBALE: {
   foo = function
   x = undefined
            AMBIENTE DI FOO (con params: 3 e 0): {
               n = 3
               a = 0
               tmp = 0
               AMBIENTE DEL PRIMO IF (con params: 3 e 0): {
                  return n ---> return 3
               }
            }
   x = 3
            AMBIENTE DI FOO (con params: 4 e 1): {
                           n = 4
                           a = 1
                           tmp = 1
                           AMBIENTE DELL'ELSE (con params: 4 e 1): {
                              return n + 1 ---> return 4 + 1 quindi 5
                           }
                        }
   x = 5
}
*/



//_____________________________________________________________________________________



//[1.2]
const y = 1
const foo = function (x) {
   x = x + 1
   return x
}
y = foo(y + 1)
if (true) {
   let y = 4
   y = foo(y + 1)

   if (true) {
      let y = 5
      y = foo(y + 3)
   }
}

/*
[DESCRIZIONE del 1.2]
AMBIENTE GLOBALE: {
   y = 1
      AMBIENTE DI FOO ALLA 1° CHIAMATA:{
         x = 2
         x = 3
      }
   y = 3
}

AMBIENTE DEL 1° IF:{
   y = 4
   AMBIENTE DI FOO ALLA 2° CHIAMATA: {
      x = 5
      x = 6
   }
   y = 6
}

AMBIENTE DEL 2° IF:{
   Y = 5
     AMBIENTE DI FOO ALLA 3° CHIAMATA: {
         x = 8
         x = 9
      }
   Y = 9
}
*/
//_____________________________________________________________________________________



//[1.3]
let x = 1
const g = function (h) {
   let x = 2
   console.log("Calling h, while inside g, with param set as 3 returns ", h(3))
   return h(3) + x //7 + 2
}
if (true) {
   let x = 4
   const f = function (y) {
      return x + y //3 + 4
   }
   let z = g(f) //returns 9
}

/*
[DESCRIZIONE del 1.3]
AMBIENTE GLOBALE: {
   x = 1
   g = function
   AMBIENTE DEL 1° IF: {
      x = 4
      f = function
         AMBIENTE DI G (1° Chiamata): {
            h = f cioè === function (y) {
                  return x + y
               }
            x = 2
            AMBIENTE DI H cioè F (1° Chiamata): {
               y = 3
               x = 4
               returns 7
            }
         }
      z = 9
   }
}
*/
//_____________________________________________________________________________________



//[1.4]
let x = 1
const F = function () {
   const g = function () {
      return x + 1 //1 + 1
   }
   return g //function g (dell'ambiente di F)
}
const gg = F() //jump to AMBIENTE DI F --> returns function g
let z = gg() //jump to AMBIENTE DI G (definito nell'ambiente di F) --> returns 2

/*
[DESCRIZIONE del 1.4]
AMBIENTE GLOBALE: {
x = 1
F = function

      AMBIENTE DI F: {
        g = function g (dell'ambiente di F)
      }

gg = function g (dell'ambiente di F)

            AMBIENTE DI G (definita nell'ambiente di F): {

            }

z = 2
}
*/
//_____________________________________________________________________________________



//[2] Descrivere lo Stack e che valori contiene V dopo la chiamata di foo
const V = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i = 0
const foo = function (x) {
   return x = x + 1
}
V[1] = 12
V[1] = foo(V[i + 1])

/*
[DESCRIZIONE del 2]
AMBIENTE GLOBALE: {
   V = Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   i = 0
   foo = function
   V = Array: [1, 12, 3, 4, 5, 6, 7, 8, 9, 10]
      AMBIENTE DI foo con param(V[0 + 1]): {
         x = V[0 + 1] cioè x = 12
         return x = x + 1 cioè x = 12 + 1 ---> return 13
      }
   V = [1, 13, 3, 4, 5, 6, 7, 8, 9, 10]
}
*/