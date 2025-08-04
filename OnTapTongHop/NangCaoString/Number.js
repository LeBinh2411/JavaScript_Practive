//Làm trong số
//Math.floor: làm tròn xuống
//Math.ceil: làm tròn lên
//Math.round: làm tròn số gần nhất
function lamTronSo(n){
    return `
        Floor: ${Math.floor(n)}\n
        Ceil: ${Math.ceil(n)}\n
        Round: ${Math.round(n)}
    `;
}
console.log(lamTronSo(4.6));
console.log('----------------------------------2------------------------------------');

///Bài 2: Viết hàm lấy số ngẫu nhiên nhỏ nhất và lớn nhất
function soNgauNhien(min, max){

    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}
console.log(soNgauNhien(5.6, 9.8));
console.log('----------------------------------2------------------------------------');


// Bài 3: Tính lũy thừa
function muSo(a,b){
    return Math.pow(a,b);
}
console.log(muSo(4,5));


// Bài 4: Tính căn bậc 2
function canBacHai(n){
    return Math.sqrt(n);
}
console.log(canBacHai(9));

//Bài 5: Tìm số lớn nhất, nhỏ nhất
function timMaxMin(...args){
    const max = Math.max(...args);
    const min = Math.min(...args);
    console.log('Số lớn nhất: ', max);
    console.log('Số nhỏ nhất: ', min);
}
timMaxMin(1,4,7,9,-9,-4,3,22,55,-44);

//Bài 6: làm tròn với số chữ số sau dấu phẩy
function lamTron(n, soChuSo) {
    return parseFloat(n.toFixed(soChuSo));
}
console.log(lamTron(3.141592, 2));
console.log(lamTron(1.9999, 3));