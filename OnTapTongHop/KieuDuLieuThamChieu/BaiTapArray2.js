//Bài 1:
/*Lọc ra các từ có độ dài >= 3
Tạo một mảng mới chứa các từ được viết hoa toàn bộ ("HELLO", "HI",...)*/
const words = ["hello", "hi", "world", "code", "js"]

let mangChuaCacTuVietHoa = [];
for(let i =0; i< words.length; i++){
    if(words[i].length >= 3){
       mangChuaCacTuVietHoa.push(words[i].toUpperCase()); 
    }
}
console.log(mangChuaCacTuVietHoa);

//Bài 2:
/*array.reduce((accumulator, currentValue, index, array) => {
  // logic xử lý
}, initialValue);
accumulator: giá trị được tích lũy (giá trị trả về sau mỗi lần callback chạy)
currentValue: phần tử hiện tại đang duyệt qua
initialValue: giá trị khởi tạo ban đầu cho accumulator*/

/*Tính tổng giá trị đơn hàng
Tìm đơn hàng có giá cao nhất*/
const orders = [ { name: "A", price: 100 }, 
    { name: "B", price: 200 }, 
    { name: "C", price: 150 } ];

const totalScore = orders.reduce((sum, order) => sum + order.price, 0);
console.log(totalScore);