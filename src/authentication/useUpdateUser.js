import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCurrentUser } from './apiAuth';
import toast from 'react-hot-toast';

const useUpdateUser = () => {

    const queryClient = useQueryClient();

    const { mutate: updateUser, isLoading: isUpdating } = useMutation({
        mutationFn:updateCurrentUser,
        onSuccess:({user})=>{
            
            queryClient.setQueryData(["user"], user);
            // queryClient.invalidateQueries({queryKey:["user"]})
        },
        onError: (err) =>{ 
            console.log(err)
            toast.error("Error while updating.Please try after some time.")
        }
    })

    return {updateUser,isUpdating}
}

export default useUpdateUser