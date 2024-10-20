"use client";
import React, { useEffect, useState } from "react";

export default function DocumentLoader({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loader = document.querySelector(".initial-loader");
    loader.classList.add("inital-loader-hide");
    loader.addEventListener("transitionend", () => {
      loader.remove();
    });
    setLoading(false);
  }, []);

  if (loading) return null;

  return <>{children}</>;
}
