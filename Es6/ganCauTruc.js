//Sử dụng Destructuring Assignment để trích xuất giá trị từ các đối tượng
//Gán cấu trúc là cú pháp đặc biệt được giới thiệu trong ES6,
//để gán gọn gàng các giá trị lấy trực tiếp từ một đối tượng.
//  thuộcTính: tênBiến Moi

const user = { name: 'Le Binh', age: 22  };

// const name = user.name;
// const age = user.age;

const { name, age } = user;//cú pháp phân rã(Detructuring) - khai báo biến mới từ objec
//Tại đây, các biến name và age sẽ được tạo và gán giá trị tương ứng của chúng từ đối tượng useruser
console.log('Tên tui la: '+name);
console.log('Tui '+age + ' tuổi');

//Destructuring cho phép bạn gán một tên biến mới khi trích xuất giá trị. 
//Bạn có thể thực hiện việc này bằng cách đặt tên mới sau dấu hai chấm khi gán giá trị.

const { name: userName, age: userAge } = user;
//lấy giá trị của user.name và gán nó cho một biến mới có tên là userName
//Giá trị của userName sẽ là chuỗi John Doe và giá trị của userAge sẽ là số 34.

//Sử dụng Destructuring Assignment để gán các biến từ các đối tượng lồng nhau
const user2  = {
  johnDoe: { 
    age2 : 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
//trích xuất các giá trị của thuộc tính đối tượng và gán chúng cho các biến có cùng tên:
const { johnDoe: { age2 , email }} = user2 ;
//đây là cách bạn có thể gán giá trị thuộc tính của đối tượng cho các biến có tên khác nhau:
const { johnDoe: { age: Tuoi, email: userEmail }} = user2 ;

//GIAI CAU TRUC MANG
//Một điểm khác biệt chính giữa toán tử spread và giải cấu trúc mảng là toán tử spread giải nén tất cả nội dung của một mảng 
//thành một danh sách được phân tách bằng dấu phẩy. Do đó, bạn không thể chọn hoặc chọn các phần tử bạn muốn gán cho các biến.
//Việc phân tách một mảng cho phép chúng ta thực hiện chính xác điều đó:
// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);
//Bảng điều khiển sẽ hiển thị các giá trị của avà bdưới dạng 1, 2.

//Biến a được gán giá trị đầu tiên của mảng và b được gán giá trị thứ hai của mảng. 
//Chúng ta cũng có thể truy cập giá trị tại bất kỳ chỉ mục nào trong mảng bằng cách 
//giải cấu trúc bằng cách sử dụng dấu phẩy để đạt đến chỉ mục mong muốn:
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
//Bảng điều khiển sẽ hiển thị các giá trị của a, b, và c dưới dạng 1, 2, 5.
//Sử dụng phép gán hủy cấu trúc để hoán đổi giá trị của avà bđể anhận giá trị được lưu trữ trong b, và bnhận giá trị được lưu trữ trong a.
let a2  = 8, b2  = 6;
// Hoán đổi giá trị
[a2 ,b2 ]= [b2 ,a2 ];
//Biến a và b đã hoán đổi giá trị cho nhau mà không cần biến tạm như cách truyền thống (let temp = a; a = b; b = temp;).

//----------------------
//Trong một số tình huống liên quan đến việc hủy cấu trúc mảng, chúng ta có thể muốn thu thập phần tử còn lại vào một mảng riêng biệt.
//Kết quả tương tự Array.prototype.slice()như hình dưới đây:
const [a3 , b3  , ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a3 , b3 );
console.log(arr);
//Bảng điều khiển sẽ hiển thị các giá trị 1, 2và [3, 4, 5, 7].
//Biến avà blấy giá trị đầu tiên và thứ hai từ mảng. Sau đó, do sự hiện diện của cú pháp rest, 
// arrlấy phần còn lại của các giá trị dưới dạng một mảng. 
// Phần tử rest chỉ hoạt động chính xác như biến cuối cùng trong danh sách. 
// Giống như trong, bạn không thể sử dụng cú pháp rest để bắt một mảng con bỏ qua phần tử cuối cùng của mảng gốc.
//VD
function removeFirstTwo(list) {
  const [ a, b, ...arr ] = list;
  return arr; // Trả về mảng sau khi bỏ 2 phần tử đầu
}
const result = removeFirstTwo([1, 2, 3, 4, 5]);
console.log(result); // [3, 4, 5]

//Trong một số trường hợp, bạn có thể phân tích đối tượng trong chính đối số hàm.
//Hãy xem xét đoạn mã dưới đây:
// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;
// }
//Điều này có hiệu quả phá hủy cấu trúc đối tượng được gửi vào hàm. Điều này cũng có thể được thực hiện tại chỗ:
const profileUpdate = ({ name, age, nationality, location }) => {
}
//Khi profileDatađược truyền vào hàm trên, các giá trị sẽ được giải cấu trúc khỏi tham số hàm để sử dụng trong hàm.
//Ví Dụ
//Sử dụng phép gán cấu trúc trong đối số của hàm half để chỉ gửi max và min bên trong hàm.
//stats phải là một object.
//half(stats)nên là28.015
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0; 
console.log(half(stats)); // 28.015

const person99 = {
  name99 : "An",
  age: 22,
  city: "Hà Nội"
};
const { name99 , ...others } = person99;
console.log(name99 );   // "An"
console.log(others); // { age: 22, city: "Hà Nội" }
