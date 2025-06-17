// splice()Tham số đầu tiên của ' biểu diễn chỉ số trên mảng để bắt đầu xóa các phần tử, 
// trong khi tham số thứ hai biểu diễn số phần tử cần xóa
//Tham số thứ 3 của splice()
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
// Lần xuất hiện thứ hai của 12 bị loại bỏ và chúng ta thêm 13 và 14 ở cùng một chỉ số. 
// numbers Mảng bây giờ sẽ là [ 10, 11, 12, 13, 14, 15 ].

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather);
console.log(weatherConditions);

// Thay vì sửa đổi một mảng, slice()hãy sao chép hoặc trích xuất một số lượng phần tử nhất định vào một mảng mới,
// giữ nguyên mảng mà nó được gọi. slice()chỉ lấy 2 tham số — tham số đầu tiên là chỉ mục để bắt đầu trích xuất 
// và tham số thứ hai là chỉ mục để dừng trích xuất 
let weatherConditions2 = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather2 = weatherConditions.slice(1, 3);
//todaysWeathersẽ có giá trị ['snow', 'sleet'], trong khi weatherConditionsvẫn có ['rain', 'snow', 'sleet', 'hail', 'clear'].

//toán tử spread mới của ES6 cho phép chúng ta dễ dàng sao chép tất cả các phần tử của một mảng, theo thứ tự, với cú pháp đơn giản và dễ đọc. Cú pháp spread trông đơn giản như thế này:...
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray);

// indexOf() là một phương thức trong JavaScript được dùng để tìm vị trí (chỉ số - index) đầu tiên của một phần tử cụ thể trong mảng hoặc chuỗi.
// array.indexOf(element);
// element: phần tử bạn muốn tìm.
// Trả về:
// Chỉ số (index) của phần tử đầu tiên tìm thấy (bắt đầu từ 0).
// -1 nếu không tìm thấy phần tử đó.

//Cac cach them thuoc tinh cho doi tuong( Object)
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

tekkenCharacter.origin = 'South Korea';
tekkenCharacter['hair color'] = 'dyed orange';

const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
// Sau khi thêm tất cả các ví dụ, đối tượng sẽ trông như thế này:
// {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true,
//   origin: 'South Korea',
//   'hair color': 'dyed orange',
//   'eye color': 'brown'
// };

// Lý do cần đặt dấu nháy đơn ' ' cho một số thuộc tính:
// Trong JavaScript, tên thuộc tính (property name) của một object thường là một từ (identifier) — không có dấu cách, không ký tự đặc biệt.
// Nhưng khi tên thuộc tính:
// chứa dấu cách (space) như "hair color"
// hoặc có ký tự không hợp lệ với biến thông thường (ví dụ: dấu gạch ngang -, số ở đầu…)
// → Thì bạn phải đặt nó trong dấu nháy (' ' hoặc " "), vì JavaScript sẽ coi đó là string key chứ không phải tên biến hợp lệ.

//Gan giatri cho thuoc tinh long nhau
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
nestedObject.data.onlineStatus.busy = 10;//dung dau cham (.) de tham chieu den gia tri


//Khi bạn có một biến lưu tên thuộc tính (key) của một object, bạn phải dùng ngoặc vuông ([]) để truy cập giá trị đó.
const obj = {
  apple: 10,
  banana: 5
};
let fruit = "apple";
console.log(obj[fruit]); // 👉 10
// Bạn không thể dùng obj.fruit, vì như thế JS sẽ tìm obj.fruit (tức là key "fruit", chứ không phải "apple").

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  
  // Only change code above this line
}
console.log(checkInventory("apples"));

//Cach xoa thuoc tinh , cap key-values dung: delete foods.apples => thuoc tinh apples da duoc xoa

//kiem tra thuoc tinh co ton tai hay k
// users.hasOwnProperty('Alan');
// 'Alan' in users;
// Cả hai đều sẽ trở lại true.

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};
for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
//for (const food in refrigerator)
// Đây là cú pháp for...in → dùng để duyệt qua tất cả các thuộc tính (key) trong object refrigerator.
// Mỗi lần lặp, biến food sẽ là một key trong object.
// Lần 1: food = 'milk'
// Lần 2: food = 'eggs'
// console.log(food, refrigerator[food]);
// food là key: "milk" hoặc "eggs"
// refrigerator[food] là giá trị tương ứng:
// refrigerator['milk'] → 1
// refrigerator['eggs'] → 12

// Chúng ta cũng có thể tạo một mảng chứa tất cả các khóa được lưu trữ trong một đối tượng bằng Object.keys()phương pháp này. 
// Phương pháp này lấy một đối tượng làm đối số và trả về một mảng các chuỗi biểu diễn từng thuộc tính trong đối tượng.
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
 return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));