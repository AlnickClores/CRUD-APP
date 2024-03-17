import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Alnick.
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/registration">Register</Link>
          </li>
          <li>
            <details>
              <summary>Pages</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link href="/pages/posts">Posts</Link>
                </li>
                <li>
                  <Link href="/pages/users">Users</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
