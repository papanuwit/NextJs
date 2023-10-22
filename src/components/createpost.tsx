"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Createpost = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleCreatepost = () => {
    router.push("/createpost");
  };
  
  return (
    <>
      <button onClick={handleCreatepost} className="btn btn-primary">
        create
      </button>
    </>
  );
};
export default Createpost;
