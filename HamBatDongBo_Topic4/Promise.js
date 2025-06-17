///Promise ?
///Promise là 1 object 
///Promise có 3 trạng thái ( 1.pending(đang chờ),    2.fulfilled(thành công),    3.rejected(thất bại))
///

//Tạo 1 hàm fetchDate hàm sẽ trả về 1 đối tượng(Object) PromisePromise
function fetchData() {

            //Hàm Pomise nhận 1 callback(là 1 hàm) với 2 tham số (resolve:gọi khi thành công, reject:gọi khi thất bại)  
  return new Promise((resolve, reject) => {
    //hàm setTimeout sau 2 giây bắt đầu mới chạy dữ liệu bên trong hàmhàm
    setTimeout(() => {
      //Tạo 1 biến success cho = true 
      const success = false;
      //do success = true => gọi resolve 
      if (success) {
        resolve("Dữ liệu đã được tải thành công!");
      } else {
        reject("Đã xảy ra lỗi khi tải dữ liệu.");
      }
    }, 2000); // 2 giây sau mới trả kết quả
  });
}

//Gọi hàm fetchData() => bắt đầu chạy code bên trong hàm fetchDate tạo Promise 
fetchData() 
    //nếu hàm bên trên goi resolve thì .then(data => {...}) mới bắt đầu chạy 
  .then(data => {
    console.log("✅ Thành công:", data);
  })
    ////nếu hàm bên trên goi reject thi .catch(eror =>{...}) mới bắt đầu chạy 
  .catch(error => {
    console.log("❌ Lỗi:", error);
  });




//Lưu ý: khi trong hàm fetchData() nếu không dùng hàm bất đồng bộ setTimeout(), 
// thì .then() và .catch() vẫn luôn được sử lý theo bất đồng bộ, nó sẽ đợi hàm đồng bộ chạy song thì nó mới chạy 