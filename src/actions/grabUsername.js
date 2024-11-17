"use server";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
  

export default async function grabUsername(formData) {
  const username = formData.get("username");
  mongoose.connect(process.env.MONGO_URI);
  const existingPageDoc = await Page.findOne({uri:username})
  
  if(existingPageDoc ){
    return false;
  }else{
    const newPageDoc = await Page.create({ uri: username });
    // Transforme en objet JS simple
    return { id: newPageDoc._id, uri: newPageDoc.uri };
  }
}
