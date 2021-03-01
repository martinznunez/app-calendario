import React, { useEffect, useState } from "react";
import { useGetYear } from "./hooks/useGetYear";
import { useGetMonths } from "./hooks/useGetMonths";
import { useGetDays } from "./hooks/useGetDays";
import { useHeaderFecha } from "./hooks/useHeaderFecha";
import Nota from "./Nota";
import ButtonNextPrevious from "./ButtonNextPrevious";
import styled from "@emotion/styled";

import {
  notasActions,
  notaPorDiaActions,
  actualizarNota,
} from "../actions/CalendarioActions";
import { useSelector, useDispatch } from "react-redux";
import { eachDayOfInterval } from "date-fns";

import uuid from "uuid/dist/v4";

import Swal from "sweetalert2";
import Modal from "./Modal";

const ContainerCalendario = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: auto;
`;
const ContainerTitulo = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    color: #fff;
  }
`;
const ContainerDia = styled.div`
  width: 55px;
  background: rgba(34, 34, 34, 0.75);
  display: flex;
  justify-content: center;

  border: solid 1px rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 540px) {
    width: 60px;
  }
  @media screen and (min-width: 590px) {
    width: 75px;
  }
  @media screen and (min-width: 640px) {
    width: 90px;
  }
  @media screen and (min-width: 1200px) {
    width: 122px;
  }
`;

const Dia = styled.div`
  text-align: center;
  padding: 10px;
  display: flex;
  margin: 10px;
  flex-direction: column;

  color: #fff;
  cursor: pointer;

  p {
    margin: 10px;
  }

  @media screen and (min-width: 590px) {
    padding: 20px;
  }
  @media screen and (min-width: 665px) {
    padding: 30px;
    height: 100px;

    p {
      font-size: 1.5rem;
    }
  }
`;

const WrapperNotas = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  text-align: center;
  padding: 10px;
  display: flex;
  margin: 10px;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  cursor: not-allowed;

  p {
    margin: 10px;
  }

  @media screen and (min-width: 590px) {
    padding: 20px;
  }

  @media screen and (min-width: 665px) {
    padding: 30px;
    height: 100px;

    p {
      font-size: 1.5rem;
    }
  }
`;

const ContainerDiasSemana = styled.div`
  display: flex;
  width: 87%;
  flex-wrap: wrap;
  margin: auto;
  padding-top: 30px;
  p {
    margin: auto;
    font-size: 1.1rem;

    color: #fff;
  }
  @media screen and (min-width: 540px) {
    width: 90%;
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (min-width: 665px) {
    width: 90%;

    p {
      font-size: 1.7rem;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
  }
`;

const ContainerGeneralCalendario = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
  @media screen and (min-width: 590px) {
    width: 100%;
    align-items: center;
  }
  @media screen and (min-width: 665px) {
    width: 730px;
  }
  @media screen and (min-width: 1200px) {
    width: 980px;
    padding-bottom: 20px;
  }
`;

const ContainerEdit = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  input {
    padding: 10px;
    margin: 5px;
  }

  button {
    width: 100px;
    text-align: center;
    margin: auto;
    padding: 10px;
    background-color: #282c34;
    color: #fff;
    cursor: pointer;
    border: 4px solid rgba(0, 0, 0, 0.8);
  }
`;

const ContainerFecha = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-items: center;
  border-radius: 16px;
  padding: 2px;
  margin-bottom: 10px;
`;

const TextoFecha = styled.p`
  color: #f8cf61;
  font-size: 1.2rem;
  font-weight: 900;
`;

const MarcadorDia = styled.p`
  color: red;
`;

const Calendario = () => {
  const { year } = useGetYear();
  const { month, setMonth } = useGetMonths();
  const { diaActual } = useGetDays();
  const { fecha } = useHeaderFecha();

  const dispatch = useDispatch();

  const todasLasNotas = useSelector((state) => state.data.notas);

  const totalDias = useSelector((state) => state.data.days);

  const nextMonthValue = useSelector((state) => state.data.nextMonth);

  const previousMonthValue = useSelector((state) => state.data.previousMonth);

  const [gurdarFechasFormato, setGuardarFechasFormato] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [editNota, setEditNota] = useState("");
  const [notaSiendoEditada, setNotaSiendoEditada] = useState(null);

  if (nextMonthValue.length) {
    setMonth(nextMonthValue - 1);
  } else if (previousMonthValue.length) {
    setMonth(previousMonthValue - 1);
  }

  useEffect(() => {
    if (totalDias.length) {
      const obtenerFormatosDias = eachDayOfInterval({
        start: new Date(year, month, -3),
        end: new Date(year, month, 3),
      });

      setGuardarFechasFormato(obtenerFormatosDias);
    }
  }, [month, totalDias, year]);

  const fechasTranformadas = gurdarFechasFormato.map((fecha) =>
    fecha.toISOString()
  );

  const nombreDelDiaSegunFecha = (fecha) =>
    ["dom", "lun", "mar", "miér", "jue", "vier", "sáb", "dom"][
      new Date(fecha).getDay()
    ];

  const id = uuid();

  const onClickEvent = async (numeroDia) => {
    const selecDia = numeroDia;

    const { value: text } = await Swal.fire({
      input: "text",
      inputLabel: `Nota para el dia ${numeroDia}`,
      inputPlaceholder: "Agregue una Nota",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });
    if (text) {
      dispatch(notasActions({ selecDia, text, id }));
    }

    dispatch(notaPorDiaActions(numeroDia));
  };

  const onClickEventOpenModal = (nota) => {
    setEditNota(nota.text);
    setNotaSiendoEditada(nota);
    setShowModal(true);
  };

  const onClickEventEdit = () => {
    const { id } = notaSiendoEditada;
    dispatch(actualizarNota(id, editNota));
    setShowModal(false);
    setNotaSiendoEditada(null);
  };

  const getNotasDelDia = (dia) => {
    const notas = todasLasNotas.filter((nota) => {
      return nota.selecDia === dia;
    });

    return notas.map((nota) => (
      <Nota onClick={() => onClickEventOpenModal(nota)} text={nota.text} />
    ));
  };

  return (
    <>
      <ContainerTitulo>
        <ContainerFecha>
          <TextoFecha>{fecha} </TextoFecha>
        </ContainerFecha>
      </ContainerTitulo>
      <ButtonNextPrevious />
      <ContainerGeneralCalendario>
        <ContainerDiasSemana>
          {fechasTranformadas.map((fecha) => (
            <p> {nombreDelDiaSegunFecha(fecha)} </p>
          ))}
        </ContainerDiasSemana>
        <ContainerCalendario>
          {totalDias.map((numeroDia, index) =>
            Number(numeroDia) === numeroDia && index <= 3 ? (
              <ContainerDia>
                <Container>
                  <p key={index}>{numeroDia}</p>
                </Container>
              </ContainerDia>
            ) : (
              <ContainerDia>
                <Dia onDoubleClick={() => onClickEvent(numeroDia)}>
                  <div>
                    {numeroDia === diaActual ? (
                      <MarcadorDia>{numeroDia}</MarcadorDia>
                    ) : (
                      <p key={index}>{numeroDia}</p>
                    )}

                    <WrapperNotas>{getNotasDelDia(numeroDia)}</WrapperNotas>
                  </div>
                </Dia>
              </ContainerDia>
            )
          )}
        </ContainerCalendario>
        <Modal
          show={showModal}
          title="Tarea del dia"
          onClose={() => setShowModal(false)}
        >
          <ContainerEdit>
            <p>INGRSE SU TAREA</p>
            <input
              type="text"
              value={editNota}
              onChange={(e) => setEditNota(e.target.value)}
            />
            <button onClick={onClickEventEdit}>
              {editNota.length ? "GUARDAR" : "EDITAR"}
            </button>
          </ContainerEdit>
        </Modal>
      </ContainerGeneralCalendario>
    </>
  );
};

export default Calendario;
