"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const SigninButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSignin = () => {
    router.push("/signin");
  };
  const handleSignOut = async () => {
    await signOut();
    router.push("/signin");
  };
  if (session && session.user) {
    return (
      <>

        <h5 style={{marginRight:'12px'}} >{session.user.name}</h5>

        <button  style={{marginRight:'12px'}}    className="btn btn-danger" onClick={handleSignOut}>
          SignOut
        </button> 

      </>
    );
  }
  return (
    <>
      <button  style={{marginRight:'12px'}} onClick={handleSignin} className="btn btn-success">
        SignIn
      </button>
    </>
  );
};
export default SigninButton;
