import styled from "styled-components";
import backgroundColor from "./assets/bg-main-mobile.png";
import BgCardBack from "./assets/bg-card-back.png";
import BgCardFront from "./assets/bg-card-front.png";
import Circle from "./assets/card-logo.svg";
function Card() {
  return (
    <Header>
      <TwoCard>
        <BackCard>
          <FirstCardImage src={BgCardBack} />
          <ZipCode>000</ZipCode>
        </BackCard>
        <FrontCard>
          <SecondCardImg src={BgCardFront} />
          <TwoCircle src={Circle} />
          <CardProperties>
            <CardNumber>0000 0000 0000 0000</CardNumber>
            <NameAndDate>
              <Name>JANE APPLESEED</Name>
              <Date>00/00</Date>
            </NameAndDate>
          </CardProperties>
        </FrontCard>
      </TwoCard>
    </Header>
  );
}
export default Card;
const Header = styled.div`
  background-image: url(${backgroundColor});
  min-height: 240px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 32px 16px 0 17px;
`;
const TwoCard = styled.div`
  display: flex;
  flex-direction: column;
`;
const FirstCardImage = styled.img`
  height: 157px;
`;
const BackCard = styled.div`
  display: flex;
  justify-content: end;
`;
const ZipCode = styled.div`
  position: absolute;
  top: 103px;
  color: var(--White, #fff);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  right: 51px;
`;
const FrontCard = styled.div`
  position: absolute;
  top: 120px;
`;
const SecondCardImg = styled.img`
  height: 156.208px;
  border-radius: 6px;
  background: linear-gradient(164deg, #6348fe 4.74%, #610595 88.83%);
`;
const TwoCircle = styled.img`
  height: 30px;
  z-index: 1;
  position: absolute;
  top: 12px;
  left: 14px;
`;
const CardProperties = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  padding: 0 0 25px 19px;
  gap: 17px;
`;
const CardNumber = styled.span`
  color: var(--White, #fff);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2.2px;
`;
const NameAndDate = styled.div`
  display: flex;
  gap: 124px;
`;
const Name = styled.p`
  color: var(--White, #fff);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1.286px;
`;
const Date = styled.p`
  color: var(--White, #fff);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1.286px;
`;
