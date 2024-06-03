'use client';
import * as z from "zod";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RegisterSchema } from "@/schemas";
import CardWrapper from "./card-wrapper";
import FormError from "../form-error/form-error";
import FormSuccess from "../form-success/form-success";
import { register } from "@/actions/register";


const RegisterForm = () => {
  //to  get the pending state automatically!.
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name:"",
    }
  });
  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        if (data.error)
          setError(data.error);
        if (data.success)
          setSuccess(data.success)
      })
    })
  }
  return (
    <CardWrapper headerLabel="Create an account"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      showSocial>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6">
          <div className="space-y-4">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => <>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    disabled={isPending}
                    id="name"
                    placeholder="John Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>}>
            </FormField>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => <>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    disabled={isPending}
                    id="email"
                    placeholder="john.doe@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>}>
            </FormField>
        
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => <>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    id="password"
                    disabled={isPending}
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </>}>
            </FormField>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )


}

export default RegisterForm