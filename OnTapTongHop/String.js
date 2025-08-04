//Kiểu dữ liệu nguyên thủy - dùng biểu diễn chuỗi các kỹ tự
//Được viết trong dấu ngoạc kép hoạc ngoặc đơn

let name = 'Alice';
let message = "Hello";

//Đặc điểm của chuỗi là immutable không thể sửa nội dung của chuỗi đã tạo
// let str = "hello";
// str[0] = "H";  // ❌ Không có tác dụng
// console.log(str); // "hello"

//Mặc dù string là kiểu nguyên thủy (primitive), 
//nhưng khi bạn gọi .toUpperCase() hay .length, 
//JavaScript ngầm chuyển đổi chuỗi thành đối tượng String tạm thời, giúp bạn gọi method dễ dàng.

//Bài tập 
//Tạo 1 biến chuỗi
let str = "Hello JavaScript";

//Đếm số ký tự 
let doDaiCuaChuoiStr = str.length;
console.log('Độ dài của chuỗi str là: '+ doDaiCuaChuoiStr);//In ra độ dài của chuỗi


//Viết hoa toàn bộ chuỗi
let vietHoaToanBoChuoi = str.toUpperCase();
console.log('Chuỗi srt sau khi được viết hoa tất cả: '+vietHoaToanBoChuoi);

//Viết thường toàn bộ 
let vietThuongToanBoChuoi = str.toLowerCase();
console.log('Chuỗi srt sau khi được viết thường: '+ vietThuongToanBoChuoi);

console.log('--------------------------------------------------');
//xóa khoảng trắng thừa
//trim(): xóa khoảng trắng ở đầu và cuối
//trimStart(): xóa khoảng trắng ở đầu
//trimEnd(): xóa khoảng trắng ở cuối
let messy ='         Hello World!    ';
let xoaKhoangTrang = messy.trim();
console.log('Sau khi xóa khoảng trắng: ' + xoaKhoangTrang);
console.log('Xóa khoảng trắng ở đầu chuỗi: ', messy.trimStart());

//Cú pháp chung của replaceAll
//str.replaceAll(searchValue, replaceValue)
//searchValue: có thể là một chuỗi (ví dụ " "), hoặc biểu thức chính quy (RegExp) với cờ g (global).
//replaceValue: là chuỗi bạn muốn thay thế vào.
//replaceAll(): tạo 1 chuỗi mới 
//Thay đổi khoảng trắng thành dấu gạch ngang "-"
let thayDoi = messy.replaceAll(" ", "-");
console.log('Sau khi thay đổi: ' + thayDoi);
//Chuỗi không còn khoảng trắng
let KhongConKhoangTrang = messy.replaceAll(" ", "");
console.log('Chuõi sau khi không còn khoảng trắng: '+ KhongConKhoangTrang);

console.log('--------------------------------------------------');
//Kiểm tra chuỗi 
let text = "I love JavaScript";
//kiểm tra xem chuỗi có từ love không
let soSanh1Phan = text.includes('love');
console.log('Hiển thị kết quả: '+ soSanh1Phan);
//Dùng .startsWith() / .endsWith():
//"javascript".startsWith("java"); // true
//"javascript".endsWith("script"); // true

//Lấy vị trí
let word = "banana";
//tìn vị trí xuất hiện đầu tiên của ký tự a
console.log('Vị trí đầu tiên của a là: '+ word.indexOf('a'));

console.log('-------------------------------------------------');
//cắt chuỗi lấy ra ký tự trawbe
let fruit = "strawberry";
let catChuoi = fruit.slice(1, 7);
console.log('Hiển thị chuỗi sau khi cắt: '+ catChuoi);

//Thay thế ký tự dấu gạch ngang '-' thành dấu cách ' '
let sentence = "I-like-JavaScript";
let thayThe = sentence.replaceAll('-', ' ');
console.log('Sau khi thay thế: '+ thayThe);


console.log('-------------------------------------------------');
//Tách chuỗi thành mảng
let csv = "red,green,blue";
let tachThanhMang = csv.split(",");
console.log('Sau khi tách thành mảng: ',tachThanhMang);

//Lặp chuỗi 5 lần 
// let smile = "😊";
// let lapChuoi = smile.repeat(5);
// console.log('Lăp chuỗi 5 lần: ', lapChuoi);

let smile = "😊";
let lapChuoi = Array(5).fill(smile).join(',');
console.log('Lặp chuỗi có dấu phẩy:', lapChuoi);


console.log('-------------------------------------------------');
console.log('-------------------------------------------------');
console.log('-------------------------------------------------');
////Bài tập nâng cao
//Phân tích và chuẩn hóa thông tin người dùng
//Giả sử bạn nhận được chuỗi dữ liệu từ người dùng như sau:
let rawInput = "   tên: bình trần | email: binhtran@Gmail.com   ";

// Yêu cầu:
// Xoá khoảng trắng dư thừa đầu/cuối
// Tách chuỗi thành các phần: tên và email
// Lấy đúng phần tên (chữ hoa chữ thường chuẩn)
// Lấy đúng phần email (viết thường toàn bộ)
// In ra định dạng chuẩn sau:
// Tên: Bình Trần
// Email: binhtran@gmail.com

let xoa = rawInput.trim();
console.log(xoa);
let catChuoiThanh = xoa.split("|");
console.log(catChuoiThanh);
let namePart = catChuoiThanh[0].split(":")[1].trim();
let emailPart = catChuoiThanh[1].split(":")[1].trim();
let formattedName = namePart.split(" ")//tách thành mảng ["bình", "trần"]
.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  })
.join(" ");
let formattedEmail = emailPart.toLowerCase();
console.log("Tên:", formattedName);     
console.log("Email:", formattedEmail); 


console.log('--------------------------3-----------------------');
console.log('-------------------------------------------------');
console.log('-------------------------------------------------');
///Bài tập nâng cao 2
let rawTitle = "   học   javascript   cơ bản   với ví dụ   ";
// Yêu cầu:
// Xóa khoảng trắng thừa ở đầu và cuối chuỗi
// Loại bỏ nhiều khoảng trắng giữa các từ (giữ lại đúng 1 khoảng trắng giữa mỗi từ)
// Viết hoa chữ cái đầu mỗi từ
// In ra tiêu đề đẹp, ví dụ: "Học Javascript Cơ Bản Với Ví Dụ"

let xoaKhoangTrangRawTitle = rawTitle.trim();
let loaiBoCacKhoangTrangDuThua = xoaKhoangTrangRawTitle.replaceAll(/\s+/g, " ");
// /\s+/g : là một RegEx
// \s là ký tự khoảng trắng (space, tab, xuống dòng)
// + là 1 hoặc nhiều lần lặp
// g là global → tìm tất cả, không chỉ 1 lần
let vietHoa = loaiBoCacKhoangTrangDuThua.split(" ")
.map(word => {
  return  word[0].toUpperCase() + word.slice(1).toLowerCase();
})
.join(" ");
console.log(vietHoa);


console.log('--------------------------4-----------------------');
console.log('--------------------------4----------------------');
let rawList = [
  "   nguyễn    văn a ",
  "trần   thị   Bích    NGỌC  ",
  "  lê     Hoàng     tuấn   "
];
// Yêu cầu:
// Loại bỏ khoảng trắng dư thừa (giữa các từ và ở đầu/cuối)
// Viết hoa chữ cái đầu của mỗi từ
// In ra danh sách tên đã chuẩn hóa
// ✅ Kết quả mong đợi:
// [
//   "Nguyễn Văn A",
//   "Trần Thị Bích Ngọc",
//   "Lê Hoàng Tuấn"
// ]
let loaiBoKhoangTrang = rawList.map(w => {
    let trimmed = w.trim().replace(/\s+/g, " ");// Xóa khoảng trắng thừa
    let words = trimmed.split(" ");// ["nguyễn", "văn", "a"]
    let vietHoa = words.map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
    return vietHoa;
})
console.log(loaiBoKhoangTrang);