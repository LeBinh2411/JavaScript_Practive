//number là kiểu dữ liệu nguyên thủy dùng để biểu diễn các giá trị bao gồm số nguyên và số thực,Các giá trị đặc biệt như: Infinity, -Infinity, NaN
let a = 10; //số nguyên
let b = 3.24 //số thực

//Infinity: vô cực khi chia cho 0 hoặc vượt giới hạn, 10 / 0 => Infinity
//-Infinity: âm vô cực, -10 / 0 => -Infinity
//NaN: Not-a-Number(không phải là số hợp lệ) "abc" * 2 => NaN

//Bài tập
//Chuyển đổi chuỗi thành số
let str = "123.45";
console.log('Sau khi chuyển chuỗi thành số: '+Number(str));

//Làm tròn số đến 3 chữ số thập phân kết quả dạng chuỗi
let pi = 3.141592653;
console.log('Kết quả dạng chuỗi là :', typeof pi.toFixed(3));
console.log('Kết quả dạng chuỗi là :', pi.toFixed(3));

//Làm tròn 4 chữ số và chuyển lại thành số thực
console.log('Làm tròn và chuyển thành số nguyên: '+ Number(pi.toFixed(4)));
console.log(typeof Number(pi.toFixed(4)));

//Kiểm tra giá trị có phải là số không
let value1 = "abc";
console.log(typeof value1);
let value2 = 100;
console.log(typeof value2);

console.log('------------------------------------------------');
//Tìm số lớn nhất có thể biểu diễn
console.log(Number.MAX_SAFE_INTEGER);

//Kiểm tra chia cho 0
console.log(10 / 0);

//Làm tròn khi tính số thực
// Tính 0.1 + 0.2 và so sánh kết quả với 0.3 (bằng ===)
// Sau đó làm tròn 2 chữ số và so sánh lại
let tinhSo = 0.1 + 0.2
console.log(tinhSo === 0.3);
console.log(Number(tinhSo.toFixed(2)) === Number(0.3.toFixed(2)));

console.log('------------------------------------------------');
//Chuyển đổi số thành chuỗi
let num = 500;
console.log(num.toString());
console.log(typeof num.toString());

console.log('------------------------------------------------');
//Phân tích parseInt và parseFloat
//cách hoạt động của 2 phương thức này đọc từ trái qua phải nếu đến ký tự không phải số lập tức dừng lại
let mixed = "123abc";
console.log(parseInt(mixed));
console.log(parseFloat(mixed));

//Tạo và xử lý số mảng chuỗi
let values = ["10.5", "20.2", "30.1"];
// Chuyển tất cả phần tử thành số thực rồi tính tổng
//.map() là một hàm của mảng, dùng để duyệt từng phần tử và trả về mảng mới, trong đó mỗi phần tử được chuyển đổi theo hàm bạn cung cấp.
//.reduce() dùng để gộp toàn bộ phần tử trong mảng thành 1 giá trị duy nhất (ở đây là tổng).
//sum: giá trị đang được cộng dồn.
//current: phần tử hiện tại trong mảng.
//0: giá trị khởi đầu cho sum.
let chuyenSo = values.map(parseFloat);
let total = chuyenSo.reduce((sum, current) => sum + current, 0);

console.log("Dãy số sau khi chuyển:", chuyenSo); 
console.log("Tổng:", total); 
