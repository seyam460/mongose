import { registerService , loginService } from "../../service/UserService.js"

// Register controller 

export const registerController = async(req , res)=> {
    let result = await registerService(req ,res)
    return res.json(result)
}

// Login controller 
export const loginController = async(req , res)=> {
    let result = await loginService(req ,res)
    return res.json(result)
};


// read user controller 
export const readUserController = async(req , res)=> {
    let result = await readUserService(req ,res)
    return res.json(result)
};
