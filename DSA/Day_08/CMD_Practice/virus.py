class Car:
    def __init__(self, brand, type):
        self.brand = brand
        self.type = type
    
    def Save(self):
        with open("car.txt", "a") as file:
            file.write(f"{self.brand} {self.type}")
        return "Saved !"
c1 = Car("ferrari", "sports")
c2 = Car("Mercedes", "gt3")
print(c1.Save())
print(c1.brand + " " + c1.type)
print(c2.brand + " " + c2.type)