import styled from "styled-components";
import logo from "@/assets/imgs/logo.png";
import { useEffect, useState } from "react";

const HeaderContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  height: 5.0625rem;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const DateText = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  color: #45505e;
`;

const DisclaimerText = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: #8c9cad;
`;

const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    date
  );
  const day = date.getDay();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHour(getHour());
    }, 1000);
  }, []);

  const getHour = () => {
    return date.toISOString().slice(11, 16);
  };

  const [hour, setHour] = useState(getHour);

  return (
    <HeaderContainer>
      <img src={logo.src} />
      <InformationWrapper>
        <DateWrapper>
          <DateText>
            {day} de {month} {year}
          </DateText>
          <DateText>|</DateText>
          <DateText>{hour} UTC</DateText>
        </DateWrapper>
        <DisclaimerText>
          Dados de câmbio disponibilizados pela Morningstar.
        </DisclaimerText>
      </InformationWrapper>
    </HeaderContainer>
  );
};

export default Header;
