//async là từ khóa dùng để khai báo một hàm bất đồng bộ
//await là từ khóa để tạm thời dùng việc thực thi lại và đợi promise hoàn tất thì mới chạy tiếp các dòng sau
function getUserFromServer(success = true) {
  return new Promise((resolve, reject) => {
    console.log("📡 Đang lấy thông tin người dùng từ server...");

    setTimeout(() => {
      if (success) {
        resolve({ id: 1, name: "Lee Tran Binh" }); // ✅ trả dữ liệu
      } else {
        reject("❌ Không thể lấy dữ liệu người dùng"); // ❌ báo lỗi
      }
    }, 2000); // chờ 2 giây
  });
}

////Tao ham bat dong bo dung async/await
async function runApp() {
  console.log("🚀 Bắt đầu chương trình");

  try {
    const user = await getUserFromServer(); // dung await goi ham => đợi dữ liệu từ getUserFromServer() chay song moi chay dong tiep theo
    console.log("✅ Dữ liệu người dùng:", user);
  } catch (error) {
    console.log("⚠️ Gặp lỗi:", error);
  }

  console.log("🏁 Kết thúc chương trình");
}

runApp();
console.log("hehehehehehe");

///Con neu khong dung await thi se khong doi promise chay song ma chay dong tiep theo luon console.log("🏁 Chạy xong main luôn rồi!");
// getUserFromServer()
//   .then(user => {
//     console.log("✅ Dữ liệu:", user);
//   })
//   .catch(error => {
//     console.log("❌ Lỗi:", error);
//   });

// console.log("🏁 Chạy xong main luôn rồi!");