import { EmptyIcon } from "@/assets/svg";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Button } from "../ui/button";

const DoChecks = ({
  children,
  emptyText,
  actionText,
  actionFn,
  isEmpty,
}: {
  children: ReactNode;
  isEmpty: boolean;
  emptyText?: string;
  actionText?: string | ReactNode;
  actionFn?: () => void;
}) => {
  if (isEmpty)
    return (
      <div className="flex flex-col items-center gap-5 py-40 px-6">
        <h4>{emptyText && (emptyText || "Empty")}</h4>
        <Image
          src={EmptyIcon}
          alt="empty"
          className="pt-12 pb-6"
          width={230}
          height={220}
        />
        {actionText && <Button onClick={actionFn}>{actionText}</Button>}
      </div>
    );

  return <div>{children}</div>;
};

export default DoChecks;
