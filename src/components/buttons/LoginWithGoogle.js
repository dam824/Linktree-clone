'use client'

import { FaGoogle } from "react-icons/fa";
import {signIn} from "next-auth/react";

export default function LoginWithGoogle() {
    return (
        <div>
        <button onClick={()=> signIn('google') } className="bg-white shadow text-center w-full py-4 flex items-center gap-2 justify-center">
          <FaGoogle className="text-2xl" />
          <span>Sign In With Google</span>
        </button> 
        </div>
    )
}