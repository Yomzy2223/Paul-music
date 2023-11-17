import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const GradientWrapper = ({
  children,
  className,
  isButton,
}: {
  children: ReactNode;
  className?: string;
  isButton?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[20px] bg-gradient-to-l from-gr-color-1 from-5% via-gr-color-2 to-gr-color-2 to-90% p-[1px]",
        className,
        isButton && "transition-all active:scale-95 active:p-0"
      )}
    >
      {children}
    </div>
  );
};

export default GradientWrapper;
