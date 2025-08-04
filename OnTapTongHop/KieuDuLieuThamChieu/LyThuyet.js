// Dữ liệu tham chiếu là kiểu dữ liệu không lưu giá trị trực tiếp vào biến
// Thay vào đó, biến chỉ lưu địa chỉ (reference), 
// địa chỉ đó tham chiếu đến vùng nhớ nơi chứa giá trị thật

//VD
const student1 = {name: 'Easy Frontend', };
const student2 = student1;
student2.name = 'Le Binh';

console.log(student1.name); //Le Binh

//Giải thích
// studen1 chứ địa chỉ, và địa chỉ đó sẽ tham chiếu đến vùng nhớ nơi chứa {name: 'Easy Frontend', };
// gán địa chỉ student1 cho student2 vậy là bây giờ 2 biến này có chung 1 địa chỉ
// Khi sử dụng biến student2.name = 'Le Binh' do chung địa chỉ nên
//===> sử dụng 1 trong 2 biến thay đổi thì sẽ thay đổi tất

//VD: nếu dùng để so sánh thì phải so sánh bằng các key bên trong chứ nếu so sánh bình thường thì chỉ là so sánh bằng địa chỉ ô nhớ == false

