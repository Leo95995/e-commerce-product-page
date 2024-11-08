import "../node_modules/swiper/swiper.css";
import "../node_modules/swiper/swiper-bundle.css";
import MobileSlider from "./components/Sliders/MobileSlider";
import styled from "styled-components";
import { TABLET } from "./utilities/queries";
import { DummyProd } from "./utilities/db";
import { PRIMARY_GRAY } from "./utilities/colors";
const MobileContent = styled.div`
  display: none;
  @media (max-width: ${TABLET}) {
    display: block;
  }
`;

const Pretitle = styled.h4`
  color: ${PRIMARY_GRAY};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.85px;
  margin: 0;
`;

const TitleText = styled.h2`
  font-weight: 900;
  font-size: 28px;
  padding: 0;
  margin: 0;
`;

const Home: React.FC = () => {
  return (
    <>
      <MobileContent>
        <MobileSlider />
        <div style={{ display: "flex", flexDirection: "column", padding:"20px 20px" }}>
          <Pretitle>{DummyProd.text}</Pretitle>
          <TitleText>{DummyProd.title}</TitleText>
          <p style={{color: PRIMARY_GRAY, lineHeight: "25px"}}>{DummyProd.description}</p>
          <p>{DummyProd.fullPrice}</p>
          <p>{DummyProd.discPerc}</p>
          <p>{DummyProd.discPrice}</p>
        </div>
      </MobileContent>
    </>
  );
};

export default Home;
