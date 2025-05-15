"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

interface LogoLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  logoLight?: string;
  logoDark?: string;
}

const LogoLink = React.forwardRef<HTMLAnchorElement, LogoLinkProps>(
  ({ logoLight, logoDark, children, ...props }, ref) => {
    const { theme } = useTheme();

    return (
      <a ref={ref} {...props} className="flex items-center gap-2">
        <span className="whitespace-nowrap">{children}</span>
        {theme === "light" && logoLight && (
          <Image
            src={logoLight ?? ""}
            alt="Logo light"
            width={24}
            height={24}
          />
        )}
        {theme === "dark" && logoDark && (
          <Image src={logoDark ?? ""} alt="Logo dark" width={24} height={24} />
        )}
      </a>
    );
  }
);
LogoLink.displayName = "LogoLink";

export default LogoLink;
