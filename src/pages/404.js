import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import PageContent from "../components/PageContent";

const StyledPageContent = styled(PageContent)`
  text-align: center;
`;

const GiantEmoji = styled.div`
  font-size: 100px;
`;

export default () => (
  <StyledPageContent>
    <Helmet>
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <title>🌟 404 Not Found | bekapod.me</title>
      {/* eslint-enable jsx-a11y/accessible-emoji */}
    </Helmet>

    <h1>Not Found</h1>
    <GiantEmoji>
      <span role="img" aria-label="Sad emoji">
        😢
      </span>
    </GiantEmoji>
  </StyledPageContent>
);
