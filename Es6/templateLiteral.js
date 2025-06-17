///Template Literal (hay Template String) là một tính năng mới trong ES6 
//cho phép bạn tạo chuỗi (string) một cách linh hoạt hơn, đặc biệt là:
//Chèn biến vào chuỗi dễ dàng
//Viết chuỗi nhiều dòng mà không cần \n
//Hỗ trợ biểu thức (expression) trong chuỗi
//Cú pháp
//Template literal dùng dấu backtick: ` thay vì dấu nháy đơn ' ' hay nháy kép " ".
const name = "Nam";
const age = 22;

const sentence = `My name is ${name} and I am ${age} years old.`;
console.log(sentence);
//So với ES5 phải viết:
//"My name is " + name + " and I am " + age + " years old.";
//⇒ ES6 gọn hơn rất nhiều!

//
const msg = `This is line 1
This is line 2
And this is line 3`;
console.log(msg);
//
const a = 5;
const b = 10;
console.log(`Tổng của ${a} + ${b} = ${a + b}`);
// 👉 Tổng của 5 + 10 = 15

///VD nâng cao
//Sử dụng phương thức lặp (bất kỳ loại vòng lặp nào) để có được đầu ra mong muốn (hiển thị bên dưới).
// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for(let i = 0; i < arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

//Object Literal là gì?
//Object Literal là cách đơn giản và phổ biến nhất để tạo object trong JavaScript 
//bằng cách sử dụng cặp dấu {} và khai báo các cặp key: value.
//ES6 bổ sung một số hỗ trợ hữu ích cho việc định nghĩa đối tượng theo nghĩa đen một cách dễ dàng.
// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });
// getMousePosition là một hàm đơn giản trả về một đối tượng chứa hai thuộc tính. 
// ES6 cung cấp cú pháp sugar để loại bỏ sự dư thừa khi phải viết x: x. 
// Bạn chỉ cần viết x một lần và nó sẽ được chuyển đổi thành x: x(hoặc một cái gì đó tương đương) bên dưới. 
// Đây là cùng một hàm ở trên được viết lại để sử dụng cú pháp mới này:

const getMousePosition = (x, y) => ({ x, y });
console.log(getMousePosition(10,20));
//kết quả { x: 10, y: 20 }

//Khi định nghĩa các hàm trong đối tượng trong ES5, chúng ta phải sử dụng từ khóa function như sau:
// const person = {
//   name: "Taylor",
//   sayHello: function() {
//     return `Hello! My name is ${this.name}.`;
//   }
// };
//Với ES6, bạn có thể xóa functionhoàn toàn từ khóa và dấu hai chấm khi định nghĩa hàm trong đối tượng. 
//Sau đây là ví dụ về cú pháp này:
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};