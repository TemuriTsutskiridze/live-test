import styled from "styled-components";
import backgroundColor from "./assets/bg-main-mobile.png";
import BgCardBack from "./assets/bg-card-back.png";
import BgCardFront from "./assets/bg-card-front.png";
import Circle from "./assets/card-logo.svg";
import backgroundColorDesk from "./assets/bg-main-desktop.png";
function Card(props: {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  number: number | string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  zipCode: string;
  setZipCode: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Header>
      <TwoCard>
        <BackCard>
          <FirstCardImage src={BgCardBack} />
        </BackCard>
        <ZipCode>{props.zipCode != "" ? props.zipCode : "000"}</ZipCode>
        <FrontCard>
          <SecondCardImg src={BgCardFront} />
          <TwoCircle src={Circle} />
          <CardProperties>
            <CardNumber>
              {props.number != "" ? props.number : "0000 0000 0000 0000"}
            </CardNumber>
            <NameAndDate>
              <Name>{props.name != "" ? props.name : "JANE APPLESEED"}</Name>
              <Date>
                {props.month > "" ? props.month : "00"}
                {"/"}
                {props.year > "" ? props.year : "00"}
              </Date>
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
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    align-items: center;
    background-image: none;
    background-image: url(${backgroundColorDesk});
    padding: 0;
  }
`;
const TwoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 57px;
  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;
const FirstCardImage = styled.img`
  height: 157px;
  @media screen and (min-width: 1440px) {
    width: 447px;
    height: 245px;
  }
`;
const BackCard = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    position: relative;
    left: 258px;
    margin-top: 37px;
  }
`;
const ZipCode = styled.div`
  margin-top: -85px;
  color: var(--White, #fff);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  margin-left: 230px;
  @media screen and (min-width: 1440px) {
    margin-top: -131px;
    font-size: 14px;
    position: relative;
    margin-left: 0;
    left: 619px;
  }
`;
const FrontCard = styled.div`
  position: absolute;
  top: 120px;
  font-size: 14px;
  margin-left: -54px;

  @media screen and (min-width: 1440px) {
    top: inherit;
    margin-top: -245px;
    left: 145px;
    margin-left: 0;
  }
`;
const SecondCardImg = styled.img`
  height: 156.208px;
  border-radius: 6px;
  background: linear-gradient(164deg, #6348fe 4.74%, #610595 88.83%);
  @media screen and (min-width: 1440px) {
    min-width: 447px;
    min-height: 245px;
    border-radius: 10px;
  }
`;
const TwoCircle = styled.img`
  height: 30px;
  z-index: 1;
  position: absolute;
  top: 12px;
  left: 14px;
  @media screen and (min-width: 1440px) {
    width: 84px;
    height: 47px;
    top: 28px;
    left: 32px;
  }
`;
const CardProperties = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  padding: 0 0 25px 19px;
  gap: 17px;
  @media screen and (min-width: 1440px) {
    gap: 25px;
    padding: 0px 0 34px 32px;
  }
`;
const CardNumber = styled.span`
  color: var(--White, #fff);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2.2px;
  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;
const NameAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 245px;
  @media screen and (min-width: 1440px) {
    width: 383px;
  }
`;
const Name = styled.p`
  color: var(--White, #fff);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1.286px;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
const Date = styled.p`
  color: var(--White, #fff);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1.286px;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
