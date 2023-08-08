import React, { Fragment, useEffect, useRef, useState } from "react";
import { useProjects } from "../../contexts/ProjectsProvider";
import { categories } from "../../data/projects";
import {
  MobileCategoriesList,
  CategoryButton,
  CategoryTitle,
  DesktopMenu,
  HamburgerButton,
  MobileCategoryTitle,
  MobileMenu,
  StyledProjectsSidebar,
  MobileCategoryButton,
} from "./ProjectsSidebar.elements";
import { RxHamburgerMenu } from "react-icons/rx";

export default function ProjectsSidebar() {
  const { selectedCategory, setSelectedCategory } = useProjects();
  const [categoriesListHeight, setCategoriesListHeight] = useState(0);
  const categoriesListRef = useRef();

  function onClickCategoryButton(category) {
    if (category === selectedCategory) return;
    setSelectedCategory(category);
    if (categoriesListHeight > 0) {
      setCategoriesListHeight(0);
    }
  }

  function onClickHamburgerButton() {
    if (categoriesListHeight > 0) {
      setCategoriesListHeight(0);
      return;
    }
    setCategoriesListHeight(
      parseInt(categoriesListRef.current.scrollHeight, 10)
    );
  }

  return (
    <StyledProjectsSidebar>
      <DesktopMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.name}
            active={category.name === selectedCategory}
            onClick={() => {
              onClickCategoryButton(category.name);
            }}
          >
            <CategoryTitle>{category.name}</CategoryTitle>
          </CategoryButton>
        ))}
      </DesktopMenu>
      <MobileMenu>
        <MobileCategoryTitle>{selectedCategory}</MobileCategoryTitle>
        <MobileCategoriesList
          listHeight={categoriesListHeight}
          ref={categoriesListRef}
        >
          {categories.map((category) => (
            <Fragment key={category.name}>
              {category.name !== selectedCategory && (
                <MobileCategoryButton
                  onClick={() => {
                    onClickCategoryButton(category.name);
                  }}
                >
                  <CategoryTitle>{category.name}</CategoryTitle>
                </MobileCategoryButton>
              )}
            </Fragment>
          ))}
        </MobileCategoriesList>
        <HamburgerButton onClick={onClickHamburgerButton}>
          <RxHamburgerMenu />
        </HamburgerButton>
      </MobileMenu>
    </StyledProjectsSidebar>
  );
}
