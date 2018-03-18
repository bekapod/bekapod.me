import React from "react";
import styled from "styled-components";
import PageContent from "../components/PageContent";

const StyledPageContent = styled(PageContent)`
  text-align: center;
`;

const GiantEmoji = styled.div`
  font-size: 100px;
`;

export default () => (
  <StyledPageContent>
    <h1>Not Found</h1>
    <GiantEmoji>
      <span role="img" aria-label="Sad emoji">
        😢
      </span>
    </GiantEmoji>
  </StyledPageContent>
);
