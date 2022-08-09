#!/usr/bin/python3

n = int(input("Ingresa un numero [n]: "))

for num in range(1, n):
    if num % 2 == 0:
        continue
    
    if num % 3 == 0 and num % 5 == 0:
        print("Solo Learng")
    
    elif num % 3 == 0:
        print("Solo")
    elif num % 5 == 0:
        print("Learng")
    else: 
        print(num)






