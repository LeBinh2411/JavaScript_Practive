// function - Hàm
function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction();
// Tham số là các biến, đóng vai trò gigiữ chỗ cho các giatri
// sẽ được nhập vào 1 hàm, khi hàm đó được gọi
function testFun(thamSo1, thamSo2) {
    console.log(thamSo1, thamSo2);
  }
//Sau đó, chúng ta có thể gọi testFunnhư thế này: 
// testFun("Hello", "World");. 
// Chúng ta đã truyền hai đối số chuỗi Hello và World. 
// Bên trong hàm, thamSo1 sẽ bằng chuỗi Hell ovà thamSo2
// sẽ bằng chuỗi World. Lưu ý rằng bạn có thể gọi testFun lại 
// với các đối số khác nhau và các tham số sẽ lấy giá trị của các đối số mới

function plusThree(num) {
    return num + 3;
}
  const answer = plusThree(5);
//answercó giá trị 8.
//plusThreelấy một đối số cho numvà trả về một giá trị bằng num + 3.

//Global : biến toàn cục
//Biến cục bộ
// sẽ có trường hợp có các biến toàn cục và cục bộ trùng nhau -> ưu tiên biến cục bộ hơn

// processed nên có giá trị là 2
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

//hàng đợi
// Trước khi xóa đã lưu giá trị và để trả vềvề
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
  }

  let testArr = [1, 2, 3, 4, 5];
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));
 let test = nextInLine([], 5);
 let test2 = nextInLine([2], 1);
 let test3 = nextInLine([5,6,7,8,9], 1);
console.log(test);
console.log(test2);
console.log(test3);

