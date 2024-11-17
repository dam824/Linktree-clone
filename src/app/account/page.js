
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/Page";
export default async function AccountPage({ searchParams }) {

  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  
  if (!session) {
    return redirect('/');
  }
  const page = await Page.findOne({owner: session?.user?.email})
  
  if(page){
   
    return(
      <div>Votre slug est : /{page.uri} & votre email est : {page.owner} </div>
    )
  }
  return (
    <div>
   <UsernameForm desireUsername = {desiredUsername} />
    </div>
  );
}
