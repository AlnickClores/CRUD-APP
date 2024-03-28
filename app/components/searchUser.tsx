"use client";

import React, { useState } from "react";

interface User {
  email: string;
  username: string;
  password: string;
}

interface Props {
  userInfo: User[] | undefined;
}

const SearchUser: React.FC<Props> = ({ userInfo = [] }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchQuery) {
      setIsSearchClicked(true);
      const filtered = userInfo.filter(
        (user) =>
          user &&
          typeof user === "object" &&
          user.username &&
          user.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  const handleReset = () => {
    setIsSearchClicked(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">Search User</h1>
      <input
        type="text"
        placeholder="Type User here"
        className="input input-bordered w-full max-w-xs"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className="btn btn-active btn-ghost" onClick={handleSearchClick}>
        Search
      </button>
      <button className="btn btn-active btn-ghost" onClick={handleReset}>
        Reset
      </button>
      {isSearchClicked && (
        <>
          {filteredUsers.length > 0 ? (
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((data, index) => (
                  <tr key={index}>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No user data matching the search query</p>
          )}
        </>
      )}
    </div>
  );
};

export default SearchUser;
