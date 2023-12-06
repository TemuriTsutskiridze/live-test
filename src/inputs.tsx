import styled from "styled-components";
function Inputs(props: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Main>
      <FirstInput>
        <CardHolderName>Cardholder Name</CardHolderName>
        <InputOfName placeholder="e.g. Jane Appleseed"></InputOfName>
      </FirstInput>
      <SecondInput>
        <CardNumberP>Card Number</CardNumberP>
        <InputOfNumber placeholder="e.g. 1234 5678 9123 0000"></InputOfNumber>
      </SecondInput>
      <DateAndCvc>
        <MonthAndYears>
          <SmallText>Exp. Date (MM/YY)</SmallText>
          <TwoInput>
            <InputOfMonth placeholder="MM"></InputOfMonth>
            <InputOfYears placeholder="YY"></InputOfYears>
          </TwoInput>
        </MonthAndYears>
        <CvcCode>
          <CvcSpan>CVC</CvcSpan>
          <CvcInput placeholder="e.g. 123"></CvcInput>
        </CvcCode>
      </DateAndCvc>
      <Confirm>
        <BtnText onClick={() => props.setPage(1)}>Confirm </BtnText>
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
`;
const SecondInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const CardNumberP = styled.p`
  color: var(--Deep-Violet, #21092f);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const InputOfNumber = styled.input`
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
`;
const InputOfMonth = styled.input`
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
`;
const InputOfYears = styled.input`
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
`;

const CvcCode = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CvcSpan = styled.span`
  color: var(--Deep-Violet, #21092f);
  font-size: 12px;
  letter-spacing: 2px;
`;
const CvcInput = styled.input`
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
`;
const Confirm = styled.button`
  border-radius: 8px;
  background: var(--Deep-Violet, #21092f);
  width: 327px;
  height: 53px;
`;
const BtnText = styled.p`
  color: var(--White, #fff);
  font-size: 18px;
`;
