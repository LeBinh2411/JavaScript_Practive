//slice() là một phương thức dùng để sao chép một phần của mảng hoặc chuỗi, 
// mà không làm thay đổi giá trị ban đầu.

const arr = [10, 20, 30, 40, 50];
const newArr = arr.slice(1, 4); // Lấy phần tử từ index 1 đến 3
console.log(newArr); // [20, 30, 40]
console.log(arr);    // [10, 20, 30, 40, 50] (Không bị thay đổi)