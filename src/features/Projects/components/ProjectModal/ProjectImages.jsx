import Spinner from "@/components/Spinner/Spinner";
import { breakpoints } from "@/data/breakpoints";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const StyledProjectImages = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const MainImageContainer = styled.div`
  width: 445px;
  height: 400px;
  position: relative;
  border: 1px solid rgb(94, 94, 94);
  border-radius: 10px;
  padding: 10px;
  @media (max-width: ${breakpoints.desktop}) {
    width: 400px;
  }
  @media (max-width: ${breakpoints.laptop}) {
    width: 350px;
  }
`;

const MainImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default function ProjectImages({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentImageSource, setCurrentImageSource] = useState(
    selectedImage.small
  );
  const [loadedImages, setLoadedImages] = useState(() => {
    return new Set();
  });

  useEffect(() => {
    if (loadedImages.has(selectedImage.original)) {
      setCurrentImageSource(() => selectedImage.original);
      return;
    }
    setCurrentImageSource(() => selectedImage.small);
    const tempImage = new Image();
    tempImage.src = selectedImage.original;
    tempImage.addEventListener("load", () => {
      setLoadedImages(() => new Set([...loadedImages, selectedImage.original]));
      setCurrentImageSource(() => tempImage.src);
    });
  }, [selectedImage]);

  return (
    <StyledProjectImages>
      <MainImageContainer>
        {!loadedImages.has(selectedImage.original) && <Spinner />}
        <MainImage src={currentImageSource} alt="" />
      </MainImageContainer>
    </StyledProjectImages>
  );
}
