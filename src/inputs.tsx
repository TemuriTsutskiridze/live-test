import styled from "styled-components";
import InputMask from "react-input-mask";
import { useState } from "react";

function Inputs(props: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  zipCode: string;
  setZipCode: React.Dispatch<React.SetStateAction<string>>;
  searchActive: boolean;
  setSearchAcitive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [valid, setValid] = useState<number>(0);
  const Btn = () => {
    const isInputValid =
      props.name.length > 0 &&
      props.number.replace(/_/g, "").length === 19 &&
      props.year.replace(/_/g, "").length === 2 &&
      props.zipCode.replace(/_/g, "").length === 3 &&
      props.month.replace(/_/g, "").length === 2;
    return (
      isInputValid ? props.setPage(1) : props.setPage(0),
      isInputValid ? "" : setValid(1)
    );
  };
  return (
    <Main>
      <FirstInput>
        <CardHolderName>Cardholder Name</CardHolderName>
        <InputOfName
          searchActive={props.name.length === 0 && valid === 1}
          placeholder="e.g. Jane Appleseed"
          type="text"
          onChange={(e) => props.setName(e.target.value)}
        ></InputOfName>
        <ErrorMsg>
          {props.name === "" && valid === 1 ? "Can’t be empty" : ""}
        </ErrorMsg>
      </FirstInput>
      <SecondInput
        searchActive={props.number.replace(/_/g, "").length < 19 && valid == 1}
      >
        <CardNumberP>Card Number</CardNumberP>
        <InputMask
          mask="9999 9999 9999 9999"
          onChange={(e) => props.setNumber(e.target.value)}
          placeholder="e.g. 1234 5678 9123 0000 "
        ></InputMask>
        <ErrorMsgTwo>
          {props.number.replace(/_/g, "").length < 19 && valid === 1
            ? "Wrong format"
            : ""}
        </ErrorMsgTwo>
      </SecondInput>
      <DateAndCvc>
        <MonthAndYears>
          <SmallText>Exp. Date (MM/YY)</SmallText>
          <ForInputs>
            <MonthInput
              searchActive={
                props.month.replace(/_/g, "").length < 2 && valid == 1
              }
            >
              <InputMask
                placeholder="MM"
                mask="99"
                onChange={(e) => props.setMonth(e.target.value)}
              ></InputMask>
            </MonthInput>
            <YearInput
              searchActive={
                props.year.replace(/_/g, "").length < 2 && valid == 1
              }
            >
              <InputMask
                placeholder="YY"
                mask="99"
                onChange={(e) => props.setYear(e.target.value)}
              ></InputMask>
            </YearInput>
          </ForInputs>
          <ErrorMsgThree>
            {props.year.replace(/_/g, "").length < 2 && valid == 1
              ? "Can’t be blank"
              : props.month.replace(/_/g, "").length < 2 && valid == 1
              ? "Can’t be blank"
              : ""}
          </ErrorMsgThree>
        </MonthAndYears>
        <CvcCode searchActive={props.zipCode.length < 3 && valid === 1}>
          <CvcSpan>CVC</CvcSpan>
          <InputMask
            placeholder="e.g. 123"
            onChange={(e) => props.setZipCode(e.target.value)}
            mask="999"
          ></InputMask>
          <ErrorMsgThree>
            {props.zipCode.replace(/_/g, "").length < 3 && valid == 1
              ? "Can’t be blank"
              : ""}
          </ErrorMsgThree>
        </CvcCode>
      </DateAndCvc>
      <Confirm>
        <BtnText onClick={Btn}>Confirm </BtnText>
      </Confirm>
    </Main>
  );
}
export default Inputs;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 91px 24px 45px 24px;
  gap: 20px;
  align-items: center;
  align-self: center;
  @media screen and (min-width: 1440px) {
    gap: 27px;
    padding: 0 24px 86px 24px;
  }
`;

const FirstInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const CardHolderName = styled.p`
  color: var(--Deep-Violet, #21092f);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const InputOfName = styled.input<{ searchActive: boolean }>`
  border: ${(props) =>
    props.searchActive === true
      ? `1px solid var(--Red, #FF5050)`
      : `1px solid var(--Light-Grey, #dfdee0)`};
  border-radius: 8px;
  width: 327px;
  height: 45px;
  background: var(--White, #fff);
  padding: 11px 0 11px 16px;
  font-size: 18px;
  font-weight: 500;
  &::placeholder {
    color: var(--Deep-Violet, #21092f);
    opacity: 0.25;
  }
  @media screen and (min-width: 1440px) {
    width: 381px;
    &:hover {
      border: 1px solid var(--Gradient, #6348fe);
    }
  }
`;
const SecondInput = styled.div<{ searchActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 9px;
  input {
    border: ${(props) =>
      props.searchActive === false
        ? `1px solid var(--Light-Grey, #dfdee0)`
        : ` 1px solid var(--Red, #FF5050)`};
    border-radius: 8px;
    background: var(--White, #fff);
    width: 327px;
    height: 45px;
    padding: 11px 0 11px 16px;
    font-size: 18px;
    &::placeholder {
      color: var(--Deep-Violet, #21092f);
      opacity: 0.25;
    }

    @media screen and (min-width: 1440px) {
      width: 381px;
      &:hover {
        border: 1px solid var(--Gradient, #6348fe);
      }
    }
  }
`;
const CardNumberP = styled.p`
  color: var(--Deep-Violet, #21092f);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const DateAndCvc = styled.div`
  display: flex;
  gap: 11px;
`;
const MonthAndYears = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const SmallText = styled.p`
  color: var(--Deep-Violet, #21092f);
  font-size: 12px;
  letter-spacing: 2px;
`;
const MonthInput = styled.div<{ searchActive: boolean }>`
  display: flex;
  gap: 8px;
  input {
    border: ${(props) =>
      props.searchActive === false
        ? `1px solid var(--Light-Grey, #dfdee0)`
        : ` 1px solid var(--Red, #FF5050)`};
    border-radius: 8px;
    background: var(--White, #fff);
    width: 72px;
    height: 45px;
    padding: 11px 0 11px 16px;
    font-size: 18px;
    &::placeholder {
      color: var(--Deep-Violet, #21092f);
      opacity: 0.25;
    }
    @media screen and (min-width: 1440px) {
      width: 80px;
      &:hover {
        border: 1px solid var(--Gradient, #6348fe);
      }
    }
  }
`;
const CvcCode = styled.div<{ searchActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  input {
    border: ${(props) =>
      props.searchActive === false
        ? `1px solid var(--Light-Grey, #dfdee0)`
        : `1px solid var(--Red, #FF5050)`};
    border-radius: 8px;
    background: var(--White, #fff);
    width: 164px;
    height: 45px;
    padding: 11px 0 11px 16px;
    font-size: 18px;
    &::placeholder {
      opacity: 0.25;
      color: var(--Deep-Violet, #21092f);
    }
    @media screen and (min-width: 1440px) {
      width: 191px;
      &:hover {
        border: 1px solid var(--Gradient, #6348fe);
      }
    }
  }
`;
const CvcSpan = styled.span`
  color: var(--Deep-Violet, #21092f);
  font-size: 12px;
  letter-spacing: 2px;
`;

const Confirm = styled.button`
  border-radius: 8px;
  background: var(--Deep-Violet, #21092f);
  width: 327px;
  height: 53px;
  @media screen and (min-width: 1440px) {
    width: 381px;
    cursor: pointer;
  }
`;
const BtnText = styled.p`
  color: var(--White, #fff);
  font-size: 18px;
`;
const ErrorMsg = styled.p`
  color: var(--Red, #ff5050);
  font-size: 12px;
  font-weight: 500;
`;
const ErrorMsgTwo = styled.p`
  color: var(--Red, #ff5050);
  font-size: 12px;
  font-weight: 500;
`;
const ErrorMsgThree = styled.p`
  color: var(--Red, #ff5050);
  font-size: 12px;
  font-weight: 500;
`;
const YearInput = styled.div<{ searchActive: boolean }>`
  display: flex;
  gap: 8px;
  input {
    border: ${(props) =>
      props.searchActive === false
        ? `1px solid var(--Light-Grey, #dfdee0)`
        : ` 1px solid var(--Red, #FF5050)`};
    border-radius: 8px;
    background: var(--White, #fff);
    width: 72px;
    height: 45px;
    font-size: 18px;
    padding: 11px 0 11px 16px;
    &::placeholder {
      color: var(--Deep-Violet, #21092f);
      opacity: 0.25;
    }
    @media screen and (min-width: 1440px) {
      width: 80px;
      &:hover {
        border: 1px solid var(--Gradient, #6348fe);
      }
    }
  }
`;
const ForInputs = styled.div`
  display: flex;
  gap: 9px;
`;
