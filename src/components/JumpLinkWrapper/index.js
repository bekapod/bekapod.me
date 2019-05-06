import styled from "styled-components";
import { media } from "../../helpers/media";
import { spacing } from "../../helpers/variables";

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing.xl}px;

  ${media.medium`
    flex-direction: row;
    justify-content: space-between;
  `};
`;
