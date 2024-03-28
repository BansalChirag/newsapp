import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { logout as logoutApi} from "./apiAuth";
import toast from "react-hot-toast";


const useLogout = () => {
  const navigate = useNavigate();
  
  const queryClient = useQueryClient();
  const{mutate:logout, isLoading} = useMutation({
    mutationFn:logoutApi,
    onSuccess:()=>{       
        queryClient.removeQueries(); 
        navigate('/sign-in',{replace:true})
        toast.success("Successfully logout.");
    }
  })

  return {logout,isLoading}
}

export default useLogout