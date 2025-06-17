// var (Function Block - phạm vi hàm): tồn tại trong tất cả block(khối code) miễn trong function(hàm)
// let && const (Block scope - phạm vi khối): chỉ tồn tại trong khối code đó({.....})
console.log('..........hi.........');
///khu gọi hàm để chạy

checkScope();
///---------
function checkScope() {
  let i = 'function scope';
  if (true) {
  let  i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
//Bạn có thể khai báo 2 biến let trùng tên miễn là chúng nằm trong các block khác nhau.
//Mỗi biến let có phạm vi riêng (block scope), không bị lẫn lộn hay ghi đè nhau.

// s phải bằng [2, 5, 7].
const s = [5, 7, 2];
function editInPlace() {
  const a = s.pop();// xóa pt cuối gán cho aa
  s.unshift(a);//thêm vào đầu mảng ss
  console.log('Mảng s sau khi edit: ', s);
}
editInPlace();

/// Hàm Object.freeze : Giúp chạy ở chế độ nghiêm ngặt
//Vd dưới đây đối tượng MATH_CONSTANTS() sẽ k thể bị thay đổi dữ liệu hay làm j khác, 
// ngoài vc sử dụng thuộc tính theo mặc định
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

