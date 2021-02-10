import {
  OBTENER_YEAR_ACTUAL_EXITO,
  OBTENER_MONTH_ACTUAL_EXITO,
  OBTENER_CANTIDAD_DAYS_MONTH_EXITO,
  OBTENER_NOTAS_EXITO,
  OBTENER_NUMERO_NOTA_POR_DIA_EXITO,
  ACTUALIZAR_NOTA,
} from "../types/index";

export function obtenerYear(year) {
  return (dispatch) => {
    dispatch(ResultadoYear(year));
  };
}

export function obtenerMonth(Month) {
  return (dispatch) => {
    dispatch(ResultadoMonth(Month));
  };
}

export function obtenerDays(cantidadDiasDelMes) {
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
