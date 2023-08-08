import { StyledSpinner } from "./Spinner.styled";
import HashLoader from "react-spinners/HashLoader";

export default function Spinner() {
  return (
    <StyledSpinner>
      <HashLoader color="#f5f5f5" />
    </StyledSpinner>
  );
}
