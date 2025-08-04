//.endsWith() là một phương thức trong JavaScript dùng để kiểm tra xem chuỗi có kết thúc bằng một chuỗi con cụ thể hay không.

// function confirmEnding(str, target) {
//   let a = str.endsWith(target);
//   return a;
// }
// console.log(confirmEnding('Bastian', 'n'));

function confirmEnding(str, target) {
  let a = str.slice(-target.length) === target;
  return a;
}
console.log(confirmEnding('Bastian', 'n'));

// Ý nghĩa của dấu - trong .slice(-target.length)
// Trong JavaScript, hàm .slice(start, end) dùng để cắt chuỗi từ vị trí start đến end (không bao gồm end).
// Nếu start là số dương, nó tính từ đầu chuỗi (vị trí 0).
// Nếu start là số âm, nó tính từ cuối chuỗi (vị trí -1 là ký tự cuối cùng).