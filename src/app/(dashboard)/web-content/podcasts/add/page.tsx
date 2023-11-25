"use client";

import MusicCard from "@/components/cards/MusicCard";
import InputWithLabel from "@/components/formFields/inputWithLabel";
import SelectWithLabel from "@/components/formFields/selectWithLabel";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import GradientWrapper from "@/container/GradientWrapper";
import { db } from "@/utils/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, doc, setDoc } from "firebase/firestore";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const Page = () => {
  const [loading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      link: "",
      hostNames: "",
      date: "",
    },
  });

  const { getValues } = form;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const podcastsRef = doc(collection(db, "podcasts"));
      await setDoc(podcastsRef, values, { merge: true });
      console.log("Podcast added successfully");
      toast({
        description: "Podcast added successfully",
      });
      form.reset();
    } catch (e: any) {
      toast({
        description: "Error adding podcast" + e.message,
      });
      console.log("Error adding podcast" + e.message);
    }
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 max-w-6xl m-auto pt-6 pb-28"
      >
        <div className="flex justify-between items-center gap-6">
          <h3>Podcasts</h3>
          <GradientWrapper isButton className="rounded-lg">
            <Button
              variant="outline"
              className="rounded-lg active:scale-100"
              disabled={loading}
            >
              Publish now <PlusIcon />
            </Button>
          </GradientWrapper>
        </div>

        <div className="flex flex-col-reverse gap-7 md:flex-row">
          <div className="space-y-5">
            <MusicCard variant={2} info={getValues()} />
            <MusicCard info={getValues()} />
          </div>
          <div className="flex-1 space-y-5">
            <InputWithLabel
              form={form}
              name="title"
              label="Podcast Title"
              placeholder="Understanding Yourself"
              className="first-letter:uppercase"
            />
            <InputWithLabel
              type="url"
              form={form}
              name="link"
              label="Podcast Link"
              placeholder="https://www.sportify.com/paul-let-it-shine"
            />
            <InputWithLabel
              form={form}
              name="hostNames"
              label="Host Name(s)"
              placeholder="Paul Kellerman, Peter, & Kyle Johnson"
              className="capitalize"
            />
            {/* <InputWithLabel
              form={form}
              type="file"
              name="cover"
              label="Album cover"
            /> */}
            <InputWithLabel
              form={form}
              type="date"
              name="date"
              label="Release Date"
            />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default Page;

const formSchema = z.object({
  title: z
    .string({ required_error: "Enter podcast title" })
    .min(1, { message: "Enter podcast title" }),
  link: z
    .string({ required_error: "Enter podcast link" })
    .min(1, { message: "Enter podcast link" }),
  hostNames: z
    .string({ required_error: "Enter podcast genre" })
    .min(1, { message: "Enter host name(s)" }),
  // cover: z
  //   .string({ required_error: "Enter podcast release date" })
  //   .min(1, { message: "Enter podcast release date" }),
  date: z
    .string({ required_error: "Enter podcast release date" })
    .min(1, { message: "Enter podcast release date" }),
});
