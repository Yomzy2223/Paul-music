"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import GradientWrapper from "@/container/GradientWrapper";

const Subscribe = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-card/10 flex flex-col justify-center items-center w-full py-28 px-5">
      <h2 className="font-semibold text-5xl text-center">
        Subscribe to our{" "}
        <span className="text-transparent bg-gradient-to-b from-gr-color-2 from-30% to-gr-color-1 bg-clip-text">
          News feed
        </span>
      </h2>
      <p className="text-xl text-accent-foreground mt-4 mb-12 text-center">
        Follow subscribe to know the latest on King Paul
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-center m-auto relative -right-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter email address"
                    {...field}
                    className="pr-20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="relative -left-20 rounded-3xl border border-neutral-400"
          >
            Subscribe
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Subscribe;

const formSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});
