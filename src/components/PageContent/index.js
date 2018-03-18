import styled from "styled-components";
import { media } from "../../helpers/media";

export default styled.section`
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  padding: var(--spacing-lg) 0 var(--spacing-xl);

  ${media.medium`
    width: 65%;
  `};
`;
