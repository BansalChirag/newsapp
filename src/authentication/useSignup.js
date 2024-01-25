import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "./apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup(){
    const navigate = useNavigate();
    const{mutate:signup,isLoading} = useMutation({
        mutationFn:signupApi,
        onSuccess:(user)=>{
            console.log(user);
            if(user.error.includes("already")){
                toast.error('User Already registered.')
            }else{
                toast.success('Account Successfully created.')
                navigate('/');
            }
        }
    })
    return {signup,isLoading}
}