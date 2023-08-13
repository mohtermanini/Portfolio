"use client";
import LoaderProvider from "@/contexts/LoaderProvider";
import ModalProvider from "@/contexts/ModalProvider";
import React from "react";

export default function Providers({ children }) {
  return (
    <LoaderProvider>
      <ModalProvider>{children}</ModalProvider>
    </LoaderProvider>
  );
}
