//Bài 1: map
//tạo mảng mới,sẽ duyệt qua từng pt trong mảng
const mangSo = [1,2,3,4,5];
let mangSoo = [];
mangSo.map(w =>{
    mangSoo.push(w * 2);
})
console.log(mangSoo);

//Bài 2: 
const mangTen = ['An','Bình','Châu']
let mangTenn = [];
mangTen.map(pt =>{
    mangTenn.push('Hello, '+ pt);
})
console.log(mangTenn);

//Bài tập với filter
//filter tạo mảng mới duyệt qua từng pt và trả về mảng mới những dữ liệu thỏa mãn điều kiện

//Bài 1: lọc các số chẫn trong mảng

const mangFilter = [1, 4, 5, 6, 7, 8];
const evenNumbers = mangFilter.filter((item) => {
   return item % 2 ===0
});
console.log(evenNumbers);

//Bài 2: lọc ra các từ bắt đầu bằng chữ "a".
const locManga = ["apple", "banana", "cherry", "avocado"];
