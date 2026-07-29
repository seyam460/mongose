import userModel from "../model/userModel.js"
import { EncodeToken } from "../utility/tokenutility.js";


export const registerService = async (req , res) => {

   try {
    let reqbody = req.body

    let data = await userModel.create(reqbody)
    return { status : true, data}

   } catch (error) {

    return { status : false , error: error.tostring()};

   }


};


export const loginService = async (req , res) => {
   try {

      let reqbody = req.body;

      let matchingstage = {
         $match : reqbody
      };

      let projectstage = {
         $project : {
            _id : 1,
            email : 1
         }

      }


      let data = await userModel.aggregate([
        matchingstage , projectstage
      ]);

      if(data.length>0) {
         let token = EncodeToken(data?.[0]?.email)
         // set cookie 
         let option = {
            maxAge : 30 * 24 * 60 * 60 * 1000, // 30 days 
            httponly : true , 
            samesite : "none" ,
            secure :true,
         };

         res.cookie("Token" , token, option);
          return { status: true, token, data : data[0] };
      }else {
         return { status : false , data : data};
      }





      

   } catch (error) {

    return { status : false , error: error.toString() };

   }
};


export const readUserService = (req , res)=> {
   try {
      let email = req.headers.email

      let matchingstage = {
         $match : reqbody
      };

      let projectstage = {
         $project : {
            _id : 1,
            email : 1
         }

      }

      let data = userModel.aggregate([matchingstage]);
      return { status: true , data };

      console.log(email);


   }catch (error) {

    return { status : false , error: error.toString() };

   }

}



