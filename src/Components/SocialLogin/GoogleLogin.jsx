import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogle = () => {
      googleSignIn()
      .then(() => {
           navigate('/')
      })
    }
    return (
        <div>
            <button onClick={handleGoogle} className="btn w-full btn-outline">
            <FcGoogle />
                Google
            </button>
        </div>
    );
};

export default GoogleLogin;