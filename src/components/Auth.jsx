import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
// import "../styles/Auth.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Auth = () => {
  const signInWithGoogle = async () => {
      try{

        const result = await signInWithPopup(auth, provider);
        console.log(result);
        cookies.set("auth-token", result.user.refreshToken);
      }
      catch(err)
      {
        console.log(err);
      }

  };
  return (
    <div className="">
      <p> Sign In With Google To Continue </p>
      <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
  );
};

export default Auth