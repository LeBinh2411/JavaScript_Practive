import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

//Muc tieu
// + Kiểm tra tên người dùng và mặt khẩu
// + Nếu đúng, tạo mã thông báo JWT
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService, //de tao token
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findByUserName(username); //tim thay tra ve user la 1 object
    console.log('User tìm thấy:', user); // ✅ In ra user từ DB
    console.log('Password người dùng nhập:', password); // ✅
    //if: lay user vua tim dc trong db va lay mat khau cua user so sanh voi password
    if (user && user.matKhau === password) {
      //tra ve user khong co mat khauuuu
      const { matKhau, ...result } = user;
      return result;
    }
    return null;
    // ...result la toan tu dung de sao chep tat ca thuoc tinh con lai cua 1 object(tru nhung thuoc tinh bi tach rieng)
  }

  //nhận một tham số user kiểu User (tức là một đối tượng đã đăng nhập thành công, ví dụ sau khi được kiểm tra trong validateUser()).
  login(user: any) {
    //payload là dữ liệu muốn nhúng vào JWT (token).
    const payload = { username: user.tenNguoiDung, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
    //this.jwtService.sign(payload) sẽ:
    // Mã hóa payload thành chuỗi JWT
    // Gồm 3 phần: Header, Payload, Signature
  }
}
