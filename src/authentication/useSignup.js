import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "./apiAuth";
import toast from "react-hot-toast";

const useSignup = () => {
  const navigate = useNavigate();

  const { mutate: signup, isPending: isSignup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created. An email has been sent to your email address Please verify your account."
      );
      console.log(user);
    },
    onError: (err) => {
      console.log(err.message);
      if (err.message.includes("already")) {
        toast.error(err.message);
    }else{
        toast.error("Some error occurs during signup. Please try after some time.");
      }
    },
  });
  return { signup, isSignup };
};

export default useSignup;
