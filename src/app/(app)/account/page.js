import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose"; // Ajout direct de Mongoose pour test
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function AccountPage({ searchParams }) {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000,
      });
    } catch (error) {
       
      throw new Error("Connexion Mongoose impossible");
    }
  }

  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }

  const desiredUsername = searchParams?.desiredUsername;

  try {
    const page = await Page.findOne({ owner: session?.user?.email });

    if (page) {
      return (
        <div>
          Votre slug est : /{page.uri} & votre email est : {page.owner}
        </div>
      );
    }
  } catch (error) {
    throw new Error("Erreur dans Page.findOne");
  }

  return (
    <div>
      <UsernameForm desireUsername={desiredUsername} />
    </div>
  );
}
