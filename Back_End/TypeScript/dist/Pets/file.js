"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log("Some Generic sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark...Bark");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Mew...Mew");
    }
}
const animal1 = new Dog();
const animal2 = new Cat();
animal1.makeSound();
animal2.makeSound();
//# sourceMappingURL=file.js.map