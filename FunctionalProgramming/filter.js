//filter là gì?
//Phương thức .filter() trong JavaScript dùng để lọc các phần tử 
// thỏa mãn điều kiện trong mảng, và trả về một mảng mới chứa các phần tử đó.

// Cú pháp:
// array.filter((element, index, array) => {
//   return điều_kiện;
// });
//======> Giữ lại phần tử thỏa điều kiện

// Tham số	                        Ý nghĩa
// element	                Phần tử hiện tại đang được xét
// index (tùy chọn)	            Vị trí trong mảng
// array (tùy chọn)	                Mảng gốc

//Ví dụ 1: Lọc số chẵn
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // 👉 [2, 4, 6]

//Ví dụ 2: Lọc người >= 22 tuổi
const people = [
  { name: "Bình", age: 22 },
  { name: "Chiến", age: 20 },
  { name: "Dương", age: 24 }
];

const adults = people.filter(p => p.age >= 22);
console.log(adults);


//Ví dụ kết hợp .map và .filter()
const scores = [5, 7, 9, 4, 8];
const passedNames = scores
  .filter(s => s >= 6)
  .map(s => `Đạt ${s} điểm`);

console.log(passedNames); // 👉 [ 'Đạt 7 điểm', 'Đạt 9 điểm', 'Đạt 8 điểm' ]