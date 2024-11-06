'use client';
import { MdLogout } from "react-icons/md";
import { signOut } from "next-auth/react";

export default function LogoutButton(){
    return(
        <button className="flex justify-center gap-2 border p-2 px-4 shadow "
        onClick={() => signOut()}>
            <span>Log Out</span>
            <MdLogout className="text-lg"/>
        </button>
    )
}