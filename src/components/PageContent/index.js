import styled from "styled-components";
import { media } from "../../helpers/media";
import { spacing } from "../../helpers/variables";

export default styled.main`
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  padding: ${spacing.lg}px 0 ${spacing.xl}px;

  ${media.medium`
    width: 65%;
  `};
`;
