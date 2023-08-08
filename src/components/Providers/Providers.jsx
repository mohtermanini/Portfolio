"use client";
import ModalProvider from "@/contexts/ModalProvider";
import React from "react";

export default function Providers({ children }) {
  return <ModalProvider>{children}</ModalProvider>;
}
