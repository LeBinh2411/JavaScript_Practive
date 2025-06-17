// Promise là gì?
// Promise là một đối tượng đại diện cho một tác vụ bất đồng bộ có thể:
// Thành công (fulfilled),
// Thất bại (rejected),
// Hoặc đang chờ xử lý (pending).

//  Thành phần	                Giải thích
// resolve(value)	Gọi khi thành công (truyền kết quả value)
// reject(error)	Gọi khi lỗi (truyền lý do thất bại)

const checkNumber = new Promise((resolve, reject) => {
  const num = 10;
  if (num > 5) {
    resolve("Số lớn hơn 5");
  } else {
    reject("Số nhỏ hơn hoặc bằng 5");
  }
});

checkNumber
  .then(result => {console.log("hihi", result)})
  .catch(error => {console.error("❌", error)});

function checkEven(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== "number") {
        reject("❌ Không phải số!");
      } else if (number % 2 === 0) {
        resolve("✅ Là số chẵn");
      } else {
        resolve("✅ Là số lẻ");
      }
    }, 1000); // giả lập trễ 1 giây
  });
}
checkEven(6)
  .then(result => {
    console.log(result); // 👉 "✅ Là số chẵn"
  })
  .catch(error => {
    console.error(error); // nếu có lỗi
  });

checkEven("hello")
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error); // 👉 "❌ Không phải số!"
  });