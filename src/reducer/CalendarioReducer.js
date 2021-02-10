import {
  OBTENER_YEAR_ACTUAL_EXITO,
  OBTENER_MONTH_ACTUAL_EXITO,
  OBTENER_CANTIDAD_DAYS_MONTH_EXITO,
  OBTENER_NOTAS_EXITO,
  OBTENER_NUMERO_NOTA_POR_DIA_EXITO,
  ACTUALIZAR_NOTA,
} from "../types/index";

const initialState = {
  year: "",
  months: [],
  days: [],
  error: null,
  loading: false,
  notas: [],
  NumeroDeNota: "",
};

export default function calendarioReducer(state = initialState, action) {
  switch (action.type) {
    case OBTENER_YEAR_ACTUAL_EXITO:
      return {
        ...state,
        year: action.payload,
        error: null,
      };
    case OBTENER_MONTH_ACTUAL_EXITO:
      return {
        ...state,
        months: action.payload + 1,
        error: null,
      };

    case OBTENER_CANTIDAD_DAYS_MONTH_EXITO:
      return {
        ...state,
        days: action.payload,
        error: null,
      };
    case OBTENER_NOTAS_EXITO:
      return {
        ...state,
        notas: [...state.notas, action.payload],
        error: null,
      };

    case OBTENER_NUMERO_NOTA_POR_DIA_EXITO:
      return {
        ...state,
        NumeroDeNota: action.payload,
        error: null,
      };

    case ACTUALIZAR_NOTA:
      const { text, notaId } = action.payload;

      const notaParaModificar = state.notas.find((nota) => nota.id === notaId);
      notaParaModificar.text = text;
      const copiaNotas = [...state.notas];

      const notasFinal = copiaNotas.map((nota) => {
        if (nota.id === notaParaModificar.id) {
          return notaParaModificar;
        }
        return nota;
      });

      return {
        ...state,
        notas: notasFinal,
        error: null,
      };

    default:
      return state;
  }
}
