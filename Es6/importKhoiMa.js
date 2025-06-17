import {add} from './chiaSeKhoiMa.js';
//Cách đổi tên 
// import {add as cong2So } from './chiaSeKhoiMa.js';
console.log("Kết quả nè: " +  add(5, 6));


//import * as myMathModule from "./math_functions.js";
// Câu lệnh trên importsẽ tạo ra một đối tượng có tên là myMathModule. 
//Đây chỉ là tên biến, bạn có thể đặt tên bất kỳ. 
//Đối tượng sẽ chứa tất cả các mục xuất từ math_functions.js
//​​trong đó, do đó bạn có thể truy cập các hàm như bạn sẽ truy cập 
//bất kỳ thuộc tính đối tượng nào khác. 
//Sau đây là cách bạn có thể sử dụng các hàm add và subtract đã được nhập:
// myMathModule.add(2,3);
// myMathModule.subtract(5,3);