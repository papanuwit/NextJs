
"use client";
import CreateButton from '@/components/createpost';
import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface User {
  username: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/posts');
        if (response.ok) {
          const data = await response.json();
          
          setPosts(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchUser = async () => {
      try {
        const userResponse = await fetch('/api/user');
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
    fetchUser();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Posts</h1>
      {user && <p>Welcome, {user.username}!</p>}
      <ul>
        {posts !== null &&
          posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
          <CreateButton/>
      </ul>
    </div>
  );
}
