import axios from "axios"
import ApiConstants from "../constants/ApiConstants"


const AuthRequest=axios.create({
    baseURL:ApiConstants.BackendApi.baseurl
})

const register=async(user)=>{
    if(!user.username||!user.email||!user.password){
        return{
            status:false,
            message:"all field required"
        }
    }
    try{
        let requestbody={
            username:user.username,
            email:user.email,
            password:user.password
        }
        let registerResponse=await AuthRequest.post(ApiConstants.BackendApi.REGISTER,requestbody)
        console.log(registerResponse.data)
        return registerResponse.data

    }catch(error){
        console.log(error)

    }
}
const userExist=async(type,value)=>{
    try {
        let params={[type]:value}
        let userExistResponse=await AuthRequest.get(ApiConstants.BackendApi.USEREXIST,{params},)
        console.log(userExistResponse.data);
        return userExistResponse.data;
    

        
    } catch (error) {
        console.log(error)
        return{
            status:false,message:"oops"
        }
        
    }
}

const login=async(user)=>{
    if(!user.username||!user.password){
        return{
            status:false,
            message:"all field required"
        }
    }
    try{
        let requestbody={
            username:user.username,
            password:user.password
        }
        let loginResponse=await AuthRequest.post(ApiConstants.BackendApi.LOGIN,requestbody)
        console.log(loginResponse.data)
        return loginResponse.data

    }catch(error){
        console.log(error)

    }
}
export default{register,userExist,login}