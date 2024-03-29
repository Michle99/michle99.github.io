"use client";

import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

type Props = {
  children: string | React.JSX.Element | React.ReactNode | React.JSX.Element[];
}

export default function Provider({children}: Props) {

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) {
    return (
      <>
        {children}
      </>
    )
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}