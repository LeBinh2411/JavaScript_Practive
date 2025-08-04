// Phương thức .slice() trong JavaScript được dùng để trích xuất một phần của chuỗi hoặc mảng mà không làm thay đổi giá trị gốc.

//Cắt bớt một chuỗi (đối số đầu tiên) nếu chuỗi đó dài hơn độ dài
//chuỗi tối đa được chỉ định (đối số thứ hai). Trả về chuỗi đã cắt bớt có phần ...kết thúc.
function truncateString(str, num) {
  let result = "";
  if(str.length > num){
    result = str.slice(0, num) + '...';
    return result ;
    }else{
      return str;
    }
  }

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));