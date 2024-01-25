import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCurrentUser } from './apiAuth';
import toast from 'react-hot-toast';

const useUpdateUser = () => {

    const queryClient = useQueryClient();

    const { mutate: updateUser, isLoading: isUpdating } = useMutation({
        mutationFn:updateCurrentUser,
        onSuccess:({user})=>{
            toast.success("User account successfully updated");
            queryClient.setQueryData(["user"], user);
            // queryClient.invalidateQueries({queryKey:["user"]})
        },
        onError: (err) => alert(err.message),
    })

    return {updateUser,isUpdating}
}

export default useUpdateUser