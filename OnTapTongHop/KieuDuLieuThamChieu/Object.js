//Object là kiểu dữ liệu tham chiếu, và được dùng để lưu trữ nhiều giá trị theo dạng key-value
let person = {
  name: "Bình",
  age: 22,
  isStudent: true
};
/*Các cách truy cập và thao tác với Object
 Dấu chấm ( . ) : truy cập thuộc tính tên cố định 
 Dấu ngoặc vuông []: truy cập bằng biến hoặc chuỗi dộng*/

//Truy cập thuộc tính
console.log(person.name);
console.log(person['age']);
console.log('--------------------------------------------------');

//Cách sửa thuộc tính
person.age= 20;

//Cách xóa thuộc tính
delete person.isStudent;

//Dùng vòng for...in để duyệt qua tất cả key trong Object

for(let key in person){
    console.log(key, person[key]);
}
console.log('-------------------------2-------------------------');

/// Bài 1: Lấy danh sách khóa - viết lệnh để in ra tất cả key của object
const student = {
  name: "Bình",
  age: 22,
  class: "JS-01"
};

//Object.keys(): phương thức tĩnh trả về 1 mảng các tên thuộc tính có trong Object
console.log('Tên các thuộc tính là:' ,Object.keys(student));

//Bài 2: Lấy các danh sách giá trị
//Object.values(): phương thức trả về 1 mảng các giá trị có trong Object
console.log('Các giá trị của student:', Object.values(student)); 

//Bài 3: lấy các key và values
//Object.entries(): phương thức trả về mảng có dạng [ [ 'name', 'Bình' ], [ 'age', 22 ] ]
console.log(Object.entries(student));

//Bài 4: Gộp 2 object
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

//Object.assign(): Phương pháp sao chép các thuộc tính từ một hoặc nhiều đối tượng nguồn sang một đối tượng đích.
const result = Object.assign(obj1, obj2);
console.log(result);
console.log(obj1);
console.log('-------------------------3-------------------------');


/*Lưu ý: chỉ copy được các thuộc tính cấp 1 và tạo mới các thuộc tính đó
 còn những thuộc tính Object thì chỉ là copy và dùng chung địa chỉ chứ không tạo mới nên 
khi thay đổi thì những object khác cũng bị thay đổi theo*/
const obj = {
  name: "Bình",
  age: 22,
  address: {
    city: "Hà Nội",
    district: "Cầu Giấy"
  }
};

const copy = Object.assign({}, obj);
console.log(copy);

// Sửa cấp 1 — không ảnh hưởng === do tạo mới 
copy.name = "Long";
console.log(obj.name); // "Bình" ✅

/// Sửa cấp 2 — ảnh hưởng luôn object gốc === do dùng chung địa chỉ
copy.address.city = "Hồ Chí Minh";
console.log(obj.address.city); // "Hồ Chí Minh" ❗

//Bài 5: Đóng băng object 
/*Object.freeze()
Không thể thêm thuộc tính mới.
Không thể xoá thuộc tính hiện có.
Không thể chỉnh sửa giá trị của các thuộc tính hiện có.
Không thể thay đổi cấu trúc
*/
const config = {
  theme: "dark",
  language: "vi"
};
Object.freeze(config);

person.age = 25;        // ❌ Không thay đổi được
person.city = "Hà Nội"; // ❌ Không thêm được thuộc tính mới
delete person.name;     // ❌ Không xóa được thuộc tí

/*Lưu ý: freeze chỉ đóng băng bề ngoài
Nếu object có lồng object bên trong, thì object bên trong vẫn thay đổi được*/

const user = {
  name: "Bình",
  address: {
    city: "Hà Nội"
  }
};
Object.freeze(user);
user.address.city = "Đà Nẵng"; // ✅ Vẫn thay đổi được!
console.log(user.address.city); // "Đà Nẵng"