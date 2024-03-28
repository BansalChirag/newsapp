import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from './apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const useLogin = () => {

  const navigate = useNavigate()
  const queryClient = useQueryClient()
   const {mutate:login,isPending:isLogin} = useMutation({
        mutationFn:({email,password})=>loginApi({email,password}),
        onSuccess:(user)=>{
          console.log(user)
            queryClient.setQueryData(['user'], user.user);
            toast.success("Login Successfully")
            navigate('/',{replace:true})
        },
        onError:err=>{
            console.log("ERROR in useLogin : ",err)
            toast.error("Incorrect credentials")
        }
  })

  return {login,isLogin}
}

export default useLogin