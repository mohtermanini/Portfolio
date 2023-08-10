import React, { useRef } from "react";
import { styled } from "styled-components";
import { useSelectedProject } from "../../hooks/useSelectedProject";
import TernaryButton from "@/components/Buttons/TernaryButton";
import { useModals } from "@/contexts/ModalProvider";
import ProjectImages from "./ProjectImages";
import ProjectDescription from "./ProjectDescription";
import { breakpoints } from "@/data/breakpoints";

const StyledProjectModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 99;
  -webkit-box-pack: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 50px;
`;

const ModalBody = styled.div`
  position: relative;
  max-height: 100%;
  border: 1px solid rgb(255, 255, 255);
  max-width: 1000px;
  background-color: rgb(30, 30, 30);
  padding: 50px;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  @media (max-width: ${breakpoints.laptop}) {
    padding: 50px 30px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
    aside {
      order: 1;
    }
  }
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0 10px 10px 0;
    background-color: #e7e7e7;
    border: 1px solid #cacaca;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0 10px 10px 0;
    background-color: #363636;
  }
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  button {
    padding: 8px 12px;
  
  }
`;

export default function ProjectModal() {
  const { setShowModal } = useModals();
  const { selectedProject } = useSelectedProject();
  const modalRef = useRef();

  if (selectedProject === null) {
    return null;
  }
  function onClickModalBackground(e) {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  }
  function onClickCloseButton() {
    setShowModal(false);
  }

  return (
    <StyledProjectModal
      ref={modalRef}
      onClick={onClickModalBackground}
    >
      <ModalBody className="modal-body">
        <CloseButtonContainer>
          <TernaryButton onClick={onClickCloseButton}>X</TernaryButton>
        </CloseButtonContainer>
        <ProjectImages images={selectedProject.images} />
        <ProjectDescription
          title={selectedProject.title}
          sections={selectedProject.sections}
          skills={selectedProject.skills}
          link={selectedProject.link}
        />
      </ModalBody>
    </StyledProjectModal>
  );
}
