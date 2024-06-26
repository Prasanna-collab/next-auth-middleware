import * as z from "zod";


export const LoginSchema = z.object({
    email: z
        .string({
            message: "Email must be a string"
        })
        .min(1, { message: "Email is required" })
        .email({ message: "Email is invalid" }),
    password: z
        .string()
        .min(1, { message: "Password is required" }),

})

export const RegisterSchema = z.object({
    email: z
        .string({
            message: "Email must be a string"
        })
        .min(1, { message: "Email is required" })
        .email({ message: "Email is invalid" }),
    password: z
        .string()
        .min(6, { message: "Password must be atleast 6 chars." }),
    name: z.string().min(1, { message: "Name is required" }),
})