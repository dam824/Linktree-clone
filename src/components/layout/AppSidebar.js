'use client';

import LogoutButton from "@/components/buttons/LogoutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoAnalytics, IoArrowBack } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function AppSidebar(){
    const path = usePathname();
    //console.log(path);
    return(
        <nav className="inline-flex mx-auto flex-col text-center mt-20 gap-6  text-gray-700  ">
        <Link 
        href={"/account"}
        className={"flex items-center gap-4 " + (path === '/account' ? 'text-blue-500 ' : '') }>
          <MdOutlineAccountCircle 
          className="text-3xl" />
          <span 
          className="font-medium">
            Settings
            </span>
        </Link>
        <Link 
        href={"/analytics"}
        className={"flex items-center gap-4 " +(path ==='/analytics' ? 'text-blue-500' : '') }
        
        >
          <IoAnalytics 
          className="text-3xl" />
          <span 
          className="font-medium">
            Analytics
            </span>
        </Link>
        <LogoutButton
          iconLeft={true}
          className={"flex items-center  gap-4"}
          iconsize={"text-3xl"}
          font={"font-medium"}
        />
        <Link 
        className="flex items-center gap-4 text-sm text-gray-500 border-t pt-4" 
        href={"/"}>
          <IoArrowBack 
          iconsize={'text-xl'}
          />
          <span className="font-medium">Retour au site</span>
        </Link>
      </nav>
    )
}