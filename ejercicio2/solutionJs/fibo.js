// fibonacci sucection
// solution by Jakepy

/**
 * Recordar la que socesion de fibonacci es de naturaleza recursiva.
 * */

let primerosTerminos = [];

function sumArrSecuenseFiboPares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function fibo(n) {
  if (typeof n === "string" || typeof n === "float") {
    throw new TypeError("Debe ser un numero entero");
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  if (n % 2 === 0) {
    primerosTerminos.push(n);
  }

  return fibo(n - 1) + fibo(n - 2);
}


//=================
module["exports"] = {
  sumArrSecuenseFiboPares,
  fibo,
  primerosTerminos,
};
