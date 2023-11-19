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
import { doc, setDoc } from "firebase/firestore";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<string>("Single");
  const [genre, setGenre] = useState("Hip-hop/Rap");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "Single",
      link: "",
      genre: "Hip-hop/Rap",
      artiste: "",
      date: "",
    },
  });

  const { getValues, setValue } = form;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const songsRef = doc(db, "songs", values.title);
      await setDoc(songsRef, values, { merge: true });
      console.log("Song added successfully");
      toast({
        description: "Song added successfully",
      });
      form.reset();
    } catch (e: any) {
      toast({
        description: "Error adding song" + e.message,
      });
      console.log("Error adding song" + e.message);
    }
    setLoading(false);
  }

  // Runs when a category is selected
  const onCategorySelect = (selected: string) => {
    setCategory(selected);
    setValue("category", selected);
  };

  // Runs when a genre is selected
  const onGenreSelect = (selected: string) => {
    setGenre(selected);
    setValue("genre", selected);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 max-w-6xl m-auto pt-6 pb-28"
      >
        <div className="flex justify-between items-center gap-6">
          <h3>Songs</h3>
          <div className="flex items-center gap-6">
            <GradientWrapper isButton className="rounded-lg">
              <Button
                variant="outline"
                className="rounded-lg active:scale-100"
                disabled={loading}
              >
                Publish now <PlusIcon />
              </Button>
            </GradientWrapper>
            <GradientWrapper isButton className="rounded-lg">
              <Button
                variant="outline"
                className="rounded-lg active:scale-100"
                type="button"
                disabled={loading}
              >
                Delete
              </Button>
            </GradientWrapper>
          </div>
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
              label="Song Title"
              placeholder="Let it shine"
              className="first-letter:uppercase"
            />
            <SelectWithLabel
              name="category"
              label="Select Song Category"
              placeholder="Single"
              options={["Single", "Feature"]}
              value={category}
              onSelect={onCategorySelect}
            />
            <InputWithLabel
              type="url"
              form={form}
              name="link"
              label="Song Link"
              placeholder="https://www.sportify.com/paul-let-it-shine"
            />
            <SelectWithLabel
              name="genre"
              label="Select Genre Type"
              options={musicGenres}
              value={genre}
              onSelect={onGenreSelect}
            />
            {/* <InputWithLabel
              form={form}
              name="genre"
              label="Genre Type"
              placeholder="Rap"
              className="capitalize"
            /> */}
            <InputWithLabel
              form={form}
              name="artiste(s)"
              label="Artiste Name"
              placeholder="Paul Kellerman"
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
    .string({ required_error: "Enter song title" })
    .min(1, { message: "Enter song title" }),
  category: z
    .string({ required_error: "Select song category" })
    .min(1, { message: "Select song category" }),
  link: z
    .string({ required_error: "Enter song link" })
    .min(1, { message: "Enter song link" }),
  genre: z
    .string({ required_error: "Enter song genre" })
    .min(1, { message: "Enter song genre" }),
  artiste: z
    .string({ required_error: "Enter artiste name" })
    .min(1, { message: "Enter artiste name" }),
  // cover: z
  //   .string({ required_error: "Enter song release date" })
  //   .min(1, { message: "Enter song release date" }),
  date: z
    .string({ required_error: "Enter song release date" })
    .min(1, { message: "Enter song release date" }),
});

const musicGenres = [
  "Pop",
  "Rock",
  "Hip-hop/Rap",
  "Jazz",
  "Blues",
  "Country",
  "Electronic",
  "R&B/Soul",
  "Classical",
  "Reggae",
  "Folk",
  "Indie",
  "Metal",
  "Punk",
  "Funk",
  "Disco",
  "Alternative",
  "Gospel",
  "EDM",
  "World",
];
