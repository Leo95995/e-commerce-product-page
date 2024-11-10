import plus from "../../assets/images/icon-plus.svg";
import minus from "../../assets/images/icon-minus.svg";
import styled from "styled-components";
import { FAKE_WHITE } from "../../utilities/colors";
import { TABLET } from "../../utilities/queries";

const StyledInput = styled.input`
  width: 60%;
  padding: 0;
  background-color: ${FAKE_WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  border: transparent !important;
  caret-color: transparent !important;
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-align: center;
`;

const InputContainer = styled.div`

  position: relative;
  width: 50%;
  height: 56px;
  border-radius: 12px;
  background-color: ${FAKE_WHITE};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (max-width: ${TABLET}) {
    width: 100%;
    
  }

  & div:hover > img {
    width: 16px;
  }
`;
const TriggerImages = styled.img`
  height: auto;
  width: 12px;
`;

interface InputCust {
  increments: { quant: number; setQuant: (val: number) => void };
}

const CustomizedInput: React.FC<InputCust> = ({ increments }) => {
  const { quant, setQuant } = increments;

  return (
    <>
      <InputContainer>
        <div
          style={{ width: "20%", cursor: "pointer" }}
          onClick={() => {
            quant > 0 && setQuant(quant - 1);
          }}
        >
          <TriggerImages src={minus} loading="lazy" />
        </div>
        <StyledInput disabled placeholder={String(quant)} value={quant} />
        <div
          style={{ cursor: "pointer", width: "20%" }}
          onClick={() => {
            setQuant( quant + 1);
          }}
        >
          <TriggerImages src={plus} loading="lazy" />
        </div>
      </InputContainer>
    </>
  );
};

export default CustomizedInput;
