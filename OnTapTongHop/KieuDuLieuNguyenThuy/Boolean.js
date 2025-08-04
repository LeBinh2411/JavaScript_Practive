//Kiểu dữ liệu logic sẽ trả về true và false
//chỉ có 7 giá trị được xem là falsy
//      Giá trị	                    Giải thích
//      false	                Kiểu boolean false
//      0	                    Số không (zero)
//      -0	                    Âm zero
//      0n	                    BigInt zero
//      ""	                    Chuỗi rỗng
//      null	                    Không có giá trị
//      undefined	            Không được định nghĩa
//      NaN	                    Not-a-Number

//Các giá trị còn lại đều là true

// Bài 1: Kiểm tra số chẵn

function isEven(number){
    if((number % 2) == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(4));  // true
console.log(isEven(7));  // false

console.log('-------------------------------------------------')
// Bài 2: Kiểm tra người dùng đã đăng nhập chưa
function checkLogin(isLoggedIn){
if(isLoggedIn == false){
    return 'Vui lòng đăng nhập.';
}else{
    return 'Chào mừng quay lại.';
}
}
console.log(checkLogin(false)); 
console.log(checkLogin(true));

console.log('-------------------------------------------------')
//Bài 3: Chuyển đổi các giá trị thành Boolean
function toBoolean(value){
    return Boolean(value);
}
console.log(toBoolean(0));        // false
console.log(toBoolean("hello"));  // true
console.log(toBoolean(""));       // false
console.log(toBoolean(undefined));// false

console.log('-------------------------------------------------')
//Bài 4: So sánh logic
function canAccess(premiumUser, hasPassword){
    if(premiumUser == true && hasPassword == true){
        return true;
    }else{
        return false;
    }
}
console.log(canAccess(true, true));   // true
console.log(canAccess(true, false)); 


console.log('-------------------------------------------------')
//Bài 5: Luyện ! phủ định 

function isEmpty(str){
    return Boolean( ! str);
}
console.log(isEmpty(""));         // true
console.log(isEmpty("   "));      // true
console.log(isEmpty("hello"));    // false