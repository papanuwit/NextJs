
"use client"
import React, { useState,useEffect } from "react";
import createPost from "../api/create-post/route";
import { useSession } from "next-auth/react";
export default function CreatePostPage() {
  const { data: session } = useSession();
  const [formValue, setFormValue] = useState({
    title: "",
    content: "",
  });
  const [createSuccess, setCreateSuccess] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       await createPost; 
        console.log("Post created successfully");
        setCreateSuccess(true);
       
    } catch (error) {
      console.error("Error during post creation:", error);
    }
  };

  useEffect(()=>{
    if (session && session.user) {
            console.log(session.user.name)
            
    }else{
      window.location.href='/signin';
    }
  },[])

  return (
    <>
      {createSuccess ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "80px", fontSize: "1.5rem" }}>
          <p> created Post successfully!</p>
        </div>
      ) : (


        <div className="row">

            <center>
            <div className="col-md-8">

         <h1 className="mt-4">Create Post </h1>
  
       
        <form onSubmit={handleSubmit}>
          <div className="mb-2" >
            
            <label>Title</label>
            
            <input
              placeholder="titile"
              type="text"
              name="title"
              className="form-control"
              required
              value={formValue.title}
              onChange={handleChange}
            />

          </div>
          <div >
            <label>Content</label>
            <textarea
              name="content"
              value={formValue.content}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="input your content."
            />
          </div>
          <div >
            <button className="btn btn-success w-100 mt-4" type="submit">
              Create Post
            </button>
          </div>
        </form>
        </div>
        </center>
        </div>
      )}
    </>
  );
}
