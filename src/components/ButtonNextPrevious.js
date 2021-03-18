// import React from "react";

// import { useSelector, useDispatch } from "react-redux";
// import { monthNext, monthPrevious } from "../actions/CalendarioActions";
// import styled from "@emotion/styled";

// const ContainerBtn = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
// `;

// const Button = styled.button`
//   width: 130px;
//   padding: 10px;
//   color: palevioletred;
//   cursor: pointer;
//   color: #fff;
//   font-weight: bold;
//   border: 2px solid;
//   ${(props) => (props.disabled ? "background: red " : "background: blue")};
// `;

// const ButtonNextPrevious = () => {
//   const dispatch = useDispatch();

//   const months = useSelector((state) => state.data.months);

//   const handClickNext = () => {
//     const getMonthNext = months + 1;

//     dispatch(monthNext(getMonthNext));
//   };

//   const handClickPrevious = () => {
//     const getMonthPrevious = months - 1;

//     dispatch(monthPrevious(getMonthPrevious));
//   };

//   return (
//     <ContainerBtn>
//       {months <= 1 ? (
//         <Button disabled={true}>Anterior</Button>
//       ) : (
//         <Button onClick={handClickPrevious} disabled={false}>
//           Anterior
//         </Button>
//       )}

//       {months > 11 ? (
//         <Button disabled={true}>Próximo</Button>
//       ) : (
//         <Button onClick={handClickNext} disabled={false}>
//           Proximo
//         </Button>
//       )}
//     </ContainerBtn>
//   );
// };

// export default ButtonNextPrevious;
