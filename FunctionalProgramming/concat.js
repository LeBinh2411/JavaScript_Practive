//concat() là phương thức dùng để nối (gộp) nhiều mảng hoặc chuỗi lại với nhau, 
// và trả về một bản sao mới mà không làm thay đổi giá trị ban đầu.

const a = [1, 2];
const b = [3, 4];
const c = a.concat(b);
console.log(c); // [1, 2, 3, 4]
console.log(a); // [1, 2] (Không bị thay đổi)

const d = a.concat(b, [5, 6], [[7, 8]]);
console.log(d); // [1, 2, 3, 4, 5, 6, [7, 8]]
//🔍 concat() không làm phẳng mảng lồng nhau, chỉ nối 1 cấp.