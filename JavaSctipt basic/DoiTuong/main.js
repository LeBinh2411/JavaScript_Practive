// Đối tượng - object
// Trong javaScript đối tượng là 1 kiểu dữ liệu dùng để lưu chữ các cặp 
// (key - value pairs): khóa - giá trị
// Nếu thuộc tính trong đối tượng k phải là chuỗi, thì javaScript sẽ tự động chuyển đổi thành chuỗi
//Tạo một đối tượng biểu diễn một con chó có tên myDoglà chứa các thuộc tính name(chuỗi), legs, tailsvà friends.
//Bạn có thể đặt các thuộc tính đối tượng này thành bất kỳ giá trị nào bạn muốn, 
// miễn là nameđó là chuỗi, legslà tailssố và friendslà mảng.
const myDog1  = {
    "name": "Bun",
    legs : 4,
    tails: 1,
    friends:[1,2,3,4,5]
  };
//ví dụ về việc sử dụng biến để truy cập vào thuộc tính:
//  Chuỗi ký tự Dobermansẽ được hiển thị trong bảng điều khiển.
  const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  }; 
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed);
//Vì chú chó này đặc biệt vui vẻ, hãy đổi tên chú thành chuỗi Happy Camper.
// Sau đây là cách chúng ta cập nhật thuộc tính tên của đối tượng chú: 
// ourDog.name = "Happy Camper";hoặc ourDog["name"] = "Happy Camper";
// Bây giờ khi chúng ta đánh giá ourDog.name, thay vì nhận được Camper, 
// chúng ta sẽ nhận được tên mới của chú, Happy Camper.
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  ourDog.name = "Happy Camper";
// Dấu chấm ( . ): dùng đọc dữ liệu, gọi dữ liệu, thêm mới dữ liệu
//delete : xóa
//Chuyển đổi câu lệnh switch thành một đối tượng có tên là lookup. 
// Sử dụng nó để tra cứu val và gán chuỗi liên quan cho result biến.
function phoneticLookup(val) {
    let result = "";
    // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago", 
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val]; // truy xuất giá trị tương ứng
    return result;
  }
  console.log(phoneticLookup("charlie")); // 👉 "Chicago"
//Sửa đổi hàm checkObjđể kiểm tra xem đối tượng được truyền cho tham số hàm obj
// có chứa thuộc tính cụ thể được truyền cho tham số hàm hay không checkProp. 
// Nếu thuộc tính được truyền cho checkPropđược tìm thấy trên obj, 
// hãy trả về giá trị của thuộc tính đó. Nếu không, hãy trả về Not Found.
///1. checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")phải trả về chuỗi pony.
//2. checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")sẽ trả về chuỗi kitten.
//3. checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")sẽ trả về chuỗi Not Found.
function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }else{
      return "Not Found";
    }
    return "Change Me!";
  }

//Doi tuong long nhauu
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
//ourStorage.cabinet["top drawer"].folder2 sẽ là chuỗi secrets, 
// và ourStorage.desk.drawer sẽ là chuỗi stapler.

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
//ourPets[0].names[1]sẽ là chuỗi Fluffy, 
// và ourPets[1].names[0]sẽ là chuỗi Spot.