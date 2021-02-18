import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { monthNext, monthPrevious } from "../actions/CalendarioActions";
import styled from "@emotion/styled";

const ContainerBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const BtnNext = styled.button`
  width: 130px;
  padding: 10px;
  color: palevioletred;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  border: 2px solid;
  ${(props) => (props.disabled ? "background: red " : "background: blue")};
`;

const BtnProvious = styled.button`
  width: 130px;
  color: #fff;
  cursor: pointer;
  border: 2px solid;
  padding: 10px;
  ${(props) => (props.disabled ? "background: red" : "background: blue")};
`;
const ButtonNextPrevious = () => {
  const dispatch = useDispatch();

  const months = useSelector((state) => state.data.months);

  const handClickNext = () => {
    const getMonthNext = months + 1;

    console.log(getMonthNext);

    dispatch(monthNext(getMonthNext));
  };

  const handClickPrevious = () => {
    const getMonthPrevious = months - 1;

    dispatch(monthPrevious(getMonthPrevious));
  };

  return (
    <ContainerBtn>
      {months <= 1 ? (
        <BtnProvious disabled={true}>Anterior</BtnProvious>
      ) : (
        <BtnProvious onClick={handClickPrevious} disabled={false}>
          Anterior
        </BtnProvious>
      )}

      {months > 11 ? (
        <BtnNext disabled={true}>Proximo</BtnNext>
      ) : (
        <BtnNext onClick={handClickNext} disabled={false}>
          Proximo
        </BtnNext>
      )}
    </ContainerBtn>
  );
};

export default ButtonNextPrevious;
