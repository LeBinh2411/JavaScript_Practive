//Tạo 1 mảng = [];
const demo =[1,"2",3,4,5];
console.log(demo);
//lồng mảng
const demo2 = [["Binh", 23], ["Haha", 11]];
console.log(demo2);
//Cách lấy dữ liệu trong mảng giống chuỗi 
const array = [50, 60, 70];
console.log(array[0]);
///Mảng đa chiều
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  const a = arr[3];
  const b = arr[3][0];
  const c = arr[3][0][1];
  //Trong ví dụ này, a giá trị [[10, 11, 12], 13, 14], 
  // bb có giá trị [10, 11, 12], 
  // và c có giá trị 11.

//Thêm dữ liệu vào cuối mảng .push();
const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
//arr1bây giờ có giá trị [1, 2, 3, 4, 5]
//và arr2có giá trị ["Stimpson", "J", "cat", ["happy", "joy"]].

//Đẩy dữ liệu cuối cùngcùng ra khỏi mảng - xóa phần tử cuối cùng: .pop()
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//Cái đầu tiên console.logsẽ hiển thị giá trị 6, 
//cái thứ hai sẽ hiển thị giá trị [1, 4].

//Xóa phần tử đầu tiên: .shift()
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
//removedFromOurArraysẽ có giá trị là 
// chuỗi Stimpsonvà ourArraysẽ có ["J", ["cat"]].

//Thêm phần tử vào đầu mảng: .unshift();
const ourArray2 = ["Stimpson", "J", "cat"];
ourArray2.shift();
ourArray2.unshift("Happy");
//Sau dấu shift, ourArraysẽ có giá trị ["J", "cat"]. 
//Sau dấu unshift, ourArraysẽ có giá trị ["Happy", "J", "cat"].