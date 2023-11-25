"use client";

import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/utils/firebase";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const user = getAuth().currentUser;

  onAuthStateChanged(auth, (user) => (user ? router.push("/web-content") : ""));

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log(user);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        router.push("/web-content");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  return (
    <div className="bg-hero flex flex-col justify-center items-center h-screen p-6">
      <div className="flex flex-col gap-11 w-full max-w-[800px] bg-white rounded-[10px] p-6 lg:px-28 lg:pt-12 lg:pb-8">
        <Form {...form}>
          <h2 className="gradient-text-2">Login</h2>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter email address"
                      {...field}
                      variant="outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                      variant="outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="full"
              className="!mt-11"
              disabled={loading}
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;

const formSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string({ required_error: "Enter your password" }),
});
