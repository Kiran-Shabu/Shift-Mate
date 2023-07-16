import { Request , Response } from "express";
import { sign , verify} from "jsonwebtoken";
import { jwtPayloadInterface } from "../types/user.types";
import { authRepository } from "../Repository/userRepository/authRepository.service";

const authRepo = new authRepository ();

export class jwtOptions {
     // create access token with 30 seconds validity
  createJwtAccessToken = async (user: string) =>
  sign({ user }, process.env.JWTPRIVATEKEY as string, {
    expiresIn: "15m",
  });

   // create refresh token with 1 day validity
   createJwtRefreshToken = async (user: jwtPayloadInterface) =>
   sign({ user }, process.env.JWT_REFRESH_TOKEN_SECRET as string, {
     expiresIn: "1d",
   });
}
