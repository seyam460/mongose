import { decodeToken } from "../utility/tokenutility.js";


export default (req , res , next) => {
    let token = req.cookies["Token"];
    let decode = decodeToken(token)

    if(decoded == null) {
        res.status(401).json({status: false , message: "unauthorized"})
    }else {
        let email = decoded.email

        req.headers.email = email;
        next();
        
    }
};

