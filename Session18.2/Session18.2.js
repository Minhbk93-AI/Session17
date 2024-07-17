// Tạo class Dog
class Dog {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  // Phương thức thực hiện sủa
  bark() {
    console.log(`${this.name} is barking!`);
  }

  // Phương thức kiểm tra có bắt được mèo hay không
  canCatchCat(cat) {
    if (this.speed > cat.speed) {
      console.log(`${this.name} can catch ${cat.name}.`);
    } else {
      console.log(`${this.name} cannot catch ${cat.name}.`);
    }
  }
}

// Tạo class Cat
class Cat {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

// Khởi tạo đối tượng Dog và Cat
let dog = new Dog("Becgie", 30);
let cat = new Cat("Meomeo", 20);

// Thực hiện các hành động
dog.bark(); // Becgie is barking!
dog.canCatchCat(cat); // Becgie can catch Meomeo.
