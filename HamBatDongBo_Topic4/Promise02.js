function login(username9, password9) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userName = "admin";
      const passWord = "123456";

      if (username9 === userName && password9 === passWord) {
        resolve("Dang nhap thanh cong roi");
      } else {
        reject("Oh sai ten dang nhap hoac mat khau roi");
      }
    }, 3000); //cho 3 giay
  });
}

//goi ham login
login("admin1", "123456")
  .then((message) => {
    console.log("Chuc mung " + message);
  })
  .catch((error) => {
    console.log("Loi " +error);
  });
console.log("6");

///1 vi du ve setTimeOut 
console.log("1");

setTimeout(() => {
  console.log("2"); // ← hàm này chưa chạy ngay, chỉ lên lịch chạy sau 2 giây
}, 2000);

console.log("3");
console.log("4");
console.log("5");
