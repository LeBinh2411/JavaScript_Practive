// map là gì?
//map() là một phương thức của mảng trong JavaScript dùng để 
// duyệt qua từng phần tử trong mảng và tạo ra một mảng mới 
// bằng cách biến đổi từng phần tử thông qua một hàm.

// const newArray = array.map(function(element, index, array) {
//    return giá trị mới tại mỗi vị trí
// });
// ====> Biến đổi các phần tử

// Tham số:
// element: giá trị hiện tại đang được xử lý
// index (tùy chọn): chỉ số của phần tử
// array (tùy chọn): mảng gốc

//VD1: Dùng 1 tham số element
const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log(squared); // 👉 [1, 4, 9]

const hi =[
  {
  "ten": "Bình",
  "tuoi": "22",
  "sdt": "09726798924"
  },
  {
  "ten": "Dương",
  "tuoi": "24",
  "sdt": "08826798924"
  },
  {
    "ten": "Chiến",
  "tuoi": "20",
  "sdt": "09726228924"
  }
];
const getTenTuoi = hi.map(gtriHienTai => ({
  name: gtriHienTai.ten,
  age: gtriHienTai.tuoi
}));
console.log(getTenTuoi);

//  Giải thích:
// num là giá trị tại mỗi phần tử trong mảng numbers
// Mỗi lần duyệt qua, num * num sẽ tính bình phương
// Trả về một mảng mới chứa bình phương các giá trị

//VD2: Dùng 2 tham số element, index
const fruits = ["Táo", "Cam", "Xoài"];
const withIndex = fruits.map((fruit, index) => {
  return `${index + 1}. ${fruit}`;
});
console.log(withIndex);
// 👉 ["1. Táo", "2. Cam", "3. Xoài"]

// Giải thích:
// fruit là tên từng loại quả
// index là vị trí trong mảng (bắt đầu từ 0)
// index + 1 chỉ là để hiển thị, còn phần tử thì vẫn lấy bắt đầu từ không

//VD3: Dùng 3 tham số: element, index, array
const scores = [10, 20, 30];
const total = scores.reduce((a, b) => a + b, 0); // chỉ tính 1 lần

const result = scores.map((score, index) => {
  return `Phần tử ${index}: ${score} / Tổng: ${total}`;
});
