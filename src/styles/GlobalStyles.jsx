"use client";
import { createGlobalStyle, styled } from "styled-components";
import bgImage from "../assets/images/background.jpg";
import "../assets/css/reset.css";
import { theme } from "@/data/theme";

export const GlobalStyles = createGlobalStyle`
    body {
        min-height: 1000vh;
        background-image: url(${bgImage.src});
        background-size: auto;
        background-repeat: repeat-x;
        background-position: 35% 12%;
        background-attachment: fixed;
        color: ${theme.palette.white};
    }
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
`;
