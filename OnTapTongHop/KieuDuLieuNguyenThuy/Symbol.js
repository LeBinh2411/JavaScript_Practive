//Symbol là một giá trị duy nhất và bất biến, nó thường được dùng để
//tạo key độc nhất trong object, nhằm tránh xung đột giữa các key,
//đặc biệt trong các thư viên hay framework lớn

//Lợi ích: 

// - Tạo khóa (key) duy nhất cho Object
//Dù có mô tả giống nhau (Symbol("abc") và Symbol("abc")), hai Symbol vẫn khác biệt hoàn toàn.
// const sym1 = Symbol("id");
// const sym2 = Symbol("id");
// console.log(sym1 === sym2); // false

// - Ẩn các thuộc tính khỏi vòng lặp
//Khi dùng Symbol làm key, thuộc tính đó không bị hiển thị khi dùng for...in, Object.keys() hoặc JSON.stringify().
// const id = Symbol("id");
// const user = { name: "An", [id]: 123 };
// console.log(Object.keys(user)); // ['name']
// console.log(user[id]); // 123

//lưu ý 
// Không thể dùng toán tử + với Symbol muốn dùng thì phải ép kiểu
// Không thể duyệt Symbol key bằng các vòng lặp thông thường
// for...in, Object.keys() không thấy Symbol.
// Muốn lấy ra thì dùng Object.getOwnPropertySymbols(obj).

//Kết luận
//Dùng Symbol khi bạn cần key đặc biệt, không bị trùng lặp, 
// hoặc muốn giấu thuộc tính.
// Không thay thế cho object hay string thường,
// mà chỉ nên dùng khi thực sự cần tính duy nhất 
// và bảo vệ dữ liệu nội bộ.

//Bài 1: Tạo và so sánh Symbol
//Mỗi lần tạo Symbol sẽ là tạo mới mặc dù có mô tả giống nhau

let a = Symbol('hi');
//JavaScript tạo một vùng nhớ riêng, lưu trữ giá trị Symbol a, 
//và đảm bảo rằng không có Symbol nào khác giống hệt nó trong hệ thống.

let b = Symbol('hi');
//JavaScript tiếp tục tạo một vùng nhớ mới, lưu trữ một Symbol khác hoàn toàn 
// (dù cùng mô tả "abc").

console.log(a === b);
////Hai biến a và b tuy giống phần mô tả khi in ra (Symbol(abc)), 
//nhưng trong bộ nhớ, chúng được cấp phát ở hai địa chỉ khác nhau, 
//nên chúng không bằng nhau, không thể trùng lặp.


// Bài 2: dùng symbol làm key trong object
// let id = Symbol("userId");
// let user = {
//   name: "Bình",
//   [id]: 12345
// };

// console.log(user);         // In ra toàn bộ object
// console.log(user[id]);   


let id = Symbol("userId");
let user = {
  name: "Bình",
  [id]: 12345
};

console.log(Object.keys(user));         // 👉 ["name"]
console.log(Object.getOwnPropertyNames(user)); // 👉 ["name"]
console.log(Object.getOwnPropertySymbols(user)); // 👉 [Symbol(userId)]



//Cách tái sử dụng Symbol làm key
//Dùng Symbol toàn cục (global) với Symbol.for():
//.for() là một phương thức đặc biệt của Symbol giúp tạo và truy xuất các symbol dùng chung toàn cục (global symbol). Cụ thể:
let c = Symbol.for("abc");
let d = Symbol.for("abc");

console.log(c === d); // true
