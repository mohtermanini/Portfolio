import Spinner from "@/components/Spinner/Spinner";
import { breakpoints } from "@/data/breakpoints";
import NextImage from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { css, styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const StyledProjectImages = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const MainImageContainer = styled.div`
  height: 400px;
  position: relative;
  border: 1px solid rgb(94, 94, 94);
  border-radius: 10px;
  padding: 10px;
  width: 445px;
  margin: auto;
  @media (max-width: ${breakpoints.desktop}) {
    width: 400px;
  }
  @media (max-width: ${breakpoints.laptop}) {
    width: 350px;
  }
  @media (max-width: 489px) {
    width: 250px;
  }
  @media (max-width: 400px) {
    width: 200px;
  }
`;

const MainImage = styled(NextImage)`
  object-fit: contain;
`;

const ThumbnailsCarousel = styled.div`
  width: 445px;
  @media (max-width: ${breakpoints.desktop}) {
    width: 400px;
  }
  @media (max-width: ${breakpoints.laptop}) {
    width: 350px;
  }
  @media (max-width: 489px) {
    width: 250px;
  }
  @media (max-width: 400px) {
    width: 200px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(48, 63, 84);
    transform: translateY(10px);
    &::after {
      color: #fff;
      font-size: 12px;
    }
  }
`;

const ThumbnailContainer = styled(({ active, ...props }) => <div {...props} />)`
  height: 80px;
  border: 1px solid rgb(94, 94, 94);
  border-radius: 5px;
  padding: 10px;
  position: relative;
  overflow: hidden;
  @media (max-width: 489px) {
    width: 150px;
    margin: auto;
  }
  ${({ active }) => {
    if (active) {
      return css`
        border-color: #fff;
      `;
    } else {
      return css`
        &:hover {
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
            transition: all 200ms linear;
            background-color: rgba(0, 0, 0, 0.4);
          }
        }
      `;
    }
  }}
`;

const Thumbnail = styled(NextImage)`
  object-fit: cover;
  padding: 10px;
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
    if (loadedImages.has(selectedImage.original.src)) {
      setCurrentImageSource(() => selectedImage.original.src);
      return;
    }
    setCurrentImageSource(() => selectedImage.small.src);
    const tempImage = new Image();
    tempImage.src = selectedImage.original.src;
    tempImage.addEventListener("load", () => {
      setLoadedImages(
        () => new Set([...loadedImages, selectedImage.original.src])
      );
      setCurrentImageSource(() => tempImage.src);
    });
  }, [selectedImage]);

  function onClickThumbnail(image) {
    setSelectedImage(() => image);
  }

  return (
    <StyledProjectImages>
      <MainImageContainer>
        {!loadedImages.has(selectedImage.original.src) && <Spinner />}
        <a href={currentImageSource} target="_blank">
          <MainImage src={currentImageSource} alt="" fill />
        </a>
      </MainImageContainer>
      <ThumbnailsCarousel>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation]}
          navigation
          breakpoints={{
            490: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            [breakpoints.mobile.substring(0, breakpoints.mobile.length - 2)]: {
              spaceBetween: 40,
              slidesPerView: 3,
            },
            [breakpoints.desktop.substring(0, breakpoints.desktop.length - 2)]:
            {
              slidesPerView: 4,
            },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.thumbnail.src}>
              <ThumbnailContainer
                active={selectedImage === image}
                onClick={() => {
                  onClickThumbnail(image);
                }}
              >
                <Thumbnail src={image.thumbnail.src} alt="" fill />
              </ThumbnailContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </ThumbnailsCarousel>
    </StyledProjectImages>
  );
}
