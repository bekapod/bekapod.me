import styled from "styled-components";
import { media } from "../../helpers/media";

export default styled.div`
  display: flex;
  flex-direction: column;

  ${media.medium`
    flex-direction: row;
    justify-content: space-between;
  `};
`;
