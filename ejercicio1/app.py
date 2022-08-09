#!/usr/bin/python3

if __name__ == "__main__":
    suma = 0
    suma_dos = 0
    for i in range(1, 1000):
        if i % 3 == 0 or i % 5 == 0:
            suma += i
    print(suma)
            

    for i in range(1, 10):
        if i % 3 == 0 or i % 5 == 0:
            suma_dos += i
    print(suma_dos)

