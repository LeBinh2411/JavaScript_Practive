//ES6 cung cấp cú pháp mới để tạo đối tượng bằng cách sử dụng từ khóa class
class Person1  {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Xin chào, tôi là ${this.name}, ${this.age} tuổi.`);
  }
}

// Tạo đối tượng từ class
const p1 = new Person1("BinhBinh", 22);
p1.greet(); // Xin chào, tôi là BinhBinh, 22 tuổi.

//Constructor: lằm trong class, được gọi đến khi tạo 1 đối tượng mới trong class

class Person2 {
  constructor(name) {
    this._name = name; // Dấu _ là quy ước để phân biệt với getter/setter
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 2) {
      throw new Error("Tên quá ngắn!");
    }
    this._name = value;
  }
}

const p = new Person2("An");
console.log(p.name); // 👉 gọi getter: "An"

p.name = "Bi";       // 👉 gọi setter, hợp lệ
console.log(p.name); // "Bi"

p.name = "A";        // ❌ lỗi vì tên quá ngắn