//Tìm kiếm dùng biểu thức chính quy /.../
//Một cách để kiểm tra regex là sử dụng phương pháp .test()
//lưu ý: có phân biệt hoa thường
let testStr = "Hi chao ban";
let testRegex = /Hi/;
console.log(testRegex.test(testStr));

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log("hi " + result);

//Cờ i trong biểu thức chính quy (regular expression) là viết tắt của "insensitive", 
// dùng để bỏ qua việc phân biệt chữ hoa và chữ thường khi so khớp chuỗi.
// Cờ	Ý nghĩa
// i	Insensitive – Không phân biệt hoa thường
// g	Global – Tìm tất cả kết quả khớp
// m	Multiline – So khớp với nhiều dòng
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result2  = fccRegex.test(myString);


// So sánh       .match()                và         .test():
// Mục đích	     .match()	                        .test()
// Dùng để	Lấy ra phần khớp (trích xuất)   	Kiểm tra có khớp không
// Trả về	Mảng kết quả hoặc null              	true hoặc false
// Gọi từ	Chuỗi .match(RegExp)	            Biểu thức chính quy .test(string)

// .test(): Regex gọi, chuỗi truyền vào → dùng để kiểm tra có khớp hay không
// .match(): Chuỗi gọi, regex truyền vào → dùng để lấy ra phần trùng khớp //Trả về phần tử khớp đầu tiên

//vd: .match() làm vc trực tiếp với chuỗi được
let aa = "I love to code!".match(/code/);
console.log(aa); 

//Bạn có thể có nhiều cờ trên regex của mình như/search/gi
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // tìm đc tất cả + k phân biệt hoa thường
let result3  = twinkleStar.match(starRegex);

//Biểu thức chính quy /hu./ mà bạn nói đến được gọi là sử dụng ký tự đại diện (wildcard) — cụ thể là dấu chấm (.).
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

//Lớp ký tự
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
//Theo thứ tự, bốn matchlệnh gọi sẽ trả về các giá trị ["big"], ["bag"], ["bug"], và null.

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex2  = /[a-e]at/;
catStr.match(bgRegex2);
batStr.match(bgRegex2);
matStr.match(bgRegex2);
//Theo thứ tự, ba matchlệnh gọi sẽ trả về các giá trị ["cat"], ["bat"], và null.

//  /[0-5]/khớp với bất kỳ số nào nằm giữa 0và 5, bao gồm cả 0và 5.
// Ngoài ra, có thể kết hợp nhiều chữ cái và số trong một bộ ký tự duy nhất.
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

// Để tạo một bộ ký tự phủ định, bạn đặt ký tự mũ ( ^) sau dấu ngoặc mở và trước các ký tự bạn không muốn khớp.
// Ví dụ, /[^aeiou]/gi khớp với tất cả các ký tự không phải là nguyên âm. 
// Lưu ý rằng các ký tự như ., !, [, @, /và khoảng trắng được khớp - bộ ký tự nguyên âm phủ định chỉ loại trừ các ký tự nguyên âm.
let quoteSample = "3 blind mice.";
let myRegex4 = /[^3a-d]/gi; // Change this line
let result4  = quoteSample.match(myRegex4); // Change this line
console.log("hi 1"+result4);

// Ví dụ, /a+/gsẽ tìm thấy một kết quả khớp trong abc và trả về ["a"]. 
// Vì +, nó cũng sẽ tìm thấy một kết quả khớp duy nhất trong aabc và trả về ["aa"].
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);

// các ký tự xuất hiện không lần nào hoặc nhiều lần.
// Ký tự để thực hiện việc này là dấu hoa thị hoặc ngôi sao: *.
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
// Theo thứ tự, ba match lệnh gọi sẽ trả về các giá trị ["goooooooo"], ["g"], và null.

// * → lặp nhiều nhất có thể (tham lam)
// *? → lặp ít nhất có thể (lười biếng)
let text = "<h1>Winter is coming</h1>";
let myRegex5  = /<.*?>/; // Change this line
let result5  = text.match(myRegex5);
console.log("hi2 " +result5);

// Regex	Ý nghĩa	Dùng khi
// /C*/	0 hoặc nhiều chữ C	❌ Không phù hợp nếu bạn chỉ muốn tìm đoạn có ít nhất một C
// /C+/	1 hoặc nhiều chữ C	✅ Dùng khi muốn tìm các cụm có ít nhất một chữ C

let rickyAndCal = "Cal and Ricky both like racing";
let calRegex = /^Cal/; // kiểm tra xem Cal có ở đầu chuỗi hay k
let result6  = calRegex.test(rickyAndCal);
console.log("hihi "+ result6);
// Ký hiệu	Ý nghĩa	Ví dụ
// ^ đầu biểu thức	nếu k có ở đầu trả về falsefalse
// ^ bên trong []	phủ định ký tự	/[^aeiou]/ khớp mọi ký tự không phải nguyên âm
// $ Cuối biểu thức nếu k thấy ở cuối là false

let calRegex2 = /racing$/; //kiểm tra ở cuối
let result7 = calRegex2.test(rickyAndCal);
console.log("$$$ "+result7);

// \w là một kí hiệu viết tắt cho:
// Bất kỳ ký tự nào là chữ cái (a-z, A-Z), chữ số (0-9), hoặc dấu gạch dưới _.
// \W Khớp với mọi ký tự không phải là \w, tức là: dấu cách, dấu câu, ký hiệu đặc biệt (!, @, #, khoảng trắng...)
let quoteSample2  = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result8  = quoteSample2.match(alphabetRegexV2).length;
console.log(result8);

let alphabetRegexV23  = /\W/g; // Change this line
let result9  = quoteSample2.match(alphabetRegexV23).length;
console.log(result9);


//Phím tắt để tìm kiếm các ký tự chữ số là \d, với chữ thường d. 
//Điều này tương đương với lớp ký tự [0-9], tìm kiếm một ký tự duy nhất của bất kỳ số nào từ không đến chín.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result10 = movieName.match(numRegex).length;
console.log(result10);
//Phím tắt để tìm kiếm các ký tự không phải chữ số là \D. Điều này tương đương với lớp ký tự [^0-9]
let noNumRegex = /\D/g; // Change this line
let result11  = movieName.match(noNumRegex).length;
console.log(result11 );