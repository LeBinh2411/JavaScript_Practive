//.split(' ') để cắt chuỗi thành mảng và các từ (cắt theo dấu cách)

function tachChuoi(a){
    let words = a.split(' ');
    return  words;
}
console.log(tachChuoi('Xin chào tôi là aaaaaaa'));

function findLongestWordLength(str) {
  let words = str.split(' '); // chuyển str thành mảng 
  let maxLength = 0;
  let longWord = '';
  for(let i = 0; i< words.length; i ++ ){
    if(words[i].length > maxLength){
        maxLength = words[i].length;
        longWord = words[i];
    }
  }
  return {maxLength, longWord};
}
const { longWord, maxLength } = findLongestWordLength('The quick brown fox jumped');

console.log('Từ dài nhất là: ' + longWord);
console.log('Số ký tự: ' + maxLength);
console.log('--------------Cách số 2-------------');
console.log('Từ dài nhất là: ' + findLongestWordLength('The quick brown fox jumped').longWord);
console.log('Số ký tự: ' + findLongestWordLength('The quick brown fox jumped').maxLength);


//Cách lấy phần tử lớn nhất trong các mảng con rồi thêm vào array
function largestOfFour(arr) {
let array = [];
for(let a = 0; a < arr.length; a ++){
  let max = arr[a][0];
  for(let b = 0; b < arr[a].length; b++){
      if(arr[a][b] > max){
        max = arr[a][b];
      }
  }
  array.push(max);
}

  return array;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));