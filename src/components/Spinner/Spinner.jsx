import { styled } from "styled-components";
import HashLoader from "react-spinners/HashLoader";

const StyledSpinner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Spinner() {
  return (
    <StyledSpinner>
      <HashLoader color="#f5f5f5" />
    </StyledSpinner>
  );
}
