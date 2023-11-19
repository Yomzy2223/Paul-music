import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectWithLabel = ({
  name,
  label,
  placeholder,
  options,
  error,
  value,
  onSelect,
}: {
  name: string;
  label?: string;
  placeholder?: string;
  options: any[];
  error?: string;
  value?: string;
  onSelect: (arg: string) => void;
}) => {
  return (
    <div className="space-y-[10px]">
      <label className="text-foreground">{label}</label>
      <Select onValueChange={onSelect} value={value} defaultValue="">
        <SelectTrigger className="min-w-[180px] w-full ">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((el: string, i: number) => (
              <SelectItem key={i} value={el}>
                {el}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && <div>{error}</div>}
    </div>
  );
};

export default SelectWithLabel;
