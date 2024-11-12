'use client'


import { useState } from 'react';

import RightIcon from "@/components/icons/RightIcon";
import grabUsername from "@/actions/grabUsername";


export default function UsernameForm({desiredUsername}){
    const [username, setUsername] = useState(desiredUsername || "");

    const handleChange = (e) => {
        setUsername(e.target.value);
    }
    return(
        <form action={grabUsername}>
        <h1 className="text-4xl font-bold text-center mb-2 mt-10">
          Choissisez votre nom d&apos;utilisateur
        </h1>
        <p className="text-center mb-6 text-gray-500">
          Choississez votre psoeudo
        </p>

        <div className="max-w-xs mx-auto">
          <input
            name="username"
            className="block p-2 mx-auto border w-full mb-2 text-center"
            type="text"
            defaultValue={desiredUsername}
            placeholder="username"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4  mx-auto w-full flex gap-2 items-center justify-center"
          >
            <span>Accepter</span>
            <RightIcon />
          </button>
        </div>
      </form>
    )
}