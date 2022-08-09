#!/usr/bin/python3


coffee = ["Café Latte", "Caffe Americano", "Espresso", "Cappuccino", "Macchiato"]

choice = int(input())

try:
    if choice > len(coffee):
        print("Invalid number")
    else:
        print(coffee[choice])
	
except:
	pass

finally:
	#and finally here
	print("Have a good day ")


