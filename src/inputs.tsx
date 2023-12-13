import styled from "styled-components";
import InputMask from "react-input-mask";

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
}) {
  console.log(props.year);
  const Btn = () => {
    const cleanedNumber = props.number.replace(/0/g, "_");
    const cleanedMonth = props.month.replace(/0/g, "_");
    const cleanedYear = props.year.replace(/0/g, "_");
    const cleanedZipCode = props.zipCode.replace(/0/g, "_");

    const isInputValid =
      props.name.length > 0 &&
      cleanedNumber.length === 19 &&
      cleanedYear.length === 2 &&
      cleanedZipCode.length === 3 &&
      cleanedMonth.length === 2;

    return isInputValid ? props.setPage(1) : props.setPage(0);
  };
  return (
    <Main>
      <FirstInput>
        <CardHolderName>Cardholder Name</CardHolderName>
        <InputOfName
          placeholder="e.g. Jane Appleseed"
          type="text"
          onChange={(e) => props.setName(e.target.value)}
        ></InputOfName>
      </FirstInput>
      <SecondInput>
        <CardNumberP>Card Number</CardNumberP>
        <InputMask
          mask="9999 9999 9999 9999"
          onChange={(e) => props.setNumber(e.target.value)}
          placeholder="e.g. 1234 5678 9123 0000 "
          pattern="\d{16}"
          required
        ></InputMask>
      </SecondInput>
      <DateAndCvc>
        <MonthAndYears>
          <SmallText>Exp. Date (MM/YY)</SmallText>
          <TwoInput>
            <InputMask
              placeholder="MM"
              mask="99"
              onChange={(e) => props.setMonth(e.target.value)}
            ></InputMask>
            <InputMask
              placeholder="YY"
              mask="99"
              onChange={(e) => props.setYear(e.target.value)}
            ></InputMask>
          </TwoInput>
        </MonthAndYears>
        <CvcCode>
          <CvcSpan>CVC</CvcSpan>
          <InputMask
            placeholder="e.g. 123"
            onChange={(e) => props.setZipCode(e.target.value)}
            mask="999"
          >
            {}
          </InputMask>
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
const InputOfName = styled.input`
  border-radius: 8px;
  border: 1px solid var(--Light-Grey, #dfdee0);
  background: var(--White, #fff);
  width: 327px;
  height: 45px;
  &::placeholder {
    color: var(--Deep-Violet, #21092f);
    font-size: 18px;
    font-weight: 500;
    padding: 11px 0 11px 16px;
    opacity: 0.25;
  }
  @media screen and (min-width: 1440px) {
    width: 381px;
  }
`;
const SecondInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  input {
    border-radius: 8px;
    background: var(--White, #fff);
    width: 327px;
    height: 45px;
    font-size: 18px;
    border: 1px solid var(--Light-Grey, #dfdee0);
    &::placeholder {
      color: var(--Deep-Violet, #21092f);
      font-size: 18px;
      font-weight: 500;
      padding: 11px 0 11px 16px;
      opacity: 0.25;
    }
    @media screen and (min-width: 1440px) {
      width: 381px;
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
const TwoInput = styled.div`
  display: flex;
  gap: 8px;
  input {
    border-radius: 8px;
    border: 1px solid var(--Light-Grey, #dfdee0);
    background: var(--White, #fff);
    width: 72px;
    height: 45px;
    &::placeholder {
      color: var(--Deep-Violet, #21092f);
      font-size: 18px;
      opacity: 0.25;
      padding: 11px 0 11px 16px;
    }
    @media screen and (min-width: 1440px) {
      width: 80px;
    }
  }
`;
const CvcCode = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  input {
    border-radius: 8px;
    border: 1px solid var(--Light-Grey, #dfdee0);
    background: var(--White, #fff);
    width: 164px;
    height: 45px;
    &::placeholder {
      opacity: 0.25;
      color: var(--Deep-Violet, #21092f);
      font-size: 18px;
      padding: 11px 0 11px 16px;
    }
    @media screen and (min-width: 1440px) {
      width: 191px;
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
  }
`;
const BtnText = styled.p`
  color: var(--White, #fff);
  font-size: 18px;
`;
