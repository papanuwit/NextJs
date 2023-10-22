"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formValue.username,
          password: formValue.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data) {
          const authResponse = await signIn("credentials", {
            username: formValue.username,
            password: formValue.password,
            redirect: false,
            callbackUrl: "/posts", 
          });

          if (authResponse?.ok) {
            router.push("/posts");
          } else {

            console.error("Authentication failed");
          }
        } else {

          console.error("Authentication failed");
        }
      } else {
        
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  return (
    <>
      
      <form onSubmit={onSubmit}>
        <div className="container">


      <div className="row">


     
        <h1 className="mt-4"> Signin </h1>
        <div className="col-md-4">
          
        </div>
          <label htmlFor="username">Username</label>
          <input
          className="form-control mb-2"
            type="text"
            name="username"
            placeholder="username"
            value={formValue.username}
            onChange={handleChange}
            required
          />
     

          <label htmlFor="password">Password</label>
          <input
           className="form-control"
            type="password"
            name="password"
            placeholder="xxx"
            value={formValue.password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-primary w-100 mt-4" type="submit">
          Signin
        </button>
      </div>
        </div>
      </form>
    </>
  );
}
//<Link href="/signup">
//<button className="btn btn-primary">Sign Up</button>
//</Link>