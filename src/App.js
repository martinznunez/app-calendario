import React from "react";

import { Provider } from "react-redux";
import store from "./store";
import Calendario from "./components/Calendario";
import styled from "@emotion/styled";

const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContainerCalendario = styled.div`
  @media screen and (min-width: 1800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
`;

const ContainerTitulo = styled.div`
  color: #fff;
`;

function App() {
  return (
    <>
      <Provider store={store}>
        <ContainerGeneral>
          <ContainerTitulo>
            <h1>CALENDARIO</h1>
          </ContainerTitulo>
        </ContainerGeneral>

        <ContainerCalendario>
          <Calendario />
        </ContainerCalendario>
      </Provider>
    </>
  );
}

export default App;
