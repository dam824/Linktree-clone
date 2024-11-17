"use client";
import grabUsername from "@/actions/grabUsername";
import RightIcon from "@/components/icons/RightIcon";
import { redirect } from "next/navigation";
import { useState } from "react";
import SubmitButton from "../buttons/SubmitButton";
/* import UsernameFormResult from '../formResults/UsernameFormResult'; */

export default function UsernameForm({ desiredUsername }) {
  const [taken, setTaken] = useState(false);
 

  async function handleSumbit(formData) {
  
    const result = await grabUsername(formData);
  
    setTaken(result === false);
    if(result){
      redirect('/account/'+formData.get('username'));
    }
   
  }

  return (
    <form action={handleSumbit}>
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
        {taken && (
          <div className="bg-red-200 border border-red-500 p-2 text-center mb-2">
            Username deja pris
          </div>
        )}
        <SubmitButton>
        <span>Accepter</span>
        <RightIcon />
        </SubmitButton>
       {/*  <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 disabled:bg-blue-300 text-white disabled:text-gray-200 py-2 px-4  mx-auto w-full flex gap-2 items-center justify-center"
        >
         
        </button> */}
      </div>
    </form>
  );
}
