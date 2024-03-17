"use client"; // render on client side
import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <Link href="/registration">
      <button className="btn btn-outline btn-info">Get Started</button>
    </Link>
  );
};

export default Button;
