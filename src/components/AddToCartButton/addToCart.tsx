import React from "react";
import styled from "styled-components";

interface IAddToCart {
  additionalStyle: React.CSSProperties;
  text?: string;
  icon?: string;
  action: (data: any)=> void 
}

const CustomButton = styled.button<{ color: string }>`
  width: 100%;
  height: 56px;
  cursor: pointer;
  transition: all 200ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  &:hover {
    transform: scale(1.02);
    box-shadow: ${(props) => `0px 12px 50px 0px  ${props.color}`};
    filter:brightness(0.9)
  }
  &:active {
    transform: scale(0.98);
  }
  span{
    font-size: 16px;
  }
`;

const CartLogo = styled.img`

`


const AddToCartButton: React.FC<IAddToCart> = ({
  additionalStyle,
  text,
  icon,
  action,
}) => {
  return (
    <>
      <CustomButton
        color={additionalStyle.background as string}
        style={additionalStyle}
        onClick={action}
      >
        <CartLogo src={icon}/><span>{text}</span>
      </CustomButton>
    </>
  );
};

export default AddToCartButton;
