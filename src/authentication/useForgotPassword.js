import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { forgotPassword as resetApi } from "./apiAuth";
import toast from "react-hot-toast";

const useFrogtPassword = () => {
  const navigate = useNavigate();

  const { mutate: resetPassword, isPending: isLoading } = useMutation({
    mutationFn: resetApi,
    onSuccess: (user) => {
      toast.success(
        "If you registered using your email and password,you will recieve a password reset email."
      );
      console.log(user);
    },
    onError: (err) => {
      console.log(err.message);
      toast.error("Error in sending mail. Please try after some time.")
    },
  });
  return { resetPassword, isLoading };
};

export default useFrogtPassword;
