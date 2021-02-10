import React, { useState } from "react";
import styled from "@emotion/styled";
import Chip from "@material-ui/core/Chip";

const ContainerNotaShow = styled.div`
  margin-bottom: 2px;
`;

const Nota = ({ text, onClick }) => {
  const [eliminarNota, setEliminarNota] = useState(false);

  const handleDelete = (text) => {
    setEliminarNota(true);
  };
  return (
    <>
      {eliminarNota === true ? null : (
        <ContainerNotaShow>
          <Chip
            onClick={onClick}
            label={text}
            clickable
            color="primary"
            onDelete={() => handleDelete(text)}
          />
        </ContainerNotaShow>
      )}
    </>
  );
};

export default Nota;
