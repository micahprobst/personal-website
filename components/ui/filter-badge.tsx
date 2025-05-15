import { useState } from "react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

export default function FilterBadge({
  keyWord,
  count,
  filter,
  setFilter,
}: {
  keyWord: string;
  count: number;
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const highlighted = filter.includes(keyWord);

  return (
    <Badge
      variant={"outline"}
      className={cn("cursor-pointer", highlighted && "!bg-gray-200")}
      onClick={() => {
        if (highlighted) {
          setFilter(filter.filter((item) => item !== keyWord));
        } else {
          setFilter([...filter, keyWord]);
        }
      }}
    >
      {keyWord}
      <span className="ml-1 opacity-50">{count}</span>
    </Badge>
  );
}
