import { get } from "http";
import React from "react";

interface Posts {
  id: number;
  name: string;
  username: string;
}

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const posts: Posts[] = await res.json();

  return posts;
};

const UserPosts = async () => {
  const userPosts = await getPosts();

  return (
    <>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {userPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserPosts;
