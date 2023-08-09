import React from "react";
import { styled } from "styled-components";

const StyledBackgroundFill = styled(({ bgColor, ...props }) => (
  <div {...props} />
))`
  background-color: ${({ bgColor }) => bgColor};
  flex-grow: 1;
`;

export default function BackgroundFill({ color }) {
  return <StyledBackgroundFill bgColor={color} />;
}
