import React from "react";

export default function Logo() {
  return (
    <div>
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap ">
        <Logo />
      </span>
    </div>
  );
}
