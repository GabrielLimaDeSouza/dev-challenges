"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
import { sharonSansRegular, sharonSansBold, circularStd } from "@/utils/fonts";
import ArrowIcon from "@/assets/imgs/two-arrow-icon";
import { useEffect, useState } from "react";
import { PaymentTypes } from "@/interfaces/PaymentTypes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const InputTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #2e3742;
`;

const Input = styled.input`
  width: 10.5rem;
  height: 3.5rem;
  padding: 1rem;
  border-radius: 0.25rem;
  outline: 0;
  border: 0.0625rem solid var(--blacks-greys-medium-gray-3, #d7e0eb);
  background: #fff;
  box-shadow: 0rem 0.5rem 0.25rem 0rem rgba(13, 17, 27, 0.08);
  color: #2e3742;
  font-size: 1rem;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const InputWithOpacity = styled(Input)`
  color: #8c9cad;
`;

const PaymentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PaymentsOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

const PaymentWrapper = styled.div`
  display: flex;
  width: 6rem;
  gap: 8px;
  align-items: center;
`;

const PaymentCheckbox = styled.input`
  border-color: #8c9cad;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 0.125rem solid #8c9cad;
  border-radius: 50%;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #008b57;
  }

  &:checked {
    border: 0.125rem solid #008b57;
  }

  &:checked::before {
    transform: scale(1);
  }
`;

const PaymentCheckboxLabel = styled.label`
  font-size: 1rem;
  color: #2e3742;
`;

const Button = styled.button`
  padding: 1rem;
  width: 9.3125rem;
  height: 3.5rem;
  cursor: pointer;
  background-color: #8c9cad;
  border: 0;
  outline: 0;
  border-radius: 0.5rem;
  border: 1px solid #008b57;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.p`
  color: #fff;
  font-size: 16px;
`;

const FormConversor = () => {
  const router = useRouter();

  const [dollar, setDollar] = useState(0);
  const [stateFee, setStateFee] = useState(0);
  const [payment, setPayment] = useState<PaymentTypes | null>(null);
  const [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    if (dollar && stateFee && payment) {
      setEnableButton(true);
      return;
    }
    setEnableButton(false);
  }, [dollar, stateFee, payment]);

  const handleInputDollar = (e: any) => {
    setDollar(e.target.value);
  };

  const handleInputStateFee = (e: any) => {
    setStateFee(e.target.value);
  };

  const handleInputPayment = (payment: PaymentTypes) => {
    setPayment(payment);
  };

  const handleClickSubmit = () => {
    if (dollar && stateFee && payment) {
      router.push(
        `/results?dollar=${dollar}&stateFee=${stateFee}&payment=${payment}`
      );
    }
  };

  return (
    <Container>
      <InputsContainer>
        <InputWrapper>
          <InputTitle>Dólar</InputTitle>
          <Input
            type="number"
            className={sharonSansRegular.className}
            onChange={handleInputDollar}
          />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Taxa do Estado</InputTitle>
          <InputWithOpacity
            type="number"
            className={sharonSansRegular.className}
            onChange={handleInputStateFee}
          />
        </InputWrapper>
      </InputsContainer>
      <PaymentsContainer>
        <InputTitle>Tipo de compra</InputTitle>
        <PaymentsOptions>
          <PaymentWrapper>
            <PaymentCheckbox
              type="radio"
              name="payment"
              onClick={() => handleInputPayment(PaymentTypes.MONEY_PAYMENT)}
            />
            <PaymentCheckboxLabel
              className={circularStd.className}
              htmlFor="payment"
            >
              Dinheiro
            </PaymentCheckboxLabel>
          </PaymentWrapper>
          <PaymentWrapper>
            <PaymentCheckbox
              type="radio"
              name="payment"
              onClick={() =>
                handleInputPayment(PaymentTypes.CREDIT_CARD_PAYMENT)
              }
            />
            <PaymentCheckboxLabel
              className={circularStd.className}
              htmlFor="payment"
            >
              Cartão
            </PaymentCheckboxLabel>
          </PaymentWrapper>
        </PaymentsOptions>
      </PaymentsContainer>
      <Button
        style={{ backgroundColor: enableButton ? "#008B57" : "#8C9CAD" }}
        onClick={handleClickSubmit}
      >
        <ArrowIcon></ArrowIcon>
        <ButtonText className={sharonSansBold.className}>Converter</ButtonText>
      </Button>
    </Container>
  );
};

export default FormConversor;
