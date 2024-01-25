import {useMutation, useQueryClient} from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { login as loginApi} from "./apiAuth";
import toast from "react-hot-toast";


export function useLogin(){
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const{mutate:login,isLoading} = useMutation({
        mutationFn:({email,password})=>loginApi({email,password}),
        onSuccess:(user)=>{
            queryClient.setQueryData(['user'], user.user);
            console.log(user)
            navigate('/dashboard',{replace:true})
        },
        onError:err=>{
            console.log("ERROR in useLogin : ",err)
            toast.error("Incorrect credentials")
        }
    })

    return {login,isLoading}
}


