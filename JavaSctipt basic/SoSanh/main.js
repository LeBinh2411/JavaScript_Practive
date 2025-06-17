// Kiểu dữ liệu boolean chỉ trả về dữ liệu true hoặc false
// Toán tử so sánh lỏng lẻo: ==, javaScript sẽ tự động ép kiểu rồi so sánh
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  testEqual(10);
///Toán tử nghiêm ngặt: ===, nó sẽ so sánh cả kiểu dữ liệu lẫn giá trị
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  testStrict(10);

// Toán tử bất đẳng thức: !=, tự chuyển đổi kiểu dữ liệu trong lúc so sánh
// k bằng nhau là true, bằng nhau là false
// Toán tử bất đẳng thức nghiêm ngặt: !==

//Toán tử so sánh: >, >=, <, <=
//nếu số bên trái lớn hơn bên phải true, còn lại false
//Toán tử và và &&: cả 2 vế đều phải đúng --> true, còn lại false
if (num > 5) {
    if (num < 10) {
      return "Yes";
    }
  }
  return "No";
//Mã này sẽ trả về Yesnếu numlớn hơn 5và nhỏ hơn 10. 
// Logic tương tự có thể được viết bằng toán tử logic and .
if (num > 5 && num < 10) {
    return "Yes";
  }
  return "No";
//Toán tử hoặc: ||, Chấp nhận 1 trong 2 --> true, k đạt 1 trong 2 false
if (num > 10) {
    return "No";
  }
  if (num < 5) {
    return "No";
  }
  return "Yes";
//Mã này sẽ trả về Yes nếu numnằm giữa 5và 10( 5 và 10 được bao gồm).
//Logic tương tự có thể được viết bằng toán tử logic or .
if (num > 10 || num < 5) {
    return "No";
  }
  return "Yes";

///Golf, par: số lần được thực hiện cú đánh vào lỗ, 
// strokes: số lần dánh của người chơi
function golfScore(par, strokes) {
    if (strokes === 1) {
      return "Hole-in-one!";  // Nếu bạn hoàn thành trong 1 gậy
    } else if (strokes <= par - 2) {  // Nếu strokes ít hơn 2 gậy so với par, thì là "Eagle"
      return "Eagle";  
    } else if (strokes === par - 1) {  // Nếu strokes ít hơn 1 gậy so với par, thì là "Birdie"
      return "Birdie";
    } else if (strokes === par) {  // Nếu strokes bằng par, thì là "Par"
      return "Par";
    } else if (strokes === par + 1) {  // Nếu strokes nhiều hơn 1 gậy so với par, thì là "Bogey"
      return "Bogey";
    } else if (strokes === par + 2) {  // Nếu strokes nhiều hơn 2 gậy so với par, thì là "Double Bogey"
      return "Double Bogey";
    } else {
      return "Go Home!";  // Nếu strokes vượt quá 3 gậy so với par, thì là "Go Home!"
    }
  }
//Waiting:1. golfScore(4, 1) should return the string Hole-in-one!
// Waiting:2. golfScore(4, 2) should return the string Eagle
// Waiting:3. golfScore(5, 2) should return the string Eagle
// Waiting:4. golfScore(4, 3) should return the string Birdie
// Waiting:5. golfScore(4, 4) should return the string Par
// Waiting:6. golfScore(1, 1) should return the string Hole-in-one!
// Waiting:7. golfScore(5, 5) should return the string Par
// Waiting:8. golfScore(4, 5) should return the string Bogey
// Waiting:9. golfScore(4, 6) should return the string Double Bogey
// Waiting:10. golfScore(4, 7) should return the string Go Home!
// Waiting:11. golfScore(5, 9) should return the string Go Home!

//Câu lệnh switch - case: Là 1 cấu trúc điều kiện được dùng để thay thế 
//cho nhiều cấu lệnh if else. Switch giúp code gọn gàng khi cần so sánh 1 biến 
//với nhiều giá trị cụ thể, trong switch được kiểm tra bằng toán tử nghiêm ngặt
//Viết câu lệnh chuyển đổi để kiểm tra valvà thiết lập answercác điều kiện sau:
// 1- alpha
// 2- beta
// 3- gamma
// 4-delta
function caseInSwitch(val) {
    let answer = "";
    switch (val){
      case 1:
      answer = "alpha";
      break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;  
    }
    // Only change code above this line
    return answer;
  } 
  caseInSwitch(1);

