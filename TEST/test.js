
// function testLetConst() {
//   if (true) {
//     let a = 30;
//     let b = 50;
//     const c = 20;
//     const d = 40;
//     console.log(a); // 👉 30 (dùng được vì trong block scope {} )
//     console.log(c); // 👉 20 (dùng được vì trong block scope {} )
//   }
//   console.log(b); // ❌ Lỗi (ngoài phạm vi của block scope {})
//   console.log(d); // ❌ Lỗi (ngoài phạm vi của block scope {})
// }
// testLetConst();


// // console.log(b);
// // var b = 10;

// // console.log(5 === "5")

// function testVarScope() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x); // 👉 10 (vẫn dùng được ngoài if vì var là function scope)
// }
// testVarScope();



// console.log(a); // 👉 undefined
// var a = 10;
// // javaScript sẽ kéo khai báo biến lên và tự khởi tạo
// // var a;  =>  khai báo được "kéo lên"
// // console.log(a); undefined
// // a = 10;        // gán giá trị sau

// console.log(x); // ❌ Lỗi
// let x = 5;
// // let x; =>  javaScript sẽ kéo khai báo biến lên nhưng không khởi tạo => lỗi
// // console.log(x); // ❌ Lỗi do không truy cập đc
// // x = 5;

// let a = 10;
// console.log(typeof a);

// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);


// let user = {
//   name: "Binh",
//   age: 22,
//   isAdmin: true
// };
// console.log(user.name); // 👉 "Binh"
// console.log(user["age"]); // 

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let newArr = [...arr]
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  const index = arr.indexOf(bookName);
  if (index >= 0) {

      return [...arr.slice(0, index), ...arr.slice(index + 1)];
    // Change code above this line
    }
    return [...arr];
}
