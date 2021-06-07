import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 14px;
  color: #8A8B8C;
`;
const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #8A8B8C;
  outline: 0;
  font-size: 20px;
  color: #14161F;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${Label} {
    font-weight: 600;
    font-size: 20px;
    cursor: text;
    top: 20px;
  }

  &:focus {
    padding-bottom: 7px;
    border-bottom-color: #14161F;
  }

  &:focus ~ ${Label} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 14px;
    color: #14161F;
  }
`;

interface IProps {
  label: string;
  name: string;
}
const TextField: FC<IProps> = ({ label, name }) => {
  return (
    <Wrapper>
      <Input id={name} name={name} placeholder={label} />
      <Label htmlFor={name}>{label}</Label>
    </Wrapper>
  )
}

export default TextField;