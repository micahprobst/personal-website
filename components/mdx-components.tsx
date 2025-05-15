import Image from "next/image";
import CompanyDate from "./ui/company-date";
import { BadgeCollection } from "./ui/badge";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Image,
  CompanyDate,
  BadgeCollection,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
