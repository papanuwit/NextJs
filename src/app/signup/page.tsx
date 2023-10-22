"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    name: "",
  });
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    });

    if (response.ok) {
      console.log("User created successfully");
      setSignUpSuccess(true);
    } else {
      const data = await response.json();
      if (data.error === "Username is already in use") {
        console.error("Username is already in use");
      } else {
        console.error("User creation failed");
      }
    }
  } catch (error) {
    console.error("Error during user creation:", error);
  }
};
const handleSignin = () => {
  router.push("/signin");
};

  return (
    <> 
      {signUpSuccess ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "80px", fontSize: "1.5rem" }}>
        <p>Signup successful</p>
        <button  style={{marginRight:'12px'}} onClick={handleSignin} className="btn btn-success">
        SignIn
      </button>
      </div>
      ) : (

        <div className="row">

          

       
        <form onSubmit={handleSubmit}>

          <div >
          <h1 className="text-center mt-4"> Signup </h1>
            <label htmlFor="username">Username</label>
            <input
          
              type="text"
              name="username"
              className="form-control mb-2"
              placeholder="username"
              required
              value={formValue.username}
              onChange={handleChange}
            />
          </div>

          <div >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="xxx"
              required
            />
          </div>

          <div >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formValue.name}
              onChange={handleChange}
              className="form-control"
              placeholder="name"
              required
            />
            <button className="btn btn-primary w-100 mt-4" type="submit">
            Sign Up
           </button>
          </div>
        </form>
        </div>
      )}
    </>
  );
}//<Link href="/signin">
//<button className="btn btn-primary">Sign In</button>
//</Link>
