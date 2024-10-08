import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message:"Email is Required"
    }),
    password:z.string().min(1,{
       message:"Password is Required"
    }),
    code:z.optional(z.string()),
});


export const ResetSchema = z.object({
    email: z.string().email({
        message:"Email is Required"
    }),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message:"Minimum of 6 characters Required",
    }),
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message:"Email is Required"
    }),
    password:z.string().min(6,{
       message:"Minimum six characters required"
    }),
    name: z.string().min(1,{
        message:"Name is required",
    })
});