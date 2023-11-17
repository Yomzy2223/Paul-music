import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all active:scale-95 max-w-max",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-secondary shadow-black/25 text-primary-foreground hover:from-primary/90 hover:to-secondary/90 border-ring",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          " bg-background rounded-2xl hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:shadow-black/25",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "text-primary-foreground font-bold hover:bg-gradient-to-b hover:from-primary hover:to-secondary bg-clip-text hover:text-transparent",
        link: "text-primary underline-offset-4 hover:underline",
        plain: "bg-foreground hover:bg-foreground/90 text-background",
      },
      size: {
        default: "px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "px-10 py-4 rounded-md h-max",
        full: "px-10 py-4 rounded-lg h-max min-w-full",
        icon: "h-10 w-10",
        slim: "h-max w-max",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
