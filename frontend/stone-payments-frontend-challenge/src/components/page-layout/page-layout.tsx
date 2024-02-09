import React from "react";
import styled from "styled-components";
import Header from "@/components/header/header";
import mask from "@/assets/imgs/mask.png";
import graph from "@/assets/imgs/graph.png";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.5625rem;
  padding: 4rem;
`;

const Container = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
`;

const Mask = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
`;

const Graph = styled.img`
  position: absolute;
  right: 20%;
  bottom: 30%;
  z-index: 2;
`;

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <ContentWrapper>
        <Header />
        {children}
      </ContentWrapper>
      <Mask src={mask.src} />
      <Graph src={graph.src} />
    </Container>
  );
};

export default PageLayout;