//BigInt là kiểu dữ liệu cho phép làm việc với các số nguyên rất lớn mà kiểu Number không thể biểu diễn chính xác
//Có 2 cách để tạo BigInt đó là thêm "n" vào cuối hoặc dùng hàm BigInt()
//Lưu ý:
//- không thể trộn BigInt với Number trong phép toán
// Khi chia /, kết quả luôn là số nguyên (không làm tròn kiểu số thực):
// console.log(5n / 2n); // 👉 2n (không phải 2.5)

//Bài 1: Tính giai thừa lớn với BigInt
function tinhGiaiThuaBigInt(n){
    let ketQua = 1n; //Thêm "n" để tạo BigInt
    for(let i = 2n; i <= BigInt(n); i++){
        ketQua *= i;
    }
    return ketQua;
}
console.log(tinhGiaiThuaBigInt(5));
console.log('------------------------------------------------');
//Bài 2: So sánh số lớn 

function soSanhSoLon(aStr, bStr){
    const a = BigInt(aStr);
    const b = BigInt(bStr);

    if(a > b){
        console.log(`${a} lớn hơn ${b}`);
    } else if(a < b){
        console.log(`${b} lớn hơn ${a}`);
    }else{
        console.log(`${a} bằng ${b}`);
    }
}
soSanhSoLon("123456789123456789123456789", "987654321987654321987654321");
console.log('------------------------------------------------');



