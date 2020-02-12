# EserciziJavascript 1202

## MODALITA DI SVOLGIMENTO
Gli esercizi sono da svolgere carta e penna, la consegna deve essere effettuata tramite foto o scannerizzazione del o dei fogli prodotti per gli esercizi.

### ESERCIZI
1.Descrivere lo Stack dei Record di attivazione dell'ambiente dei seguenti propgrammi:
1.1

```
const foo = function(n, a) {
  let tmp = a;
  if(tmp === 0){
    return n;
  } else {
    return n+1;
  }
}

let x;
x = foo(3, 0);
x = foo(x+1, 1);
```
1.2
```
let y = 1;
const foo = function(x) {
  x = x+1;
  return x;
}
y = foo(y+1)
if(true) {
   let y = 4;
   y = foo(y+1);
   if(true) { 
      let y = 5;
      y = foo(y+3);
   }
}
```
1.3
```
let x = 1;
const g = function(h) {
  let x = 2;
  return h(3) + x;
}
if(true) {
  let x = 4;
  const f = function(y) {
    return x+y;
  }
  let z = g(f)
}
```
1.4
```
let x = 1;
const F = function() {
  const g = function() {
     return x + 1;
  }
  return g;
}
const gg = F();
let z = gg();
```

2. Descrivere lo Stack e che valori contiene V dopo la chiamata di foo
```
const V = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
const foo = function(x) {
  return x = x+1
}
V[1] = 12
V[1] = foo(V[i+1])
```

3. Scrivere in un file js la funzione ricorsiva di calcolo del fattoriale di un numero n https://it.wikipedia.org/wiki/Fattoriale e descrivere lo Stack di chiamate ricorsive
