import {UserDTO} from "../dto/UserDTO";
import {JWT_EXPIRES_IN, JWT_SECRET} from "../config/env";
import jwt, {Secret} from "jsonwebtoken";

const generateAccessToken = async (user:UserDTO) => {

    return jwt.sign({user: user}, JWT_SECRET as Secret, {expiresIn: '1w'})
    // return jwt.sign({user: user.toJSON()}, JWT_SECRET as Secret, {expiresIn: JWT_EXPIRES_IN});

}

export default generateAccessToken;