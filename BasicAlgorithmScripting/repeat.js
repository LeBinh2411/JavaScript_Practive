// .repeat(num) là một phương thức có sẵn trong JavaScript, được dùng để lặp lại chuỗi num lần.
// Nếu num là 3 và str là 'abc', thì 'abc'.repeat(3) sẽ trả về 'abcabcabc'.

// function repeatStringNumTimes(str, num) {
//   if (num <= 0) return "";
//   return str.repeat(num);
// }

// console.log(repeatStringNumTimes('abc', 3));


function repeatStringNumTimes(str, num) {
  if(num <= 0)
  return "";

  let result = "";
  for(let i = 0; i < num; i++){
    result += str;
  }
  
  return result;
}

console.log(repeatStringNumTimes('abc', 3));