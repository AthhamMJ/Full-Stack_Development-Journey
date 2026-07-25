class Animal {
    makeSound(): void {
        console.log("Some Generic sound");
    }
}

class Dog extends Animal{
    override makeSound(): void {
        console.log("Bark...Bark");
    }
}

class Cat extends Animal{
    override makeSound(): void {
        console.log("Mew...Mew");
    }
}

const animal1 : Animal = new Dog();
const animal2 : Animal = new Cat();

animal1.makeSound();
animal2.makeSound();