//Trong javaScript chuỗi đc viết bằng ngoặc đơn hoặc kép đều đcđc
// escape '\' ký tự đặc biệt trong chuỗi "\"\""
//escape “Ê! Ký tự ngay sau tao không phải kết thúc chuỗi đâu — mà là ký tự đặc biệt cần giữ lại!”
const myStr = "Xin chào \"Tôi là người máy\" bạn cần giúp gì.";
console.log(myStr);
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
console.log(goodStr);
//Nối chuỗi bằng toán tử
var hi ="xin chào."+" Tôi là Bình.";
console.log(hi);
var myName = "Hi chào bạn.";
myName += " Tôi là Bình.";
console.log(myName);
const myName1 = myName + " Bạn đi đâu vậy.";
console.log(myName1);

///Cách đếm độ dài 1 chuỗi(Tính cả khoẳng trắng) dùng .length
//lastNameLengthphải bằng tám.
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);
//Cách lấy 1 ký tự trong chuỗi
//firstLetterOfLastName biến phải bằng L
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";
firstLetterOfLastName = lastName1[0];
console.log(firstLetterOfLastName);
//Thay đổi giá trị biến
let myStr1 = "Jello World";
myStr1 = "Hello World"; 

//Cách lấy ký tự cuối cùng trong chuỗi .length - 1
//lastLetterOfLastName = e
const lastName3 = "Lovelace";
const lastLetterOfLastName = lastName3[lastName3.length - 1];
console.log(lastLetterOfLastName);
//lấy ky tự thứ 3 từ cuối = aa
const lastLetterOfLastName2 = lastName3[lastName3.length - 3];
console.log(lastLetterOfLastName2);
