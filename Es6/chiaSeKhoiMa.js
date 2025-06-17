//Named export giúp bạn export nhiều thứ cùng lúc, và phải import đúng tên, hoặc dùng as để đổi tên.
// export const add = (x, y) => {
//   return x + y;
// }
//Phía trên là cách phổ biến để xuất một hàm duy nhất, nhưng bạn có thể thực hiện theo cách tương tự như sau:
//nên dùng cách dưới khi có nhiều hàm/biến trong cùng file, rồi export chúng cùng lúc.
const add = (x, y) => {
  return x + y;
}
export { add };
//VD: khi muốn xuất nhiều hàm
//const add = (x, y) => x + y;
// const sub = (x, y) => x - y;
// export { add, sub };