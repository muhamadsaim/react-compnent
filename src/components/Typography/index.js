import styled, { css } from "styled-components";

export const Heading1 = styled.h1`
  font-weight: normal;
  margin: 0;
`;

export const Heading2 = styled.h2`
  font-weight: normal;
  margin: 0;
`;

export const Heading3 = styled.h3`
  font-weight: normal;
  margin: 0;
`;

export const Heading4 = styled.h4`
  font-weight: normal;
  margin: 0;
`;

export const Heading5 = styled.h5`
  font-weight: normal;
  margin: 0;
`;

export const Heading6 = styled.h6`
  font-weight: normal;
  margin: 0;
`;

export const Label = styled.label`
  font-weight: normal;

  color: #b5b5b5;
  margin: 0;
`;

export const Text = styled.p`
  ${({ $small }) => css`
    font-size: ${$small ? "12px" : "14px"};
  `}
  margin: 0;
`;
