function titleCase(str) {
  return str
    .toLowerCase()                        // Bước 1: chuyển về chữ thường
    .split(" ")                           // Bước 2: tách chuỗi thành mảng từ
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Bước 3 word.charAt(0) lấy pt đầu tiên, word.slice(1) lấy tất cả pt còn lại bắt đầu từ 1
    .join(" ");                           // Bước 4: gộp lại thành chuỗi
}

console.log(titleCase("I'm a little tea pot")); 


// Bạn được cung cấp 2 mảng và 1 chỉ số n.
// Bạn cần chèn toàn bộ phần tử của mảng thứ nhất vào mảng thứ hai, 
// bắt đầu từ vị trí chỉ số n.
function frankenSplice(arr1, arr2, n) {
  let result = [...arr2.slice(0,n), ...arr1, ...arr2.slice(n)];
  return result;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// Sắp xếp tăng dần	arr.sort((a, b) => a - b)
// Sắp xếp giảm dần	arr.sort((a, b) => b - a)
function getIndexToIns(arr, num) {

  arr.sort((a,b) => a - b);

  return arr.filter(item => item < num).length;
}
console.log(getIndexToIns([40, 60], 50));