import React, { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.style["overflow"] = "hidden";
    } else {
      document.body.style["overflow"] = null;
    }
  }, [showModal]);
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  return useContext(ModalContext);
}
