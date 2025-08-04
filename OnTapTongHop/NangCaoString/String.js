//loại bỏ khoảng trắng thừa và viết hoa chữ cái đầu của mỗi từ, 
// áp dụng với mảng rawList:
//Kết quả [
//   "Nguyễn Văn A",
//   "Trần Thị Bích Ngọc",
//   "Lê Hoàng Long"
// ]

let rawList = [
  "  nguyễn    văn     a  ",
  "  trần     thị bích     ngọc   ",
  "  lê   hoàng     long "
];

let xoaKhoangTrang = rawList.map(w =>{
     let xoaDauVaCuoi = w.trim().replaceAll(/\s+/g, " ");
     let tachVaVietHoa = xoaDauVaCuoi.split(" ")
     .map(e =>{
       return e[0].toUpperCase() + e.slice(1).toLowerCase()
     })
     .join(" ");
     return tachVaVietHoa;
})
console.log(xoaKhoangTrang);

console.log('-------------------------------------------------------------')
let rawList2 = [
  "  phạm     thị   thu  hà  ",
  "  đỗ    mạnh    cường ",
  "  vũ     thị    kim   ngân "
];

let xoaKhoangTrang2 = rawList2.map(w =>{
    let suLy = w.trim().replaceAll(/\s+/g, " ");
    let VietHoa = suLy.split(" ").map(e => {
        return e[0].toUpperCase() + e.slice(1).toLowerCase();
    }).join(" ");
    return VietHoa;
})
console.log(xoaKhoangTrang2);