import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";
import { betterAuth } from "better-auth";
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("book-bridge");

export const auth = betterAuth({
 database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
 }),
 emailAndPassword: { 
    enabled: true, 
  }, 
     socialProviders:{
    google:{
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
}
});