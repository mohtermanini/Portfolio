"use client";
import React from "react";
import { styled } from "styled-components";

const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export default function Overlay() {
  return <StyledOverlay />;
}
