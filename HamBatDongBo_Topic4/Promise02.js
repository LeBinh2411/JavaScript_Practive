function login(usernameHehe, passwordHehe) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userName = "admin";
      const passWord = "123456";

      if (usernameHehe === userName && passwordHehe === passWord) {
        resolve("Dang nhap thanh cong roi hehehe");
      } else {
        reject("Oh sai ten dang nhap hoac mat khau roi");
      }
    }, 3000); //cho 3 giay nhe
  });
}

//goi ham login
login("admin1", "123456")
  .then((message) => {
    console.log("chuc mung " + message);
  })
  .catch((error) => {
    console.log("toang " +error);
  });


///1 vi du ve setTimeOut 
console.log("1");

setTimeout(() => {
  console.log("2"); // ← hàm này chưa chạy ngay, chỉ lên lịch chạy sau 2 giây
}, 2000);

console.log("3");
console.log("4");
console.log("5");
