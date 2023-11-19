import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface propTypes {
  form: any;
  label?: ReactNode;
  name: string;
  placeholder?: string;
  variant?: string;
  type?: string;
  className?: string;
}

const InputWithLabel = ({
  form,
  label,
  name,
  placeholder,
  variant,
  type,
  className,
}: propTypes) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-foreground mb-[10px]">{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              variant={"outline" || variant}
              className={cn(
                "border-foreground text-foreground rounded-xl",
                className
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputWithLabel;
