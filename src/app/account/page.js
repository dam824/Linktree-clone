import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function AccountPage(){
    const session = await getServerSession(authOptions)
    return(
        <div>
            Account {session?.user?.name}
        </div>
    )
}