"use client";

import MusicCard from "@/components/cards/MusicCard";
import TourCard from "@/components/cards/TourCard";
import InputWithLabel from "@/components/formFields/inputWithLabel";
import SelectWithLabel from "@/components/formFields/selectWithLabel";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import GradientWrapper from "@/container/GradientWrapper";
import { db } from "@/utils/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, setDoc } from "firebase/firestore";
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
      name: "",
      link: "",
      description: "",
      date: "",
    },
  });

  const { getValues } = form;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const toursRef = doc(db, "tours", values.name);
      await setDoc(toursRef, values, { merge: true });
      console.log("Tour added successfully");
      toast({
        description: "Tour added successfully",
      });
      form.reset();
    } catch (e: any) {
      toast({
        description: "Error adding tour " + e.message,
      });
      console.log("Error adding tour " + e.message);
    }
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col max-w-6xl m-auto pt-6 pb-28"
      >
        <div className="flex justify-between items-center gap-6">
          <h3>Tours</h3>
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
          <div className="flex-1 space-y-5">
            <h4>Preview</h4>
            <TourCard info={getValues()} className="sm:px-3 sm:gap-3 !mt-2" />
          </div>
          <div className="flex-1 space-y-5">
            <InputWithLabel
              form={form}
              name="name"
              label="Tour Name"
              placeholder="Forest hiking"
              className="first-letter:uppercase"
            />
            <InputWithLabel
              type="url"
              form={form}
              name="link"
              label="Tour Link"
              placeholder="https://www.sportify.com/forest-hiking"
            />
            <InputWithLabel
              form={form}
              name="description"
              label="Description"
              placeholder="Describe tour here"
              className="first-letter:uppercase"
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
  name: z
    .string({ required_error: "Enter podcast title" })
    .min(1, { message: "Enter podcast title" }),
  link: z
    .string({ required_error: "Enter podcast link" })
    .min(1, { message: "Enter podcast link" }),
  description: z
    .string({ required_error: "Enter podcast genre" })
    .min(1, { message: "Enter host name(s)" }),
  // cover: z
  //   .string({ required_error: "Enter podcast release date" })
  //   .min(1, { message: "Enter podcast release date" }),
  date: z
    .string({ required_error: "Enter podcast release date" })
    .min(1, { message: "Enter podcast release date" }),
});
