//ES6 cung cấp cho chúng ta cú pháp sugar để k phải viết các hàm ẩn danh theo cách này
//vd
// const myFunc = function() {
//   const myVar = "value";
//   return myVar;
// }
//Thành 
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
//khi hàm k có phần thân và chỉ có gtri trả về
//cú pháp hàm mũi tên cho phép bạn bỏ qua từ khóa return cũng như dấu ngoặc bao quanh mã. 
//Điều này giúp đơn giản hóa các hàm nhỏ hơn thành các câu lệnh một dòng:
///////  const myFunc = () => "value";

//Giống như một hàm thông thường, bạn có thể truyền đối số vào một hàm mũi tên.
const doubler = (item) => item * 2;
doubler(4);
console.log(doubler(4));

//Nếu hàm mũi tên có một tham số duy nhất, có thể bỏ dấu ngoặc đơn bao quanh tham số.
// const doubler = item => item * 2;

//Có thể truyền nhiều hơn một đối số vào một hàm mũi tên.
// const multiplier = (item, multi) => item * multi;
// multiplier(4, 2);
// multiplier(4, 2)sẽ trả về giá trị 8.

//Ví dụ: Viết hàm myConcat nối nội dung của arr2 to arr1 để hàm sử dụng cú pháp hàm mũi tên. myConcat()nên quay lại [1, 2, 3, 4, 5].
// Sử dụng phương thức .concat(): nối 2 mảng vơi nhau
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
}
console.log(myConcat([1, 2], [3, 4, 5]));

//Để giúp chúng ta tạo ra các hàm linh hoạt hơn, ES6 giới thiệu các tham số mặc định cho các hàm.
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
//tham số mặc dịnh sẽ được kích hoạt khi k có đối số chuyền vào


///Tham số rest; giúp bạn có thể tạo các hàm có số lượng đối số thay đổi
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
//linh động hơn trong vc chuyền nhiều tham số

//Toán tử spread: cho phép chúng ta mở rộng mảng và các biểu thức khác ở những nơi cần nhiều tham số hoặc phần tử.
//Mã ES5 bên dưới được sử dụng apply()để tính giá trị lớn nhất trong một mảng:
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus);
//maximussẽ có giá trị là 89.
//Toán tử spread làm cho cú pháp này dễ đọc và bảo trì hơn nhiều.
const arr1 = [6, 999, 3, 45];
const maximus1  = Math.max(...arr1);
console.log(maximus1);

//Vd: Toán tử lan chuyền (...) spread(trải qua từng phần tử), rest(gom lại, chỉ dùng trong định nghĩa tham số) 

const arr2  = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr22;
arr22 = [...arr2 ];// spread trải qua từng pt mảng arr2 gán cho mảng arr22 
console.log(arr22);

// Khi nào dùng gì?
// Spread
// • Khi bạn muốn nối, sao chép, hoặc gộp mảng/object.
// • Khi bạn muốn trải một mảng thành nhiều đối số cho hàm.
// Rest
// • Khi bạn không biết trước sẽ có bao nhiêu đối số được truyền vào hàm, và muốn gom chúng thành mảng để xử lý.

