// Callback (ES5)
//Là 1 hàm đc truyền vào như đối số của 1 hàm khác, và được gọi lại khi hàm kia thực hiện song công việc
function sayHello(name) {
  console.log(`Hello, ${name}`);
}//Đây là 1 hàm bình thg 

function processUser(callback) {
  const name = 'John';
  callback(name); // gọi lại callback
}

processUser(sayHello);//hàm sayHello lúc này chính là tham số của hàm processUser


////Ben Trên đây vẫn là đồng bộ nhé 

// function processUser(callback) {
//   const name = 'John';

//   // đây là bất đồng bộ
//   setTimeout(() => {
//     callback(name); // gọi lại sau 2 giây
//   }, 5000);
// }
// processUser(sayHello);

// processUser gọi xong thì thoát ra luôn, không đợi setTimeout chạy xong.
// 2 giây sau, hàm callback(name) (tức sayHello('John')) mới được chạy.
// Đây mới là bất đồng bộ thật sự: không block luồng chính.




//          Trường hợp	                            Có bất đồng bộ không?
// callback(name) được gọi trực tiếp	                ❌ Không
// callback(name) gọi trong setTimeout,                  ✅ Có
// fetch, Promise, async/await	