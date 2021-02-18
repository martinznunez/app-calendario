import {
  OBTENER_YEAR_ACTUAL_EXITO,
  OBTENER_MONTH_ACTUAL_EXITO,
  OBTENER_CANTIDAD_DAYS_MONTH_EXITO,
  OBTENER_NOTAS_EXITO,
  OBTENER_NUMERO_NOTA_POR_DIA_EXITO,
  ACTUALIZAR_NOTA,
  MONTH_NEXT,
  MONTH_PREVIOUS,
} from "../types/index";

export function getYear(year) {
  return (dispatch) => {
    dispatch(ResultadoYear(year));
  };
}

export function getMonth(Month) {
  return (dispatch) => {
    dispatch(ResultadoMonth(Month));
  };
}

export function getDays(cantidadDiasDelMes) {
  return (dispatch) => {
    dispatch(ResultadoDays(cantidadDiasDelMes));
  };
}

export function notasActions(notas) {
  return (dispatch) => {
    dispatch(notasValue(notas));
  };
}

export function notaPorDiaActions(numeroDia) {
  return (dispatch) => {
    dispatch(notaPorDia(numeroDia));
  };
}

export function actualizarNota(notaId, text) {
  return (dispatch) => {
    dispatch(actualizarNotaAction(notaId, text));
  };
}

export function monthNext(getMonthNext) {
  return (dispatch) => {
    dispatch(actualizarState(getMonthNext));
  };
}

export function monthPrevious(getMonthPrevious) {
  return (dispatch) => {
    dispatch(actualizarStatePrevious(getMonthPrevious));
  };
}

const ResultadoYear = (year) => ({
  type: OBTENER_YEAR_ACTUAL_EXITO,
  payload: year,
});

const ResultadoMonth = (Month) => ({
  type: OBTENER_MONTH_ACTUAL_EXITO,
  payload: Month,
});

const ResultadoDays = (cantidadDiasDelMes) => ({
  type: OBTENER_CANTIDAD_DAYS_MONTH_EXITO,
  payload: cantidadDiasDelMes,
});

const notasValue = (notas) => ({
  type: OBTENER_NOTAS_EXITO,
  payload: notas,
});

const notaPorDia = (numeroDia) => ({
  type: OBTENER_NUMERO_NOTA_POR_DIA_EXITO,
  payload: numeroDia,
});

const actualizarNotaAction = (notaId, text) => ({
  type: ACTUALIZAR_NOTA,
  payload: {
    notaId,
    text,
  },
});

const actualizarState = (getMonthNext) => ({
  type: MONTH_NEXT,
  payload: getMonthNext,
});

const actualizarStatePrevious = (getMonthPrevious) => ({
  type: MONTH_PREVIOUS,
  payload: getMonthPrevious,
});
