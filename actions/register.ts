"use server";


import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { error } from "console";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";


export const register =  async (values: z.infer<typeof RegisterSchema>)=> {
    const validatedFields = RegisterSchema.safeParse(values);


    if( !validatedFields.success ){
        return{ error: "Invalid fields!" };
    }
const { email, password, name } = validatedFields.data;
const hashedpassword = await bcrypt.hash(password,10);

const existingUser = await getUserByEmail(email);

if(existingUser){
    return{
        error:"Email already in use!"
    };
}

await db.user.create({
    data:{
        name,
        email,
        password:hashedpassword,
    }, 
});

const verificationToken = await generateVerificationToken(email);

//TODO : Send verification token email
await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token
);


return { success: "Conformation Emails sent!" };

};