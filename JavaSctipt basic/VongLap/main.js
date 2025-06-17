//Vòng lặp while, sẽ kiểm tra điều kiện đầu tiênn
const ourArray = [];
let i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}
//Trong ví dụ mã ở trên, while vòng lặp sẽ thực thi 5 lần và thêm các số từ 0 đến 4 vào ourArray.
const myArray = [];
  let a = 5;
  while(a>= 0){
    myArray.push(a);
    a--;
  }
  //myArray bằng [5, 4, 3, 2, 1, 0].

const ourArray2  = [];

//for (a; b; c), trong đó a là câu lệnh khởi tạo, b là câu lệnh điều kiện và c là biểu thức cuối cùng.
//Trong ví dụ sau, chúng ta khởi tạo với i = 0và lặp lại trong khi điều kiện của chúng ta i < 5là đúng. 
// Chúng ta sẽ tăng itheo 1trong mỗi lần lặp với i++như là biểu thức cuối cùng của chúng ta.
for (let i = 0; i < 5; i++) {
  ourArray2.push(i);
}
//ourArray2 bây giờ sẽ có giá trị [0, 1, 2, 3, 4].


const ourArray3  = [];
for (let i = 0; i < 10; i += 2) {
  ourArray3.push(i);
}
//Chúng ta sẽ bắt đầu tại i = 0 và lặp while i < 10.
// Chúng ta sẽ tăng thêm i 2 cho mỗi vòng lặp với i += 2.
//ourArray3 bây giờ sẽ chứa [0, 2, 4, 6, 8]

//------
//Một tác vụ phổ biến trong JavaScript là lặp qua nội dung của một mảng. 
// Một cách để thực hiện điều đó là sử dụng forvòng lặp. Mã này sẽ xuất từng phần tử của mảng arrra console:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
//Hãy nhớ rằng mảng có chỉ mục bắt đầu từ số không, nghĩa là chỉ mục cuối cùng của mảng là length - 1. 
//Điều kiện của chúng ta cho vòng lặp này là i < arr.length, điều này dừng vòng lặp khi ibằng length. 
//Trong trường hợp này, lần lặp cuối cùng là i === 4ie khi ibằng arr.length - 1và xuất 6ra bảng điều khiển. 
//Sau đó ităng lên 5, và vòng lặp kết thúc vì i < arr.lengthlà false.

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(let a =0; a< myArr.length; a++){
  total += myArr[a];
}
console.log(total);
//total phải được khai báo và khởi tạo bằng 0.
//total phải bằng 20.
//Bạn nên sử dụng vòng for lặp để lặp qua myArr.

//-----
const arr2  = [
  [1, 2], [3, 4], [5, 6]
];
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    console.log(arr[i][j]);
  }
}
//Điều này sẽ xuất ra từng phần tử con arrmột. Lưu ý rằng đối với vòng lặp bên trong, 
//chúng ta đang kiểm tra .length, arr[i]vì arr[i]bản thân nó là một mảng.

///-----------
//Sửa đổi hàm multiplyAllđể trả về tích của tất cả các số trong mảng con của arr.
function multiplyAll(arr) {
  let product = 1;
  for(let a = 0; a < arr.length; a++){
    for(let b = 0; b < arr[a].length; b++){
      product *= arr[a][b];
    } 
  }
  return product;
}
// vòng lặp do {...} while(): là vòng lặp luôn thực hiện ít nhất 1 lần, sau đó mới kiểm tra điều kiện lặp lại
const ourArray4  = []; 
let i2  = 5;
do {
  ourArray4.push(i2);
  i2++;
} while (i2  < 5);
// ourArray4 = [5];
const myArray5 = [];
let i3 = 10;

// Only change code below this line
do{
    myArray5.push(i3);
    i3++;
} while(i3 < 11);
//myArray5 phải bằng [10].
//i3 nên bằng11

////-----
//Đệ quy (recursion) là một kỹ thuật trong lập trình mà một hàm tự gọi lại chính nó để giải quyết một bài toán.
//Một hàm đệ quy là hàm:
//Gọi lại chính nó trong phần thân hàm.
//Có điều kiện dừng (base case) để tránh gọi vô hạn.
//Cách làm đệ quy 1: xác định điểm dừng; 2: logic
function giaiThua(num){
  var output = 1;
  for(var a = num; a > 0; a--){
    output = output * i;
  }
  return output;
}
console.log(giaiThua(3))
//output = 1 * 3;
//output = 3 * 2;
//output = 6 * 1;
/// Dùng đệ quy
function giaiThua2(numb){
  if(numb > 0){
    return numb * giaiThua2(numb -1 );
  }
  return 1;
}
console.log(giaiThua2(3))
// giaiThua2(3)
// = 3 * giaiThua2(2)
// = 3 * (2 * giaiThua2(1))
// = 3 * (2 * (1 * giaiThua2(0)))
// = 3 * (2 * (1 * 1)) // vì giaiThua2(0) trả về 1
// = 3 * 2 * 1 = 6
//-------------

//Hàm Math.random nó trả về một số thập phân ngẫu nhiên trong khoảng từ 0 đến 1(k thể = 0, k thể = 1)
//Hàm Math.floor()để làm tròn số này xuống số nguyên gần nhất.
//Sử dụng kỹ thuật này để tạo và trả về một số nguyên ngẫu nhiên trong phạm vi từ 0đến 9.
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

//Nhân với (max - min + 1) để mở rộng phạm vi lên số lượng giá trị nguyên có thể lấy từ min đến max.
//+ min
//Dịch kết quả về đúng khoảng mong muốn (bắt đầu từ min thay vì 0).
// Tạo số nguyên từ 3 đến 7
function randomRange(Min, Max) {
  return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}
Math.floor(Math.random() * (7 - 3 + 1)) + 3
// Tức là: Math.floor(Math.random() * 5) + 3

///Hàm này parseInt()phân tích một chuỗi và trả về một số nguyên(ép kiểu)
//parseInt("123")         // 👉 123 (số nguyên)
//parseInt("123.45")      // 👉 123 (bỏ phần thập phân)
//parseInt("abc123")      // 👉 NaN (vì không bắt đầu bằng số)
//parseInt("123abc")      // 👉 123 (lấy đến khi gặp ký tự không phải số)
//
//NaN là viết tắt của "Not-a-Number" — tức là không phải là một số.
//parseInt("abc");           // 👉 NaN (vì "abc" không có số để ép kiểu)
//Number(undefined);         // 👉 NaN
//Math.sqrt(-1);             // 👉 NaN (không căn bậc hai được số âm trong JS thường)
//"hello" * 3;               // 👉 NaN (vì không thể nhân chuỗi với số)

//radix là hệ cơ số – tức là cơ sở để đọc và hiểu một chuỗi số.
//JavaScript dùng radix làm tham số thứ hai trong parseInt() để biết chuỗi đang thuộc hệ gì.
//parseInt("10011", 2);  // 👉 19 (vì đây là số nhị phân)
//parseInt("20", 8);     // 👉 16 (20 trong hệ bát phân = 16 thập phân)
//parseInt("1A", 16);    // 👉 26 (1A hệ 16 = 26 thập phân)
//parseInt("42", 10);    // 👉 42 (bình thường)

//Toán tử điều kiện hay còn gọi là toán tử 3 ngôi
//Cú pháp là a ? b : c, 
//trong đó a là điều kiện, b là mã để chạy khi điều kiện trả về true
// và c là mã để chạy khi điều kiện trả về false.

//Sử dụng toán tử điều kiện trong checkEqual hàm để kiểm tra xem hai số có bằng nhau hay không. 
//Hàm sẽ trả về chuỗi Equalhoặc chuỗi Not Equal.
// Sử dụng toán tử điều kiện trong checkEqualhàm để kiểm tra xem hai số có bằng nhau hay không.
//  Hàm sẽ trả về chuỗi Equalhoặc chuỗi Not Equal.
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
//Toán tử có điều kiện cũng ktra đc nhiều điều kiện
//vd kiểm tra 1 sô là âm,, hay dương hayyy = 0
function checkSign(num) {
  return (num > 0) ? "positive"
        : (num ===  0) ? "zero"
        : "negative";
}
checkSign(10);

//vd ham de qquyyy
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(3));
//countup(3)
//→ const countArray = countup(2)
//→ countup(2)
   //→ const countArray = countup(1)
   //→ countup(1)
     //→ const countArray = countup(0) => []
     //→ push(1) => [1]
   //→ push(2) => [1, 2]
//→ push(3) => [1, 2, 3]
//Vậy countArray ở mỗi bước giữ mảng hiện tại, rồi push(n) vào cuối mảng đó, rồi trả về mảng mới.
