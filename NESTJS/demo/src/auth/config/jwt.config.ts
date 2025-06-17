import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import { JwtModuleAsyncOptions, JwtModuleOptions } from '@nestjs/jwt';

// ✅ Export cho ConfigModule
export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET,
  signOptions: {
    expiresIn: process.env.JWT_EXPIRE_IN,
  },
}));

// ✅ Export thêm function riêng cho JwtModule.registerAsync()
export const jwtModuleConfig: JwtModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    secret: configService.get<string>('JWT_SECRET'),
    signOptions: {
      expiresIn: configService.get<string>('JWT_EXPIRE_IN'),
    },
  }),
};

// export default {
//   asProvider(): JwtModuleAsyncOptions {
//     return {
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => ({
//         secret: configService.get<string>('JWT_SELECT'),
//         signOptions: {
//           expiresIn: configService.get<string>('JWT_EXPIRE_IN'),
//         },
//       }),
//     };
//   },
// };

// registerAs(
//   'jwt',
//   (): JwtModuleOptions => ({
//     secret: process.env.JWT_SECRET,
//     signOptions: {
//       expiresIn: process.env.JWT_EXPIRE_IN,
//     },
//   }),
// );
