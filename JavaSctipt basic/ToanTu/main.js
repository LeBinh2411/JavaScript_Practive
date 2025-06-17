//toán tử gán
//tính a1 =3;
var a1 = 1;
//a1 = a1 + 2;
a1 += 2;
console.log(a1);
var a2 = 2;
a2 -= 4;
console.log(a2);
var a3 = 3;
a3 *= 2;
console.log(a3);
var a4 = 5;
a4 /= 2;
console.log(a4);
var a5 = 2;
a5 **=-1;
console.log(a5);


//cong 2 so
const a = 5 + 5
console.log('tổng 2 số 5 là: '  + a);

//tru 2 so
let b = 100 - 55;
console.log('trừ : ' + b);

//nhan 2 so
const c = 3 * 5;
console.log('Nhân : '+ c);

//chia
const d = 66 /2;
console.log(d);

//chia lấy dư
//Kiểm tra chẵn hay lẻ = cách chia cho 2
//Nếu bằng 0 thì là chẵn, còn lại sẽ là phần lẻ
const e = 10 % 5;
console.log('Chia lấy dư: '+ e);

// Toán tử ++ --
//Prefix (Tiền tố) & Postfix(Hậu tố )
//Tiền tố
//Việc 1: +1 cho mumber1, number1 = munber + 1 => number = 7
//Việc 2: Trả về number1 sau khi được + 11
var number1 = 4;
 ++number1;
console.log('number1'+number1);
//Hậu tố
//Việc 1: 'x copy', 'x copy' = 8
//Việc 2: Trừ 1 của x, x = x - 1 => x = 7
//Việc 3: Trả về 'x copy'
var x = 8;
var output = x--;
console.log('output: '+output);
console.log('x: '+x);
//vd: 
var number2 = 6;
var output2 = number2++ + --number2;
console.log(output2);

