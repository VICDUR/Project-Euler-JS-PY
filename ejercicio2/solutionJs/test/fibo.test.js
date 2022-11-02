const { fibo, sumArrSecuenseFiboPares, primerosTerminos } = require("../fibo");

describe("Fibonacci", () => {
  xit("deberia retornar sucecion de 10", () => {
    expect(fibo(10)).toBe(55);
  });
  xit("deberia retornar sucecion de 11", () => {
    expect(fibo(11)).toBe(89);
  });
  xit("deberia retornar sucecion de 20", () => {
    expect(fibo(20)).toBe(6765);
  });
  xit("deberia retornar 1 si se le pasa el 1", () => {
    expect(fibo(1)).toBe(1);
  });
  xit("deberia retornar 0 si se le pasa el 0", () => {
    expect(fibo(0)).toBe(0);
  });

  describe("Fibonacci arreglos terminos pares", () => {
    xit("deberia ser un array de terminos pares de 10", () => {
      fibo(10);
      expect(primerosTerminos.length).toBe(55); //55
    });

    xit("deberia ser un array de terminos pares de 11", () => {
      fibo(11);
      expect(primerosTerminos.length).toBe(88); //88
    });

    xit("deberia ser un array de terminos pares de 20", () => {
      fibo(20);
      expect(primerosTerminos.length).toBe(6765); //6765
    });
  });
  describe("Deberia arrojar un typeError", () => {
    it("Solo se permiten numeros enteros no strings", () => {
      expect(fibo("10")).toThrow("Debe ser un numero entero");
    });
  });
});
