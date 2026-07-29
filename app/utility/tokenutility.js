import jwt from "jsonwebtoken";
import { jwt_expire_time , jwt_key } from "../config/config.js";

export const EncodeToken = (email)=> {

    let key = jwt_key
    let expire = jwt_expire_time
    let payload = {email}

    return jwt.sign(payload , key , {expiresIn : expire});


}


export const decodeToken = (token) => {
    try {
        let key = jwt_key;
       let decoded = jwt.verify(token , key);
       return decoded;
    }catch(error) {
      return null ;
    }
}