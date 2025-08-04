//reduce() là một phương thức mạnh mẽ của mảng dùng để "rút gọn" mảng 
// thành một giá trị duy nhất bằng cách lặp qua từng phần tử và tích lũy kết quả.

// array.reduce((accumulator, currentValue, index, array) => {
//   // logic
// }, initialValue);

// Tham số:
// accumulator: Giá trị tích lũy (giá trị trả về sau mỗi vòng lặp).
// currentValue: Giá trị hiện tại trong mảng khi lặp.
// initialValue (tùy chọn): Giá trị khởi đầu cho accumulator. Nếu không truyền thì mặc định là phần tử đầu tiên.


//✅ Ví dụ 1: Tính tổng mảng số
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(total); // 10

//  Giải thích từng bước:
// acc = accumulator (giá trị tích lũy)

// cur = currentValue (phần tử hiện tại)

// 0 = giá trị ban đầu của acc

// Lượt lặp	            acc (tích lũy)	            cur (hiện tại)	            acc + cur
//     1	                        0	                        1	                    1
//     2	                        1	                        2	                    3
//     3	                        3	                        3	                    6
//     4	                        6	                        4	                    10


//✅ Ví dụ 2: Tính tổng giá trong giỏ hàng
const cart = [
  { name: "Táo", price: 100 },
  { name: "Chuối", price: 50 },
  { name: "Xoài", price: 150 }
];

const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice); // 300
//  Giải thích từng bước:
// acc bắt đầu từ 0

// item là từng object trong mảng cart

// Lượt lặp	        acc (tổng tiền)	        item.name	        item.price	    acc + item.price
// 1	                    0	                "Táo"	            100	            100
// 2	                   100	                "Chuối"	             50	            150
// 3	                   150	                "Xoài"	            150	            300

console.log('-----------------------------------');
//Bài 1: tính tổng
const numbers2 = [1, 2, 3, 4, 5];
const totol2 = numbers2.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(totol2);

//Bài 2: Nối chuỗi
const words = ["I", "love", "JS"];
const noiChuoi = words.reduce((acc, curr) => {
  return acc + ' ' + curr;
}, 'hi');
console.log(noiChuoi);

//Bài 3: gộp mảng
const nested = [[1], [2, 3], [4]];
const gopMang = nested.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);
console.log(gopMang);