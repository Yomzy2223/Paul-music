import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { Eye } from "@/assets/svg";
import { Button } from "./button";

const inputVariants = cva(
  "flex h-max w-full rounded-lg border border-input bg-background px-2 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 lg:px-3 lg:py-4",
  {
    variants: {
      variant: {
        default: "rounded-[50px]",
        outline: "bg-transparent text-background border-l-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    const [hidePassword, setHidePassword] = React.useState(true);

    const isPassword = type == "password";
    type = isPassword ? (hidePassword ? "password" : "text") : "text";

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            inputVariants({ variant }),
            className,
            isPassword && "!pr-10"
          )}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <Button
            className="absolute right-3 top-5 lg:top-6"
            variant="ghost"
            size="slim"
            type="button"
            onClick={() => setHidePassword(!hidePassword)}
          >
            <Image src={Eye} alt="hide password" />
          </Button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
