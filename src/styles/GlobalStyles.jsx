"use client";
import { createGlobalStyle, styled } from "styled-components";
import bgImage from "../assets/images/background.jpg";
import "../assets/css/reset.css";
import "../assets/css/animations.css";
import { theme } from "@/data/theme";

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
      box-sizing: border-box;
    }
    
    body {
        min-height: 100vh;
        background-image: url(${bgImage.src});
        background-size: auto;
        background-repeat: repeat-x;
        background-position: 35% 12%;
        background-attachment: fixed;
        color: ${theme.palette.white};
    }

    hr {
      margin: 0;
    }

    button {
      background-color: transparent;
      border: none;
      color: ${theme.palette.white};
      cursor: pointer;
      border-radius: 5px;
      padding: 10px 20px;
    }

     a {
      color: inherit;
      text-decoration: none;
     }
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  width: 100%;
`;
