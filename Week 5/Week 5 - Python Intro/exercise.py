# name="John"
# age=25
# height=1.75
# is_student=True

# print(f"Name: {name}, Age: {age}, Height: {height}")

# x = "Welcome"
# print(x[0])
# print(x[3:6])
# print(x[3:])
# print(x[:5])
# print(x.upper())
# print(x.lower())
# print(len(x))
# print("come" in x)
# print("come1" in x)
# print(x.replace("Welc", "H"))

# x = 3
# y = 2.5
# print(x + y) #5.5
# print(x - y) #0.5
# print(x * y) #7.5
# print(x / y) #1.2

# import math
# z = 3.14159
# print(round(z, 2)) #3.14
# print(math.floor(z)) #3
# print(math.ceil(z)) #4
# print(f"{z:2f}") #3.14 

# num1 = input("Enter the first number: ")
# num2 = input("Enter the second number: ")
# print(num1 + num2)
# print(int(num1) + int(num2))

# x = "42"
# y = 3.99
# z = 0
# print(int(x))
# print(int(y))
# print(float(x))
# print(str(y))
# print(bool(z))
# print(bool(x))

# celsius = float(input("Enter temperature in Celsius: "))
# fahrenheit = (celsius * 9 / 5) + 32
# print(f"{celsius}°C is equal to {fahrenheit}°F")

# age = 20
# if age >= 18:
#     print("Adult.")
# else:
#     print("Minor.")

# age = 19
# if age >= 18 and age <=20:
#     print("Freshmen")
# elif age > 20 and age <=22:
#     print("Sophomore")
# elif age > 22:
#     print("Graduate")

# age = 5
# print(age > 0 and age < 10)
# print(age > 0 or age > 10)
# print(not(age > 3))

# for i in range(1, 6):
#     print(f"Number: {i}")

# for i in range(1, 6):
#     print(f"Number: {i}")
#     if i == 3:
#         break
# print("Loop ended")

# for i in range(1, 11):
#     if i % 2 == 0:
#         continue
#     print(f"Odd Number: {i}")
# print("Loop ended")

# def greet_user():
#     print("Hello, welcome to the program!")
#     print("I hope you have a great experience.")
#     print("Let's get started!")
# greet_user()
# greet_user()

# def calculate_area(length, width):
#     area = length * width
#     return area
# result = calculate_area(2, 3)
# print(f"Area: {result}")

# fruits = ["apple", "banana", "orange"]
# fruits.append("grape")
# fruits.insert(1, "mango")
# print(fruits)
# print(fruits[0])
# print(fruits[-1])

# numbers = [3, 1, 4, 1, 5, 9, 2]
# numbers.sort()
# print(numbers)
# numbers.reverse()
# print(numbers)
# print(numbers.count(1))
# print(numbers.index(1))

# todos = []
# todos.append("Buy groceries")
# todos.append("Clean the house")
# todos.append("Play bills")
# print("To-Do List: ")
# for index, task in enumerate(todos, 1):
#     print(f"{index}. {task}")

# person = {
#     "name": "Alice",
#     "age": 30,
#     "city": "New York"
# }
# print(person["name"])
# person["email"] = "alice@email.com"
# print(person)
# for key in person:
#     print(key)
# for value in person.values():
#     print(value)
# for key, value in person.items():
#     print(f"{key}: {value}")

try: 
    result = 10 / 0
except:
     print("Error: cannot divide by zero.")
finally:
     print("Closing...")

try:
     numerator = 10
     denominator = int(input("Enter a denominator: "))
     result = numerator / denominator
except:
     print("Error: cannot divide by zero!")
else:
     print(f"Success! Result = {result}")
finally:
     print("Closing...")
