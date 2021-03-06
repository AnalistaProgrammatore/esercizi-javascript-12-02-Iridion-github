/*
** Scrivete la funzione ricorsiva di calcolo del fattoriale di un numero n
** e descrivete lo Stack di chiamate ricorsive
*/

/* 
** Marco oserebbe affermare che ció risulti maggiorment leggibile (Vero, boss?). 
** Io d'altro canto definirei le seguenti righe diabolicamente concise.
** I disegnini la prossima volta >:/
*/

const factorial = n => n === 0 ? 1 : n * factorial(n - 1)
console.log(factorial(5))

//versione iterativa
const factorialB = n => {
  let result = n
  for (let x = n; x > 1; x--) {
    result *= (x - 1)
  }
  return result
}
console.log(factorialB(5))