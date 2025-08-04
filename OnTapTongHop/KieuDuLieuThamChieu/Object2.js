//Bài 6: Niêm phong object
const user = {
  username: "admin",
  password: "123456"
};

/*Object.seal(): sẽ niêm phong 1 object
Không thêm được thuộc tính mới
Không xóa được thuộc tính
Không thay đổi được cấu trúc Object
Thay đổi được giá trị nếu không bị writable: false */

Object.seal(user);

//Bài 7: phương thức Object.hasOwnProperty() của Object
//Dùng để kiểm tra xem xem một object có trực tiếp sở hữu 
//một thuộc tính nào đó không (tức là không phải kế thừa từ prototype).

const person = {
  name: "Bình",
  age: 25
};

console.log(person.hasOwnProperty("name")); // ✅ true
console.log(person.hasOwnProperty("toString")); // ❌ false (toString là từ prototype)
console.log('----------------------------------------------------');

//Bài 8: Phương thức Object.getOwnPropertySymbols() 
// Phương thức này sẽ trả về một mảng các symbol key mà các object đang sở hữu

const sym1 = Symbol('id');
const sym2 = Symbol('role');

const obj = {
  name: 'Bình',
  age: 22,
  [sym1]: 123,
  [sym2]: 'admin'
};

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); 
// [ Symbol(id), Symbol(role) ] lấy ra đươc symbol id và role

console.log(obj[symbols[0]]); // 123