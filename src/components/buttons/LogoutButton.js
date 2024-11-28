"use client";
import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

export default function LogoutButton({
  className = "flex justify-center gap-2 border p-2 px-4 shadow",
  iconLeft = false,
  iconsize = "text-lg",
  font='font-normal',
}) {
  return (
    <button className={className} onClick={() => signOut()}>
      {iconLeft && <MdLogout className={iconsize} />}
      <span className={font}>Log Out</span>
      {!iconLeft && <MdLogout className={iconsize} />}
    </button>
  );
}
