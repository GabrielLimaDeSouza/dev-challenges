"use client";

import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sharonSansBold } from "@/utils/fonts";
import { useQuotationData } from "@/hooks/useQuotationData";
import { PaymentTypes } from "@/interfaces/PaymentTypes";
import GoBackIcon from "@/assets/imgs/go-back-icon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const GoBackButton = styled.button`
  height: 3.5rem;
  width: 7.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #d7e0eb;
  background: #fff;
  box-shadow: 0rem 0.5rem 0.25rem 0rem rgba(13, 17, 27, 0.08);
  outline: 0;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const GoBackButtonText = styled.p`
  color: #2e3742;
  font-size: 16px;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ResultDescription = styled.p`
  color: #45505e;
  font-size: 1.25rem;
`;

const ResultValue = styled.h1`
  color: #00ab63;
  font-size: 4rem;
`;

const ConversionValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ConversionValuesLine = styled.div`
  display: flex;
`;

const ConversionValueDescription = styled.p`
  font-size: 14px;
  color: #6e7e90;
  font-weight: 500;
`;

const ConversionValueResult = styled(ConversionValueDescription)`
  font-weight: 400;
`;

const ResultConversor = () => {
  const { dollarPrice } = useQuotationData();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [finalValue, setFinalValue] = useState<number | null>(0);

  const dollarQnt = Number(searchParams.get("dollar"));
  const stateFee = Number(searchParams.get("stateFee"));
  const paymentType = Number(searchParams.get("payment"));

  const moneyIOF = 1.1;
  const cardIOF = 6.4;

  const calculateFinalMoneyValue = () => {
    const dollarWithFee = dollarQnt * (1 + stateFee / 100);
    const dollarValueWithIof = dollarPrice * (1 + moneyIOF / 100);

    setFinalValue(dollarWithFee * dollarValueWithIof);
  };

  const calculateFinalCardValue = () => {
    const dollarWithFeeAndIof =
      dollarQnt * (1 + stateFee / 100) * (1 + cardIOF / 100);

    setFinalValue(dollarWithFeeAndIof * dollarPrice);
  };

  const calculateFinalValue = () => {
    if (paymentType === PaymentTypes.MONEY_PAYMENT) {
      calculateFinalMoneyValue();
    } else if (paymentType === PaymentTypes.CREDIT_CARD_PAYMENT) {
      calculateFinalCardValue();
    }
  };

  const normalizeValue = (value: number) => {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    calculateFinalValue();
  }, []);

  return (
    <Container>
      <GoBackButton onClick={() => router.push("/")}>
        <GoBackIcon />
        <GoBackButtonText className={sharonSansBold.className}>
          Voltar
        </GoBackButtonText>
      </GoBackButton>

      <ResultWrapper>
        <ResultDescription className={sharonSansBold.className}>
          O resultado do cálculo é
        </ResultDescription>
        <ResultValue>R$ {normalizeValue(Number(finalValue))}</ResultValue>
      </ResultWrapper>

      <ConversionValuesWrapper>
        <ConversionValuesLine>
          <ConversionValueDescription>
            Compra no{" "}
            {paymentType === PaymentTypes.MONEY_PAYMENT ? "dinheiro" : "cartão"}{" "}
            e taxa de&nbsp;
          </ConversionValueDescription>
          <ConversionValueResult>
            {paymentType === PaymentTypes.MONEY_PAYMENT ? moneyIOF : cardIOF}%
          </ConversionValueResult>
        </ConversionValuesLine>

        <ConversionValuesLine>
          <ConversionValueDescription>
            Cotação do dólar:&nbsp;
          </ConversionValueDescription>
          <ConversionValueResult>
            $1,00 = R$ {normalizeValue(dollarPrice)}
          </ConversionValueResult>
        </ConversionValuesLine>
      </ConversionValuesWrapper>
    </Container>
  );
};

export default ResultConversor;
