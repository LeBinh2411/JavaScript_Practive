/*Array là một kiểu dữ liệu tham chiếu dùng để chứa nhiều các giá trị
mỗi giá trị trong mảng được gọi là 1 phần tử và được truy cập thông qua
một chỉ số index và index sẽ được tính bắt đầu từ số 0*/

//Bài 1: Tạo mảng, thêm phần tử vào đầu và cuối mảng, xóa phần tử cuối cùng

const traiCay = ['apple', 'banana', 'orange'];
traiCay.push('hi');
traiCay.pop();
traiCay.unshift('ha');
traiCay.shift();
console.log(traiCay);
console.log('---------------------------------------------');

//Bài 2: Tạo một mảng, dùng vòng for để in từng pt
// tính tổng các pt trong mảng
//kiểm tra xem có 5 trong mảng hay k

const numbers = [1,3,5,7,9];
let a = 0;
let hasFive = false;
for(let i =0; i < numbers.length; i++){
    console.log(numbers[i]);
    a += numbers[i];

    if(numbers[i] === 5){
        hasFive = true;
    }
}
console.log('Tổng là: ', a);
console.log('Có chứa số 5 hay không ? ', hasFive);
console.log('---------------------------------------------');


//Bài 3: Lọc ra các điểm >= 5
// Tăng mỗi điểm lên 1 đơn vị
// Tính điểm trung bình

const scores = [4, 7, 10, 3, 8];
let total =0;
for(let i =0; i< scores.length; i++){
    if(scores[i] >=5 ){
        console.log('Điểm lớn hơn hoặc = 5' ,scores[i]);
    }
    const tang = scores[i] + 1;
    total += tang;
    console.log('Sau khi tăng thêm 1:' ,tang);
}
const avg = total / scores.length;
console.log('Điểm trung bình là: ', avg);
console.log('----------------------------------------------');

//Bài 4: Tìm vị trí của "Nam"
// Xóa phần tử "Huy"
// Thêm "Linh" vào sau "Bình"

const names = ["An", "Bình", "Nam", "Huy", "Trang"];
const ptNam = names.indexOf('Nam');
console.log(ptNam);
const indexHuy = names.indexOf('Huy');
if(indexHuy !== -1){
    names.splice(indexHuy, 1); //tại vị trí indexHuy muốn xóa bn phần tử
}

const indexBinh = names.indexOf('Bình');
/*Cú pháp .splice(start, deleteCount, item1):
start: vị trí bắt đầu.
deleteCount: số phần tử muốn xóa từ vị trí đó (ở đây là 0 – nghĩa là không xóa gì cả).
item1: phần tử bạn muốn chèn vào.
*/
if(indexBinh !== -1){
    names.splice(indexBinh + 1, 0, 'Linh'); 
}
console.log('Mảng sau khi xử lý: ', names);

console.log('----------------------------------------------');
//Bài 5: Lọc ra các sản phẩm có giá > 100
// Tăng tất cả giá lên 10%
// Tính tổng giá trị của tất cả sản phẩm sau khi tăng

const prices = [100, 250, 80, 300, 150];
let test =[];
let mangTang = [];

for(let i = 0; i< prices.length; i++ ){
    if(prices[i] > 100){
        test.push(prices[i]);
    }
    const newPrice = prices[i] *  1.1;
    mangTang.push(newPrice);

}
let hi = 0;
for(let i =0; i < mangTang.length; i++){
    hi += mangTang[i];
}

console.log('Mảng > 100', test);
console.log('Mảng sau khi tăng: ', mangTang );
console.log('Sau khi tính tổng: ', hi);